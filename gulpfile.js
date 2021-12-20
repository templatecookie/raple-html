const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const minifyCss = require('gulp-clean-css');
const plumberNotifier = require('gulp-plumber-notifier');
const sourcemaps = require('gulp-sourcemaps');
//const sass = require('gulp-sass');
const sass = require('gulp-dart-sass');
const del = require('del');
//const imagemin = require('gulp-imagemin');
//const imageminPngQuant = require('imagemin-pngquant');
//const imageminjpegCrompress = require('imagemin-jpeg-recompress');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
//const csscomb = require('gulp-csscomb');
const browserSync = require('browser-sync').create();
const prettyHtml = require('gulp-pretty-html');
const nunjucksRender = require('gulp-nunjucks-render');
const cssbeautify = require('gulp-cssbeautify');

//path 
const files = {
    output: 'dist',
    templates: 'src/templates',
    layout: 'src/layout',
    pages: 'src/pages',
    sass_path: 'src/sass/**/*.{sass,scss}',
    css_path: 'src/css/**/*.css',
    plugins_path: 'src/js/plugins/**/*.js',
    main_js_path: 'src/js/main.js',
    fonts_path: 'src/fonts/**/*',
    jquery_js_path: 'src/js/jquery-3.6.0.min.js',
    image_path: 'src/images/**/*.{png,jpeg,jpg,svg,gif,ico}',
    buildOutput:'build'
};



function serve(done) {
    browserSync.init({
        server: {
            baseDir: files.output
        },
    });
    done();

}

function nunjucks(done) {
    console.log("Rendering nunjucks files..");
    return src(files.pages + '/**/*.+(html|nunjucks|njk)')
        .pipe(nunjucksRender({
            path: [files.templates],
            watch: true,
        }))
        .pipe(plumberNotifier())
        .pipe(prettyHtml({
            indent_size: 2,
            indent_char: ' ',
            unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
            extra_liners: ['head', 'body'],
        }))
        .pipe(dest(files.output))
        .pipe(browserSync.stream());
    done();
}



function sassCompile() {
    console.log('sass task start');
    return src(files.sass_path)
        .pipe(plumberNotifier())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssbeautify({
            indent: '',
            openbrace: 'separate-line',
            autosemicolon: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(files.output + "/" + 'assets/css'))
        .pipe(browserSync.stream())
        .pipe(rename({ suffix: ".min" }))
        .pipe(minifyCss())
        .pipe(dest(files.output + "/" + 'assets/css'));
}

function scriptsTask() {
    console.log('script task start');
    return src(files.plugins_path)
        .pipe(plumberNotifier())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('rt-plugins.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(files.output + "/" + "assets/js"))
        .pipe(browserSync.stream());
}

function appJstask() {
    return src(files.main_js_path)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(plumberNotifier())
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(dest(files.output + "/" + "assets/js"))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest(files.output + "/" + "assets/js"))
        .pipe(browserSync.stream());
}

function csspluginTask() {
    console.log('css plugin task start');
    return src(files.css_path)
        .pipe(plumberNotifier())
        .pipe(concat('rt-plugins.css'))
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(files.output + "/" + "assets/css"))
        .pipe(browserSync.stream());
}

function imagetask() {
    return src(files.image_path)
        // .pipe(imagemin(
        //     [
        //         imagemin.gifsicle(),
        //         imagemin.jpegtran(),
        //         imagemin.optipng(),
        //         imagemin.svgo(),
        //         imageminPngQuant(),
        //         imageminjpegCrompress()
        //     ]
        // ))
        .pipe(dest(files.output + "/" + "assets/images"))
        .pipe(browserSync.stream());
}

function copyfonts() {
    return src(files.fonts_path)
        .pipe(dest(files.output + "/" + "assets/fonts"))
        .pipe(browserSync.stream());
}

function copycss() {
    return src(files.css_path)
        .pipe(dest(files.output + "/" + "assets/css"))
        .pipe(browserSync.stream());
}

function copyjs() {
    return src(files.plugins_path)
        .pipe(dest(files.output + "/" + "assets/js"))
        .pipe(browserSync.stream());
}


function copyjs2() {
    return src(files.jquery_js_path)
        .pipe(dest(files.output + "/" + "assets/js"))
        .pipe(browserSync.stream());
}

function copyjs3() {
    return src("src/js/Dashboard-Chart.js")
        .pipe(dest(files.output + "/" + "assets/js"))
        .pipe(browserSync.stream());
}

function copysass() {
    return src(files.sass_path)
        .pipe(dest(files.output + "/" + "assets/sass"))
        .pipe(browserSync.stream());
}

function dlt_dist() {
    return del.sync([
        files.output

    ]);
}



function reload(done) {
    browserSync.reload();
    done();
}

function watchfiles() {
    watch([files.sass_path], series(sassCompile, reload));
    watch([files.css_path], series(csspluginTask, reload));
    watch([files.main_js_path], series(appJstask, reload));
    watch([files.plugins_path], series(scriptsTask, reload));
    watch([files.image_path], series(imagetask, reload));
    watch([files.fonts_path], series(copyfonts, reload));
    watch([files.css_path], series(copycss, reload));
    watch([files.plugins_path], series(copyjs, reload));
    watch(['src/templates/**/*.html', 'src/pages/**/*.html'], series(nunjucks, reload));
    watch(files.output + '/*').on('change', browserSync.reload);
}

function  build (){
    return src(['dist/**/*'])
    .pipe(dest("./build"))
}


exports.default = parallel(
    dlt_dist,
    nunjucks,
    sassCompile,
    csspluginTask,
    copyjs2,
    copyjs,
    copycss,
    imagetask,
    copyfonts,
    scriptsTask,
    reload,
    serve,
    appJstask,
    watchfiles
 

);

exports.build = parallel(
    nunjucks,
    sassCompile,
    csspluginTask,
    copyjs2,
    copyjs,
    copycss,
    imagetask,
    copyfonts,
    scriptsTask,
    appJstask,
    build
)






