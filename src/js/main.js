/*
* ----------------------------------------------------------------------------------------
    Template Name: Relik
    Template URI: 
    Description: 
    Author: 
    Author URI: 
    Version: 

    1.0 Dropdown Menu
    1.01 Sticky Menu  
    

* ----------------------------------------------------------------------------------------
*/
(function ($) {
  "use strict";
  

  var template_x = document.getElementById("template");
  var template2_x = document.getElementById("template2");
  if(template2_x) { 
    tippy(".notifications", {
      arrow: false,
      delay: 40,
      content: template_x.innerHTML,
      allowHTML: true,
      interactive: "true",
      placement: "bottom-end",
      animation: "fade",
      theme: "light",
      maxWidth: "none",
      trigger: "click",
    });
  }

  if(template2_x) {
    tippy(".openaccount", {
      arrow: false,
      delay: 40,
      content: template2_x.innerHTML,
      allowHTML: true,
      interactive: "true",
      placement: "bottom-end",
      animation: "fade",
      theme: "light",
      maxWidth: "none",
      trigger: "click",
    });
  }

  $(".opener_sidebar").on("click", function (e) {
    e.preventDefault(),
      $("body").toggleClass("sidebar-collapse"),
      992 <= $(window).width()
        ? $("body").toggleClass("vertical-collpsed")
        : $("body").removeClass("vertical-collpsed");
  });

  $(".back_sidebar_icon").on("click", function () {
    $("body").removeClass("sidebar-collapse");
  });

  //metisMenu active

  if(document.getElementById('side-menu')) { 
    $("#side-menu").metisMenu();
  }

  if(document.getElementById('side-menu'))  { 

    
    $("#side-menu a").each(function () {
      var e = window.location.href.split(/[?#]/)[0];
      this.href == e &&
        ($(this).addClass("active"),
        $(this).parent().addClass("mm-active"),
        $(this).parent().parent().addClass("mm-show"),
        $(this).parent().parent().prev().addClass("mm-active"),
        $(this).parent().parent().parent().addClass("mm-active"),
        $(this).parent().parent().parent().parent().addClass("mm-show"),
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("mm-active"));
    }),
    $(document).ready(function () {
      var e;
      0 < $("#side-menu").length &&
        0 < $("#side-menu .mm-active .active").length &&
        300 < (e = $("#side-menu .mm-active .active").offset().top) &&
        ((e -= 300),
        $(".app-sidebar .simplebar-content-wrapper").animate(
          { scrollTop: e },
          "slow"
        ));
    });
  }



  // select 2 active
  if (document.querySelector(".rt-selectactive")) {
    $(".rt-selectactive").select2({
      minimumResultsForSearch: Infinity,
    });
  }

  function stickyHeader() {
    let mainheader = $(".rt-sticky"),
      height = mainheader.outerHeight(),
      scroll = $(document).scrollTop();
    $(window).on("load", function () {
      if ($(document).scrollTop() > height) {
        if (mainheader.hasClass("rt-sticky-active")) {
          mainheader.removeClass("rt-sticky-active");
        } else {
          mainheader.addClass("rt-sticky-active");
        }
      }
    });
    $(window).on("scroll", function () {
      let scrolled = $(document).scrollTop(),
        header = $(".rt-sticky-active");
      if (scrolled > scroll) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
      if (scrolled === 0) {
        mainheader.removeClass("rt-sticky-active");
      } else {
        mainheader.addClass("rt-sticky-active");
      }
      scroll = $(document).scrollTop();
    });
  }

  stickyHeader();

  $(".togglepass").on("click", function () {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });

  $(".togglepass2").on("click", function () {
    var x = document.getElementById("myinput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });

  var layoutbox = document.getElementsByName("layoutbox");

  var theme = window.localStorage.getItem('data-layout');

  if(theme) {
    
      document.documentElement.setAttribute('data-layout', theme);
      localStorage.setItem( 'data-layout', theme);
     
}

var layoutmode = {
  "vertical":"vertical",
  "horizental":"horizental",
} 

var val = localStorage.getItem('layoutbox');
for (var i=0;i<layoutbox.length;i++) {
  layoutbox[i].onclick=function() {
    var lay = layoutmode[this.value];
    document.documentElement.setAttribute('data-layout', lay);
    localStorage.setItem( 'data-layout', lay); 
    
  }
  if(layoutbox[i].value == val){
    layoutbox[i].checked = true;
  }
}

$('input[name="layoutbox"]').on('change', function(){
  localStorage.setItem('layoutbox', $(this).val());

});




  // $("#vertical_lable").change(function () {
  //   if ($(this).is(":checked")) {
  //     document.documentElement.setAttribute('data-layout', 'vertical');
  //     localStorage.setItem( 'data-layout', 'vertical');  
  //   }
  // });

  // $("#horizental_label").change(function () {
  //   if ($(this).is(":checked")) {
  //     document.documentElement.removeAttribute('data-layout', 'vertical');
  //     document.documentElement.setAttribute('data-layout', 'horizental');
  //     localStorage.setItem( 'data-layout', 'horizental');  
      
  //   }
  // });




var checkBox = document.getElementsByName("sidebar");

  var theme = window.localStorage.getItem('data-sidebar');

  if(theme) {
    
      document.documentElement.setAttribute('data-sidebar', theme);
      localStorage.setItem( 'data-sidebar', theme);
     
}

var sidebarmode = {
  "white":"white",
  "black":"black",
  "blue":"blue"
} 

var val = localStorage.getItem('sidebar');
for (var i=0;i<checkBox.length;i++) {
  checkBox[i].onclick=function() {
    var col = sidebarmode[this.value];
    document.documentElement.setAttribute('data-sidebar', col);
    localStorage.setItem( 'data-sidebar', col); 
    
  }
  if(checkBox[i].value == val){
    checkBox[i].checked = true;
  }
}

$('input[name="sidebar"]').on('change', function(){
  localStorage.setItem('sidebar', $(this).val());

});

 

  $("#layout").on("click", function () {
    $("#appSettings").toggleClass("open");
    $(".settings-overlay").addClass("open")
    
  });
  
  $(".settings-overlay, #closesetting").on("click", function () {
    $("#appSettings").removeClass("open");
    $(".settings-overlay").removeClass("open")
    
  });

//hide & show
  // calender 

  $(".date-picker-calender").datepicker(),

//map
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    
    regionStyle: {
      initial: { fill: '#B6BFF3' },
      hover: { fill: '#4452FF', 'fill-opacity': 1 },
    },

    backgroundColor: 'transparent',
  });
  //all chart
  var barchartOne = {
    chart: {
      height: 148,
      type: 'bar',
      stacked: true,
      stackType: '20%',
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '40px',
        barHeight: '100%',
        borderRadius: 4,
  
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { curve: 'smooth', width: 2 },
    series: [
      {
        data: [1000, 400, 1000, 600, 700, 400, 800],
      },
      {
        data: [300, 600, 150, 400, 450, 700, 400],
      },
    ],
    colors: ['#0E5FD9', '#F0F6FF'],
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: false,
     
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: 'dashed',
      opacity: [1, 1],
    },
    xaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

if (document.getElementById('bar-chart1')) {
    var chart = new ApexCharts(
      document.querySelector('#bar-chart1'),
      barchartOne
    );
    chart.render();
  } 

  var options = {
    chart: {
      height: 62,
      type: 'area',
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { curve: 'smooth', width: 2 },
    series: [
      {
        type: 'area',

        data: [800, 600, 1000, 800, 600, 1000, 800, 900],
      },
      
    ],
    colors: ['#0FAF62',],

    tooltip: {
      theme: 'light',
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: 'solid',
      opacity: [0.10],
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan'],
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };

  if (document.getElementById('area-spaline-bottom')) {
    var chart2 = new ApexCharts(
      document.querySelector('#area-spaline-bottom'),
      options
    );

    chart2.render();
  }

  var options2 = {
    chart: {
      height: 62,
      type: 'area',
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { curve: 'smooth', width: 2 },
    series: [
      {
        type: 'area',

        data: [800, 600, 1000, 800, 600, 1000, 800, 900],
      },
      
    ],
    colors: ['#E84646',],

    tooltip: {
      theme: 'light',
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: 'solid',
      opacity: [0.10],
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan'],
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };

  if (document.getElementById('area-spaline-bottom2')) {
    var chart3 = new ApexCharts(
      document.querySelector('#area-spaline-bottom2'),
      options2
    );

    chart3.render();
  }

  var barchar2 = {
    chart: {
      height: 120,
      type: 'bar',
      
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '70px',
        barHeight: '100%',
  
      },
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#FFD599',
          colorTo: '#FFD599',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { curve: 'smooth', width: 2 },
    series: [
      
      {
        data: [200, 400, 900, 800, 500, 600],
      },
    ],
    colors: ['#FFD599'],
    tooltip: {
      theme: 'light',
    },
    grid: {
      show: false,
     
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: 'dashed',
      opacity: [1, 1],
    },
    xaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  if (document.getElementById('barchart2')) {
    var chart4 = new ApexCharts(
      document.querySelector('#barchart2'),
      barchar2
    );

    chart4.render();
  }
  var line_1 = {
    chart: {
      height: 148,
      type: 'area',
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [4, 3, 3],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    series: [
      {
        type: 'area',

        data: [45, 52, 38, 54, 33, 26, 60]
      },
      
    ],
    colors: ['#0FAF62',],

    tooltip: {
      theme: 'light',
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: 'solid',
      opacity: [0.10],
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan'],
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };

  if (document.getElementById('line-1')) {
    var chart5 = new ApexCharts(
      document.querySelector('#line-1'),
      line_1
    );

    chart5.render();
  }

  var user_chart_option = {
    chart: {
      height: 234,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      area: {
        fillTo: 'origin',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { curve: 'smooth', width: 5 },
    series: [
      {
        data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
      },
    ],
    colors: ['#4452FF'],

    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: true,
    },

    fill: {
      type: 'gradient',
      colors: '#0E5FD9',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.9,
        stops: [0, 100, 0],
      },
    },
    xaxis: {
      categories: ['November 01', 'November 10', 'November 20', 'November 30'],
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  if (document.getElementById('user_chart')) {
    var user_chart = new ApexCharts(
      document.querySelector('#user_chart'),
      user_chart_option
    );

    user_chart.render();
  }

    // Apex charts 
    var line_chart_keyword_1 = {
      maintainAspectRatio: true,
      chart: {
        height: 24,
        type: 'line',
        toolbar: {
          show: false,
        },
  
        sparkline: {
          enabled: true,
        },
      },
  
      dataLabels: {
        enabled: false,
      },
      stroke: { curve: 'smooth', width: 2 },
      series: [
        {
          data: [70, 20, 80, 10, 40, 30, 60, 40, 90, 20],
        },
      ],
      colors: ['#0066FF'],
  
      tooltip: {
        theme: 'light',
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
  
      xaxis: {
        show: false,
      },
      legend: {
        show: false,
      },
    };
    
    if (document.getElementById('line_chartkeyword_1')) {
        var line_chart_create = new ApexCharts(
          document.querySelector('#line_chartkeyword_1'),
          line_chart_keyword_1,
        );
    
        line_chart_create.render();
    }
    if (document.getElementById('line_chartkeyword_2')) {
        var line_chart_create = new ApexCharts(
          document.querySelector('#line_chartkeyword_2'),
          line_chart_keyword_1,
        );
    
        line_chart_create.render();
    }
    if (document.getElementById('line_chartkeyword_3')) {
        var line_chart_create = new ApexCharts(
          document.querySelector('#line_chartkeyword_3'),
          line_chart_keyword_1,
        );
    
        line_chart_create.render();
    }
    if (document.getElementById('line_chartkeyword_4')) {
        var line_chart_create = new ApexCharts(
          document.querySelector('#line_chartkeyword_4'),
          line_chart_keyword_1,
        );
    
        line_chart_create.render();
    }
    if (document.getElementById('line_chartkeyword_5')) {
        var line_chart_create = new ApexCharts(
          document.querySelector('#line_chartkeyword_5'),
          line_chart_keyword_1,
        );
    
        line_chart_create.render();
    }

    // pricing js
    $(".toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");
      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target)
          .parent()
          .parent()
          .removeClass("monthly-active")
          .addClass("yearly-active");
      } else {
        $(e.target)
          .parent()
          .parent()
          .removeClass("yearly-active")
          .addClass("monthly-active");
      }
    });

    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");
      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });


    // * Show / Hide password type function 
    function showPassword(input, icon) { 
      icon.addEventListener('click', (e) => { 
        // todo 1:  toggle eye show / hide  
        icon.classList.toggle('ph-eye-slash');
  
        // todo 2: input type 
        input.type === 'password' ? input.type = 'text' : input.type = 'password';
      })
    }

    const input =  document.querySelector("#password-hide_show");
    const inputIcon = document.querySelector(".has-badge i");

    const finputOne = document.querySelector("#password-hide_show1");
    const ficonOne = document.querySelector(".select-icon__one i");

    const finputTwo = document.querySelector("#password-hide_show2");
    const ficonTwo = document.querySelector(".select-icon__two i");

    const finputThree = document.querySelector("#password-hide_show3");
    const ficonThree = document.querySelector(".select-icon__three i");

    const finputFour = document.querySelector("#password-hide_show4");
    const ficonFour = document.querySelector(".select-icon__four i");

    const finputFive = document.querySelector("#password-hide_show5");
    const ficonFive = document.querySelector(".select-icon__five i");

    const finputSix = document.querySelector("#password-hide_show6");
    const ficonSix = document.querySelector(".select-icon__six i");

    const finputSeven = document.querySelector("#password-hide_show7");
    const ficonSeven = document.querySelector(".select-icon__seven i");


    
    // Input page 
    if(input || inputIcon) { 
      showPassword(input,inputIcon)
    }

    // form elements page 
    if (finputOne || ficonOne) { 
      showPassword(finputOne,ficonOne)
    }
    if(finputTwo || ficonTwo ) { 
      showPassword(finputTwo,ficonTwo)
    }
    if(finputThree || ficonThree) { 
      
      showPassword(finputThree,ficonThree)
    }
    if(finputFour || ficonFour) { 
      
      showPassword(finputFour,ficonFour)
    }
    if( finputFive || ficonFive ) { 
      showPassword(finputFive,ficonFive)
    }
    if(finputSix || ficonSix) { 

      showPassword(finputSix,ficonSix)
    }

    if(finputSeven || ficonSeven) { 

      showPassword(finputSeven,ficonSeven)
    }


    var validation = false;
    var myTimeoutId = null;


    $('#info').onclick = function() {
        $('#console').style.display = "block";
        console.log("hello");
    }

    $('#close').onclick = function() {
        $('#console').style.display = "none";
    }

    var config = {
        mode: "text/html",
        extraKeys: {"Ctrl-Space": "autocomplete"},
        lineNumbers: true,
        keyMap:"sublime",
        tabSize:4,
    };

    // initialize editor
    var editor = CodeMirror.fromTextArea(document.getElementById('editor'),config);
    editor.setOption("theme", "material-ocean");

	function loadHtml(html) {
		const document_pattern = /( )*?document\./i;
		let finalHtml = html.replace(document_pattern, "document.getElementById('result').contentWindow.document.");
		$('#result').contents().find('html').html(finalHtml);
	}

	loadHtml($('#editor').val());

    editor.on('change',function(cMirror){

        if (myTimeoutId!==null) {
            clearTimeout(myTimeoutId);
        }
        myTimeoutId = setTimeout(function() {

                try{

                    loadHtml(cMirror.getValue());

                }catch(err){

                    console.log('err:'+err);

                }


            }, 1000);

    });

    // * Inspired from : Alex Raven 
    // * Example :  https://codepen.io/asraven/pen/qbrgje?editors=1010 
    // Folder Structures
    var allFolders = $(".directory-list li > ul");
    allFolders.each(function() {
  
      // add the folder class to the parent <li>
      var folderAndName = $(this).parent();
      folderAndName.addClass("folder");
  
      // backup this inner <ul>
      var backupOfThisFolder = $(this);
      // then delete it
      $(this).remove();
      // add an <a> tag to whats left ie. the folder name
      folderAndName.wrapInner("<a href='#' />");
      // then put the inner <ul> back
      folderAndName.append(backupOfThisFolder);
  
      // now add a slideToggle to the <a> we just added
      folderAndName.find("a").click(function(e) {
        $(this).siblings("ul").slideToggle("slow");
        e.preventDefault();
      });
  
    });


    // Presentation page 

    // sticky navbar 
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 330) {
        $('.p-header .navbar').addClass('fixed');
       }
       else {
        $('.p-header .navbar').removeClass('fixed');
       }
    });


})(jQuery);
