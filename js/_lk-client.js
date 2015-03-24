$(document).ready(function(){


 $(function() {
    $( ".select-date" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      dateFormat: "dd.mm.yy",
      showYear: false
    });
  });



 $('.icon-calendar').on('click', function(e){
    $(this).siblings(".select-date").datepicker( "show" );

});

$(window).scroll(function()
{
    var wh = $(document).scrollTop();

    if (wh > 79) {

        $('.content-header-fix').addClass('affix');
    }else {
        $('.content-header-fix').removeClass('affix');
    }

    if( wh > (345 + $('.content-graphs-for-affix').outerHeight(true) )) {
        $('.list-tops').addClass('affix');
    }else {
         $('.list-tops').removeClass('affix');
    }
    if( wh > (345 + $('.content-graphs-for-affix').outerHeight(true) )) {
        $('.thead').addClass('affix');
    }else {
         $('.thead').removeClass('affix');
    }

});


//////////////////////////////////////////////////////////////////////graph show/hide
     $('.graph-wrapper-visit').on('click', '.opened', function(e){
            $(this).removeClass('opened');
            $(this).addClass('closed');
            $('#graph-visit .highcharts-container').animate({height: '0px'}, 500);
            $('#graph-visit').animate({height: '0px'}, 500);
    });


     $('.graph-wrapper-visit').on('click', '.closed', function(e){
            $(this).removeClass('closed');
            $(this).addClass('opened');
            $('#graph-visit .highcharts-container').animate({height: '150px'}, 500);
            $('#graph-visit').animate({height: '150px'}, 500);
    });

//////////////////////////////////////////////////////////////end graph show/hide
$(function() {
                
    $("select.custom").each(function() {                    
       var sb = new SelectBox({
        selectbox: $(this),
         height: 100,
         width: 140
        });
    });
                
});

//////////////////////////graphs
$(function () {
    $('#graph-visit').highcharts({
        chart: {
            backgroundColor: '#eae3b7',
            type: 'line',
            margin: [5,0,40,50]
        },
		plotOptions: {
            series: {
                marker: {
                    enabled: false,
                    fillColor: '#696c6e',
                    radius: 4,
                    states: {
                        hover: {
                            fillColor: '#696c6e',
                            lineWidth: 0,
                            radiusPlus: 0


                        }
                    }
                },
                cursor: 'pointer',
                states: {
                    hover:{
                        lineWidthPlus: 0
                    }
                }
            }
        },


        title: {
            text: ''
        },

        xAxis: {
            categories: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
            lineWidth: 0,
             minorGridLineWidth: 0,
            lineColor: 'transparent',
             minorTickLength: 0,
            tickLength: 0,
            labels: {
                style: {
                    color: '#9c9d97'
                }
            }
        },
        yAxis: {
            maxPadding: 0.45,
             labels: {
                 style: {
                    color: '#9c9d97'
              }
            },
            plotLines: [{
                value: 0,
                width: 1
            }],

            gridLineColor: '#dcd186',
            title: {

              text: null
            }
        },
        tooltip: {
            backgroundColor: '#6a6b6f',
            borderWidth: '0',
            borderRadius: '0',
            shadow: false,
            headerFormat: '',
            pointFormat: '{point.y}<br/>',
            style: {
                color: '#fff',
                fontSize: 12,
                whiteSpace: 'nowrap',
                fontFamily: 'intro_regular',
                fontWeight: 'normal',
                padding: 5
              }
        },
        legend: {
			enabled: false
        },

        series: [{
            name: ' ',
            data: [100, 100, 250, 200,380,250,240,230,300,498,300,420,390,290,320,420],
            color: '#d0c35d'
        }]
    });
});

$(function () {
    $('#graph-reject').highcharts({
        chart: {
            backgroundColor: '#f8d6d2',
            type: 'line',
            margin: [60,20,40,60]
        },
        plotOptions: {

            series: {
                marker: {
                    enabled: false,
                    radius: 4,
                    states: {
                        hover: {
                            lineColor: null,
                            fillColor: '#696c6e',
                            lineWidth: 0,
                            radiusPlus: 0
                        }
                    }
                },
               cursor: 'pointer'
            }
        },


        title: {
            text: 'Отказы',
            x: -125,
            y: 20,
            style: {
                fontSize: 13,
                color: '#5f6163'
            }
        },

        xAxis: {
            categories: [1,5,10,15,20,25,30],
            lineWidth: 0,
            minorGridLineWidth: 0,
            ineColor: 'transparent',
             minorTickLength: 0,
            tickLength: 0,
            labels: {
                style: {
                    color: '#9c9d97'
                }
            }
        },
        yAxis: {
            labels: {
                style: {
                    color: '#9c9d97'
                }
            },
            plotLines: [{
                value: 0,
                width: 1
            }],

            gridLineColor: '#f1afa6',

            title: {

              text: null
            }
        },
        tooltip: {
            backgroundColor: '#6a6b6f',
            borderWidth: '0',
            borderRadius: '0',
            shadow: false,
            headerFormat: '',
            useHTML: true,
            pointFormat: '{point.y}<br/>',
            style: {
                color: '#fff',
                cursor: 'default',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                fontFamily: 'intro_regular',
                padding: 0
              }
        },
        legend: {
            enabled: false
        },
        series: [{
            data: [10, 36, 25,40,20,15,10],
            color: '#ea8172'
        }]
    });
});


$(function () {
    $('#graph-tic').highcharts({
        chart: {
            backgroundColor: '#cce8e7',
            type: 'column',
            margin: [60,20,40,60]
        },
        title: {
            text: 'ТИЦ',
            x: -140,
            y: 20,
            style: {
                fontSize: 13,
                color: '#5f6163'
            }
        },

        xAxis: {
            labels: {
                style: {
                    color: '#9c9d97'
                }
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            ineColor: 'transparent',
             minorTickLength: 0,
            tickLength: 0,

            categories: [
                'Июнь',
                'Июль',
                'Август'
            ]
        },

        legend: {
            enabled: false
        },

        tooltip: {
            enabled: false
        },

        yAxis: {
            maxPadding: 0.35,
            labels: {
                style: {
                    color: '#9c9d97'
                }
            },
            gridLineColor: '#97d1ce',
            title: {

              text: null
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.1,
                pointRange: 1.5,
                borderWidth: 0
            },
            series: {
                states: {
                    hover: {
                        brightness: 0
                    }
                },
                dataLabels: {
                    enabled: true,
                    useHTML: true
                }
            }
        },
        series: [{
            data: [850, 800, 750],
            color: '#97d1ce'

        }]
    });
});

$(function () {
    $('#graph-pr').highcharts({
        chart: {
            backgroundColor: '#f8d6d2',
            type: 'column',
            margin: [60,20,40,65]
        },
        title: {
            text: 'PR главной страницы',
            x: -75,
            y: 20,
             style: {
                fontSize: 13,
                color: '#5f6163'
            }
        },

        xAxis: {
            labels: {
                style: {
                    color: '#9c9d97'
                }
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            ineColor: 'transparent',
             minorTickLength: 0,
            tickLength: 0,

            categories: [
                'Июнь',
                'Июль',
                'Август'
            ]
        },

        legend: {
            enabled: false
        },

        tooltip: {
            enabled: false
        },

        yAxis: {
            maxPadding: 0.35,
            labels: {
                style: {
                    color: '#9c9d97'
                }
            },
            gridLineColor: '#f1afa6',
            title: {

              text: null
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.1,
                pointRange: 1.5,
                borderWidth: 0
            },
            series:{
                states:{
                    hover: {
                        brightness: 0
                    }
                },
                dataLabels: {
                    enabled: true,
                    useHTML: true
                }
            }
        },
        series: [{
            data: [3, 3, 48],
            color: '#ee9c90'

        }]
    });
});

$(function () {
    $('#graph-visit-column').highcharts({
        chart: {
            backgroundColor: '#eae3b7',
            type: 'column'
        },
        plotOptions: {
            column: {
                borderWidth: 0
            },
            series: {
                marker: {
                    enabled: false
                },
            cursor: 'pointer',
            states: {
                 hover: {
                    brightness: -0.1

                 }
            }    
            }
        },


        title: {
            text: 'Посещяемость за месяц',
            x: -250,
            y: 20,
            style: {
                fontSize: 13,
                color: '#5f6163'
            }
        },

        xAxis: {
            labels: {
                style: {
                    color: '#9c9d97'
                }
            },
            lineWidth: 0,
            minorGridLineWidth: 0,
            ineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0,
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        },
        yAxis: {
            gridLineWidth: 0,
            labels: {
                enabled: false
            },
            plotLines: [{
                value: 0,
                width: 1
            }],

            title: {

              text: null
            }
        },
        tooltip: {
            backgroundColor: null,
            borderWidth: 0,
            borderRadius: '0',
            shadow: false,
            headerFormat: '',
            useHTML: true,
            pointFormat: '<b>{point.y}</b><br/>'
        },
        legend: {
            enabled: false
        },
        series: [{
            data: [10, 10, 25, 20,38,25,24,23,30,49,30,42,39,29,32,42,10, 30, 25, 20,38,25,24,23,30,49,30,42,39,29,32],
            color: '#dcd186'
        }]
    });
});
/////////////////end  grpahs


//////////////////fixed thead
$('.table-data-city').floatThead();



///////////////end thead

///////////affix


///////////end
////////////////////////////// select cahnge

$( '.inactive .select-date' ).change(function() {
  $('.form-group').removeClass('inactive');
  $('.css-checkbox').prop('checked', true);
  $('.css-checkbox').prop('disabled', false);
  $('.checkbox').removeClass('inactive');

});
///////end

});
