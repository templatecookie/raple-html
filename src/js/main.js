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
      height: 293,
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
        data: [90, 70, 85, 60, 80, 95, 90],
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
      categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
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


})(jQuery);
