let series=[]
let xAxis=[]
$.ajax({
    url: `../data/data04.json`,
    type: "GET",
    dataType: "json",
    async: true,
    success: function (data){
        $.each(data.data,function (i,v){
            series.push(v.number)
            xAxis.push(v.name)
        })
        high(xAxis,series)
        function high(xAxis,series) {
            var chart = Highcharts.chart('container', {
                credits: {
                    enabled: false ,// 禁用版权信息
                    exportsChart:false
                },
                exporting:null,
                chart: {
                    type: 'line',
                    labels : {
                        style : {
                            'fontSize' : '30px',
                        }
                    }
                },
                title: {
                    text: null,
                },
                xAxis: {
                    categories: xAxis,
                    labels : {
                        style : {
                            'fontSize' : '30px',
                            color: "#0b5a41",
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style : {
                            'fontSize' : '28px',
                            color: "#0b5a41",
                        },
                        x: -15
                    },
                    title:null
                },
                legend : {
                    itemStyle : {
                        'fontSize' : '28px',
                        color: "#0b5a41",
                    }
                },
                tooltip: {
                    enabled : true,
                    formatter : function (){ // 提示框格式化字符串
                        var s = '<b>'+this.x+':'+this.y+'</b>';
                        return s;
                    },
                    backgroundColor: '#ffffff',   // 背景颜色
                    borderColor: 'black',         // 边框颜色
                    borderRadius: 10,             // 边框圆角
                    borderWidth: 1,               // 边框宽度
                    shadow: true,                 // 是否显示阴影
                    animation: true  ,             // 是否启用动画效果
                    style: {                      // 文字内容相关样式
                        color: "#0b5a41",
                        fontSize: "30px",
                        // fontWeight: "blod",
                        fontFamily: "Courir new"
                    }
                },
                plotOptions: {
                    labels : {
                        style : {
                            'fontSize' : '30px'
                        }
                    },
                    line: {
                        dataLabels: {
                            enabled: false,
                            // formatter: function() {
                            //     return this.x + "   " + this.y;
                            // },
                            // format: "{x}      {y}"
                        },
                        enableMouseTracking: true
                    }
                },
                series: [{
                    color: '#9EB356FF',
                    name: '站点数量',
                    data: series,
                    lineWidth: 5
                }]
            });
        }
    },
    error:function () {

    }
})