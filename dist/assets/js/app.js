"use strict";

/*
* ----------------------------------------------------------------------------------------
    Template Name: Raple
    Template URI: 
    Description: 
    Author: templatecookie
    Author URI: 
    Version: 

   
    1. Charts
      1.1 bar 
      1.2 area 
      1.3 line 
      1.4 pie 

    2. Dropdown
    3. Sidebar
    4. Menu 
    5. Sticky Navbar 
    6. Input Type Changer 
    7. Themes
    8. Layouts 
    9. Date Picker
    10. Map
    

* ----------------------------------------------------------------------------------------
*/
(function ($) {
  "use strict"; // 1. Charts
  // bar chart

  var barchartOne = {
    chart: {
      height: 148,
      type: "bar",
      stacked: true,
      stackType: "20%",
      toolbar: {
        autoSelected: "pan",
        show: false
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "40px",
        barHeight: "100%",
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    series: [{
      data: [1000, 400, 1000, 600, 700, 400, 800]
    }, {
      data: [300, 600, 150, 400, 450, 700, 400]
    }],
    colors: ["#0E5FD9", "#F0F6FF"],
    tooltip: {
      theme: "dark"
    },
    grid: {
      show: false
    },
    yaxis: {
      show: false
    },
    fill: {
      type: "dashed",
      opacity: [1, 1]
    },
    xaxis: {
      show: false
    },
    legend: {
      show: false
    }
  };
  var barchar2 = {
    chart: {
      height: 120,
      type: "bar",
      toolbar: {
        autoSelected: "pan",
        show: false
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "70px",
        barHeight: "100%"
      }
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#FFD599",
          colorTo: "#FFD599",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    series: [{
      data: [200, 400, 900, 800, 500, 600, 400]
    }],
    colors: ["#FFD599"],
    tooltip: {
      theme: "light"
    },
    grid: {
      show: false
    },
    yaxis: {
      show: false
    },
    fill: {
      type: "dashed",
      opacity: [1, 1]
    },
    legend: {
      show: false
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false
      }
    }
  };

  if (document.getElementById("bar-chart1")) {
    var chart = new ApexCharts(document.querySelector("#bar-chart1"), barchartOne);
    chart.render();
  }

  if (document.getElementById("barchart2")) {
    var chart4 = new ApexCharts(document.querySelector("#barchart2"), barchar2);
    chart4.render();
  } // area chart


  var options = {
    chart: {
      height: 62,
      type: "area",
      toolbar: {
        autoSelected: "pan",
        show: false
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    series: [{
      type: "area",
      data: [800, 600, 1000, 800, 600, 1000, 800, 900]
    }],
    colors: ["#0FAF62"],
    tooltip: {
      theme: "light"
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      type: "solid",
      opacity: [0.1]
    },
    xaxis: {
      categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan"],
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  var options2 = {
    chart: {
      height: 62,
      type: "area",
      toolbar: {
        autoSelected: "pan",
        show: false
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    series: [{
      type: "area",
      data: [800, 600, 1000, 800, 600, 1000, 800, 900]
    }],
    colors: ["#E84646"],
    tooltip: {
      theme: "light"
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      type: "solid",
      opacity: [0.1]
    },
    xaxis: {
      categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan"],
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  var line_1 = {
    chart: {
      height: 148,
      type: "area",
      toolbar: {
        autoSelected: "pan",
        show: false
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [4, 3, 3],
      curve: "straight",
      dashArray: [0, 8, 5]
    },
    series: [{
      type: "area",
      data: [45, 52, 38, 54, 33, 26, 60]
    }],
    colors: ["#0FAF62"],
    tooltip: {
      theme: "light"
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      type: "solid",
      opacity: [0.1]
    },
    xaxis: {
      categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan"],
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  var user_chart_option = {
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      area: {
        fillTo: "origin"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 5
    },
    series: [{
      data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80]
    }],
    colors: ["#4452FF"],
    tooltip: {
      theme: "dark"
    },
    grid: {
      show: true
    },
    fill: {
      type: "gradient",
      colors: "#0E5FD9",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.9,
        stops: [0, 100, 0]
      }
    },
    xaxis: {
      categories: ["jan", "feb", "mar", "appril", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"]
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };

  if (document.getElementById("area-spaline-bottom")) {
    var chart2 = new ApexCharts(document.querySelector("#area-spaline-bottom"), options);
    chart2.render();
  }

  if (document.getElementById("area-spaline-bottom2")) {
    var chart3 = new ApexCharts(document.querySelector("#area-spaline-bottom2"), options2);
    chart3.render();
  }

  if (document.getElementById("line-1")) {
    var chart5 = new ApexCharts(document.querySelector("#line-1"), line_1);
    chart5.render();
  }

  if (document.getElementById("user_chart")) {
    var user_chart = new ApexCharts(document.querySelector("#user_chart"), user_chart_option);
    user_chart.render();
  } // Line charts


  var line_chart_keyword_1 = {
    maintainAspectRatio: true,
    chart: {
      height: 24,
      type: "line",
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    series: [{
      data: [70, 20, 80, 10, 40, 30, 60, 40, 90, 20]
    }],
    colors: ["#0066FF"],
    tooltip: {
      theme: "light"
    },
    grid: {
      show: false
    },
    yaxis: {
      show: false
    },
    xaxis: {
      show: false
    },
    legend: {
      show: false
    }
  };

  if (document.getElementById("line_chartkeyword_1")) {
    var line_chart_create = new ApexCharts(document.querySelector("#line_chartkeyword_1"), line_chart_keyword_1);
    line_chart_create.render();
  }

  if (document.getElementById("line_chartkeyword_2")) {
    var line_chart_create = new ApexCharts(document.querySelector("#line_chartkeyword_2"), line_chart_keyword_1);
    line_chart_create.render();
  }

  if (document.getElementById("line_chartkeyword_3")) {
    var line_chart_create = new ApexCharts(document.querySelector("#line_chartkeyword_3"), line_chart_keyword_1);
    line_chart_create.render();
  }

  if (document.getElementById("line_chartkeyword_4")) {
    var line_chart_create = new ApexCharts(document.querySelector("#line_chartkeyword_4"), line_chart_keyword_1);
    line_chart_create.render();
  }

  if (document.getElementById("line_chartkeyword_5")) {
    var line_chart_create = new ApexCharts(document.querySelector("#line_chartkeyword_5"), line_chart_keyword_1);
    line_chart_create.render();
  } // pie chart


  var donut_options = {
    series: [90, 50, 200],
    chart: {
      width: 220,
      type: "donut"
    },
    colors: ["#FF9500", "#E84646", "#0E5FD9"],
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 220
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      show: false
    }
  };

  if (document.querySelector("#dount_chart")) {
    var dountChart = new ApexCharts(document.querySelector("#dount_chart"), donut_options);
    dountChart.render();
  } // 2. Dropdown


  var template_x = document.getElementById("template");
  var template2_x = document.getElementById("template2"); // Dropdown - notification

  if (template2_x) {
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
      trigger: "click"
    });
  }

  if (template2_x) {
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
      trigger: "click"
    });
  }

  if (document.querySelector(".rt-selectactive")) {
    $(".rt-selectactive").select2({
      minimumResultsForSearch: Infinity
    });
  } // 3. Sidebar


  var SidebarOpenrIcon = document.getElementById("opener_icon");
  var MainMenuOpen = document.getElementById("mainmenuOpen");

  if (MainMenuOpen) {
    MainMenuOpen.addEventListener("click", function (e) {
      e.preventDefault();
      $(".main-menu").toggleClass("active-mobile-menu");
      $(".rt-mobile-menu-overlay").addClass("active");
    });
  }

  $(".rt-mobile-menu-close, .rt-mobile-menu-overlay").on("click", function () {
    $(".main-menu").removeClass("active-mobile-menu");
    $(".rt-mobile-menu-overlay").removeClass("active");
    return false;
  });
  $(".menu-item-has-children > a").on("click", function () {
    var element = $(this).parent("li");

    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(300);
      element.find(".rt-mega-menu").slideUp(300);
    } else {
      element.addClass("open");
      element.children("ul").slideDown(300);
      element.children(".rt-mega-menu").slideDown(300);
      element.siblings("li").children("ul").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp();
    }
  });
  $(".opener_sidebar").on("click", function (e) {
    e.preventDefault();

    if (window.innerWidth < 992) {
      SidebarOpenrIcon.classList.toggle("has-cross");
    }

    $("body").toggleClass("sidebar-collapse"), 992 <= $(window).width() ? $("body").toggleClass("vertical-collpsed") : $("body").removeClass("vertical-collpsed");
  });
  $(".back_sidebar_icon").on("click", function () {
    $("body").removeClass("sidebar-collapse");
  }); // 4. Menu

  if (document.getElementById("side-menu")) {
    $("#side-menu").metisMenu();
  }

  if (document.getElementById("side-menu")) {
    $("#side-menu a").each(function () {
      var e = window.location.href.split(/[?#]/)[0];
      this.href == e && ($(this).addClass("active"), $(this).parent().addClass("mm-active"), $(this).parent().parent().addClass("mm-show"), $(this).parent().parent().prev().addClass("mm-active"), $(this).parent().parent().parent().addClass("mm-active"), $(this).parent().parent().parent().parent().addClass("mm-show"), $(this).parent().parent().parent().parent().parent().addClass("mm-active"));
    }), $(document).ready(function () {
      var e;
      0 < $("#side-menu").length && 0 < $("#side-menu .mm-active .active").length && 300 < (e = $("#side-menu .mm-active .active").offset().top) && (e -= 300, $(".app-sidebar .simplebar-content-wrapper").animate({
        scrollTop: e
      }, "slow"));
    });
  } // 5. Sticky Navbar


  function stickyHeader() {
    var mainheader = $(".rt-sticky"),
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
      var scrolled = $(document).scrollTop(),
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
  }); // 6. input type changer

  function showPassword(input, icon) {
    icon.addEventListener("click", function (e) {
      // todo 1:  toggle eye show / hide
      icon.classList.toggle("ph-eye-slash"); // todo 2: input type

      input.type === "password" ? input.type = "text" : input.type = "password";
    });
  }

  var input = document.querySelector("#password-hide_show");
  var inputIcon = document.querySelector(".has-badge i");
  var finputOne = document.querySelector("#password-hide_show1");
  var ficonOne = document.querySelector(".select-icon__one i");
  var finputTwo = document.querySelector("#password-hide_show2");
  var ficonTwo = document.querySelector(".select-icon__two i");
  var finputThree = document.querySelector("#password-hide_show3");
  var ficonThree = document.querySelector(".select-icon__three i");
  var finputFour = document.querySelector("#password-hide_show4");
  var ficonFour = document.querySelector(".select-icon__four i");
  var finputFive = document.querySelector("#password-hide_show5");
  var ficonFive = document.querySelector(".select-icon__five i");
  var finputSix = document.querySelector("#password-hide_show6");
  var ficonSix = document.querySelector(".select-icon__six i");
  var finputSeven = document.querySelector("#password-hide_show7");
  var ficonSeven = document.querySelector(".select-icon__seven i"); // Input page

  if (input || inputIcon) {
    showPassword(input, inputIcon);
  } // form elements page


  if (finputOne || ficonOne) {
    showPassword(finputOne, ficonOne);
  }

  if (finputTwo || ficonTwo) {
    showPassword(finputTwo, ficonTwo);
  }

  if (finputThree || ficonThree) {
    showPassword(finputThree, ficonThree);
  }

  if (finputFour || ficonFour) {
    showPassword(finputFour, ficonFour);
  }

  if (finputFive || ficonFive) {
    showPassword(finputFive, ficonFive);
  }

  if (finputSix || ficonSix) {
    showPassword(finputSix, ficonSix);
  }

  if (finputSeven || ficonSeven) {
    showPassword(finputSeven, ficonSeven);
  } // 7. Themes


  var layoutbox = document.getElementsByName("layoutbox");
  var theme = window.localStorage.getItem("data-layout");

  if (theme) {
    document.documentElement.setAttribute("data-layout", theme);
    localStorage.setItem("data-layout", theme);
  } // 8. Layouts


  var layoutmode = {
    vertical: "vertical",
    horizental: "horizental"
  };
  var val = localStorage.getItem("layoutbox");

  for (var i = 0; i < layoutbox.length; i++) {
    layoutbox[i].onclick = function () {
      var lay = layoutmode[this.value];
      document.documentElement.setAttribute("data-layout", lay);
      localStorage.setItem("data-layout", lay);
    };

    if (layoutbox[i].value == val) {
      layoutbox[i].checked = true;
    }
  }

  $('input[name="layoutbox"]').on("change", function () {
    localStorage.setItem("layoutbox", $(this).val());
  });
  var checkBox = document.getElementsByName("sidebar");
  var theme = window.localStorage.getItem("data-sidebar");

  if (theme) {
    document.documentElement.setAttribute("data-sidebar", theme);
    localStorage.setItem("data-sidebar", theme);
  }

  var sidebarmode = {
    white: "white",
    black: "black",
    blue: "blue"
  };
  var val = localStorage.getItem("sidebar");

  for (var i = 0; i < checkBox.length; i++) {
    checkBox[i].onclick = function () {
      var col = sidebarmode[this.value];
      document.documentElement.setAttribute("data-sidebar", col);
      localStorage.setItem("data-sidebar", col);
    };

    if (checkBox[i].value == val) {
      checkBox[i].checked = true;
    }
  }

  $('input[name="sidebar"]').on("change", function () {
    localStorage.setItem("sidebar", $(this).val());
  });
  $("#layout").on("click", function () {
    $("#appSettings").toggleClass("open");
    $(".settings-overlay").addClass("open");
  });
  $(".settings-overlay, #closesetting").on("click", function () {
    $("#appSettings").removeClass("open");
    $(".settings-overlay").removeClass("open");
  }); // 9. calender

  if (document.getElementsByClassName("date-picker-calender")) {
    $(".date-picker-calender").datepicker();
  } // 10. map


  if (document.getElementById("world-map")) {
    $("#world-map").vectorMap({
      map: "world_mill_en",
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: false,
      regionStyle: {
        initial: {
          fill: "#B6BFF3"
        },
        hover: {
          fill: "#4452FF",
          "fill-opacity": 1
        }
      },
      backgroundColor: "transparent"
    });
  } // pricing js


  $(".toggle-btn").on("click", function (e) {
    console.log($(e.target).parent().parent().hasClass("monthly-active"));
    $(e.target).toggleClass("clicked");

    if ($(e.target).parent().parent().hasClass("monthly-active")) {
      $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
    } else {
      $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
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
  var validation = false;
  var myTimeoutId = null;

  $("#info").onclick = function () {
    $("#console").style.display = "block";
    console.log("hello");
  };

  $("#close").onclick = function () {
    $("#console").style.display = "none";
  }; // presentioton


  $(window).scroll(function () {
    if ($(window).scrollTop() >= 120) {
      $(".p-header .navbar").addClass("fixed");
    } else {
      $(".p-header .navbar").removeClass("fixed");
    }
  });

  if (document.querySelector("table")) {
    document.querySelector("table").addEventListener("click", function (_ref) {
      var target = _ref.target;
      // discard direct clicks on input elements
      if (target.nodeName === "INPUT") return; // get the nearest tr

      var tr = target.closest("tr");
      tr.classList.toggle("selected");

      if (tr) {
        // if it exists, get the first checkbox
        var checkbox = tr.querySelector("input[type='checkbox']");

        if (checkbox) {
          // if it exists, toggle the checked property
          checkbox.checked = !checkbox.checked;
        }
      }
    });
  }

  function Util() {}

  Util.hasClass = function (el, className) {
    if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
  };

  Util.addClass = function (el, className) {
    var classList = className.split(" ");
    if (el.classList) el.classList.add(classList[0]);else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(" "));
  };

  Util.removeClass = function (el, className) {
    var classList = className.split(" ");
    if (el.classList) el.classList.remove(classList[0]);else if (Util.hasClass(el, classList[0])) {
      var reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
    if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(" "));
  };

  Util.toggleClass = function (el, className, bool) {
    if (bool) Util.addClass(el, className);else Util.removeClass(el, className);
  };

  Util.setAttributes = function (el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  Util.getChildrenByClassName = function (el, className) {
    var children = el.children,
        childrenByClass = [];

    for (var i = 0; i < el.children.length; i++) {
      if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
    }

    return childrenByClass;
  };

  Util.is = function (elem, selector) {
    if (selector.nodeType) {
      return elem === selector;
    }

    var qa = typeof selector === "string" ? document.querySelectorAll(selector) : selector,
        length = qa.length,
        returnArr = [];

    while (length--) {
      if (qa[length] === elem) {
        return true;
      }
    }

    return false;
  };

  Util.setHeight = function (start, to, element, duration, cb) {
    var change = to - start,
        currentTime = null;

    var animateHeight = function animateHeight(timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      var val = parseInt(progress / duration * change + start);
      element.style.height = val + "px";

      if (progress < duration) {
        window.requestAnimationFrame(animateHeight);
      } else {
        cb();
      }
    };

    element.style.height = start + "px";
    window.requestAnimationFrame(animateHeight);
  };

  Util.scrollTo = function (_final, duration, cb) {
    var start = window.scrollY || document.documentElement.scrollTop,
        currentTime = null;

    var animateScroll = function animateScroll(timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      if (progress > duration) progress = duration;
      var val = Math.easeInOutQuad(progress, start, _final - start, duration);
      window.scrollTo(0, val);

      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        cb && cb();
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  Util.moveFocus = function (element) {
    if (!element) element = document.getElementsByTagName("body")[0];
    element.focus();

    if (document.activeElement !== element) {
      element.setAttribute("tabindex", "-1");
      element.focus();
    }
  };

  Util.getIndexInArray = function (array, el) {
    return Array.prototype.indexOf.call(array, el);
  };

  Util.cssSupports = function (property, value) {
    if ("CSS" in window) {
      return CSS.supports(property, value);
    } else {
      var jsProperty = property.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
      return jsProperty in document.body.style;
    }
  };

  Util.extend = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
      deep = arguments[0];
      i++;
    }

    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  if (typeof window.CustomEvent !== "function") {
    var CustomEvent = function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  /**/


  (function () {
    var LanguagePicker = function LanguagePicker(element) {
      this.element = element;
      this.select = this.element.getElementsByTagName("select")[0];
      this.options = this.select.getElementsByTagName("option");
      this.selectedOption = getSelectedOptionText(this);
      this.pickerId = this.select.getAttribute("id");
      this.trigger = false;
      this.dropdown = false;
      this.firstLanguage = false; // dropdown arrow inside the button element

      this.svgPath = '<svg viewBox="0 0 16 16"><polygon points="3,5 8,11 13,5 "></polygon></svg>';
      initLanguagePicker(this);
      initLanguagePickerEvents(this);
    };

    function initLanguagePicker(picker) {
      // create the HTML for the custom dropdown element
      picker.element.insertAdjacentHTML("beforeend", initButtonPicker(picker) + initListPicker(picker)); // save picker elements

      picker.dropdown = picker.element.getElementsByClassName("language-picker__dropdown")[0];
      picker.firstLanguage = picker.dropdown.getElementsByClassName("language-picker__item")[0];
      picker.trigger = picker.element.getElementsByClassName("language-picker__button")[0];
    }

    function initLanguagePickerEvents(picker) {
      // make sure to add the icon class to the arrow dropdown inside the button element
      Util.addClass(picker.trigger.getElementsByTagName("svg")[0], "icon"); // language selection in dropdown
      // ⚠️ Important: you need to modify this function in production

      initLanguageSelection(picker); // click events

      picker.trigger.addEventListener("click", function () {
        toggleLanguagePicker(picker, false);
      });
    }

    function toggleLanguagePicker(picker, bool) {
      var ariaExpanded;

      if (bool) {
        ariaExpanded = bool;
      } else {
        ariaExpanded = picker.trigger.getAttribute("aria-expanded") == "true" ? "false" : "true";
      }

      picker.trigger.setAttribute("aria-expanded", ariaExpanded);

      if (ariaExpanded == "true") {
        picker.firstLanguage.focus(); // fallback if transition is not supported

        picker.dropdown.addEventListener("transitionend", function cb() {
          picker.firstLanguage.focus();
          picker.dropdown.removeEventListener("transitionend", cb);
        });
      }
    }

    function checkLanguagePickerClick(picker, target) {
      // if user clicks outside the language picker -> close it
      if (!picker.element.contains(target)) toggleLanguagePicker(picker, "false");
    }

    function moveFocusToPickerTrigger(picker) {
      if (picker.trigger.getAttribute("aria-expanded") == "false") return;
      if (document.activeElement.closest(".language-picker__dropdown") == picker.dropdown) picker.trigger.focus();
    }

    function initButtonPicker(picker) {
      // create the button element -> picker trigger
      // check if we need to add custom classes to the button trigger
      var customClasses = picker.element.getAttribute("data-trigger-class") ? " " + picker.element.getAttribute("data-trigger-class") : "";
      var button = '<button class="language-picker__button' + customClasses + '" aria-label="' + picker.select.value + " " + picker.element.getElementsByTagName("label")[0].innerText + '" aria-expanded="false" aria-contols="' + picker.pickerId + '-dropdown">';
      button = button + '<span aria-hidden="true" class="language-picker__label language-picker__flag language-picker__flag--' + picker.select.value + '"><em>' + picker.selectedOption + "</em>";
      button = button + picker.svgPath + "</span>";
      return button + "</button>";
    }

    function initListPicker(picker) {
      // create language picker dropdown
      var list = '<div class="language-picker__dropdown" aria-describedby="' + picker.pickerId + '-description" id="' + picker.pickerId + '-dropdown">';
      list = list + '<p class="sr-only" id="' + picker.pickerId + '-description">' + picker.element.getElementsByTagName("label")[0].innerText + "</p>";
      list = list + '<ul class="language-picker__list" role="listbox">';

      for (var i = 0; i < picker.options.length; i++) {
        var selected = picker.options[i].hasAttribute("selected") ? ' aria-selected="true"' : "",
            language = picker.options[i].getAttribute("lang");
        list = list + '<li><a lang="' + language + '" hreflang="' + language + '" href="' + getLanguageUrl(picker.options[i]) + '"' + selected + ' role="option" data-value="' + picker.options[i].value + '" class="language-picker__item language-picker__flag language-picker__flag--' + picker.options[i].value + '"><span>' + picker.options[i].text + "</span></a></li>";
      }

      return list;
    }

    function getSelectedOptionText(picker) {
      // used to initialize the label of the picker trigger button
      var label = "";

      if ("selectedIndex" in picker.select) {
        label = picker.options[picker.select.selectedIndex].text;
      } else {
        label = picker.select.querySelector("option[selected]").text;
      }

      return label;
    }

    function getLanguageUrl(option) {
      // ⚠️ Important: You should replace this return value with the real link to your website in the selected language
      // option.value gives you the value of the language that you can use to create your real url (e.g, 'english' or 'italiano')
      return "#";
    }

    function initLanguageSelection(picker) {
      picker.element.getElementsByClassName("language-picker__list")[0].addEventListener("click", function (event) {
        var language = event.target.closest(".language-picker__item");
        if (!language) return;

        if (language.hasAttribute("aria-selected") && language.getAttribute("aria-selected") == "true") {
          // selecting the same language
          event.preventDefault();
          picker.trigger.setAttribute("aria-expanded", "false"); // hide dropdown
        } else {
          // ⚠️ Important: this 'else' code needs to be removed in production.
          // The user has to be redirected to the new url -> nothing to do here
          event.preventDefault();
          picker.element.getElementsByClassName("language-picker__list")[0].querySelector('[aria-selected="true"]').removeAttribute("aria-selected");
          language.setAttribute("aria-selected", "true");
          picker.trigger.getElementsByClassName("language-picker__label")[0].setAttribute("class", "language-picker__label language-picker__flag language-picker__flag--" + language.getAttribute("data-value"));
          picker.trigger.getElementsByClassName("language-picker__label")[0].getElementsByTagName("em")[0].innerText = language.innerText;
          picker.trigger.setAttribute("aria-expanded", "false");
        }
      });
    } //initialize the LanguagePicker objects


    var languagePicker = document.getElementsByClassName("js-language-picker");

    if (languagePicker.length > 0) {
      var pickerArray = [];

      for (var i = 0; i < languagePicker.length; i++) {
        (function (i) {
          pickerArray.push(new LanguagePicker(languagePicker[i]));
        })(i);
      } // listen for key events


      window.addEventListener("keyup", function (event) {
        if (event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == "escape") {
          // close language picker on 'Esc'
          pickerArray.forEach(function (element) {
            moveFocusToPickerTrigger(element); // if focus is within dropdown, move it to dropdown trigger

            toggleLanguagePicker(element, "false"); // close dropdown
          });
        }
      }); // close language picker when clicking outside it

      window.addEventListener("click", function (event) {
        pickerArray.forEach(function (element) {
          checkLanguagePickerClick(element, event.target);
        });
      });
    } // credit card number init js


    $('#credit-card-number').on('input propertychange paste', function () {
      var value = $('#credit-card-number').val();
      var formattedValue = formatCardNumber(value);
      $('#credit-card-number').val(formattedValue);
    });

    function formatCardNumber(value) {
      var value = value.replace(/\D/g, '');
      var formattedValue;
      var maxLength; // american express, 15 digits

      if (/^3[47]\d{0,13}$/.test(value)) {
        formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        maxLength = 17;
      } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
        // diner's club, 14 digits
        formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        maxLength = 16;
      } else if (/^\d{0,16}$/.test(value)) {
        // regular cc number, 16 digits
        formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
        maxLength = 19;
      }

      $('#credit-card-number').attr('maxlength', maxLength);
      return formattedValue;
    }
  })();
})(jQuery);