/*
* ----------------------------------------------------------------------------------------
    Template Name: Nitrex
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

  $("#side-menu").metisMenu();

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

  //custom scrollbar
  $(".custom-scrolbar").overlayScrollbars({});

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

  $("#vertical_lable").change(function () {
    if ($(this).is(":checked")) {
      $("body").attr("data-layout", "vertical");
    }
  });



  


  $("#horizental_label").change(function () {
    if ($(this).is(":checked")) {
      $("body").attr("data-layout", "horizental");
    }
  });

  $("#seibar_black").change(function () {
    if ($(this).is(":checked")) {
      $("body").attr("data-sidebar", "black");
    }
  });
  $("#seibar_navy").change(function () {
    if ($(this).is(":checked")) {
      $("body").attr("data-sidebar", "blue");
    }
  });
  $("#seibar_white").change(function () {
    if ($(this).is(":checked")) {
      $("body").attr("data-sidebar", "white");
    }
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
        rangeBarOverlap: false,
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


})(jQuery);
