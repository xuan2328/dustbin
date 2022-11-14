let series=[]
let xAxis=[]
$.ajax({
    url: `../data/data01.json`,
    type: "GET",
    dataType: "json",
    async: true,
    success: function (data){
        // $.each(data.data.adsList,function (i,v){
        //     series.push(v.price)
        //     xAxis.push(v.id)
        // })
        $.each(data.data,function (i,v){
            series.push(v.concentration)
            xAxis.push(v.name)
        })
        high(xAxis,series)
        // let html = "";
        // for(let i=0; i<data.data.length; i++){ //遍历data数组
        //     const name = data.data[i].name;
        //     const concentration = data.data[i].concentration;
        //     html += "<div>"+name+"</div><div>"+concentration+"</div>";
        // }
        // $("#ulul").html(html);
        function high(xAxis,series) {
            var chart2 = Highcharts.chart('container2', {
                credits: {
                    enabled: false // 禁用版权信息
                },
                chart: {
                    inverted:true,
                    style: {
                        fontSize: '50px',
                    },
                    type: 'column'
                },
                title: {
                    text: '气体成分',
                    style: {
                        fontSize: '50px'
                    }
                },
                // subtitle: {
                //     text: '请点击按钮查看坐标轴变化'
                // },
                xAxis: {
                    categories: xAxis,
                    labels : {
                        style : {
                            'fontSize' : '38px'
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style : {
                            'fontSize' : '18px'
                        },
                        x: -15
                    },
                    title:null
                },
                series: [{
                    labels: {
                        x: -15
                    },
                    // borderColor: 'red',
                    color: '#9EB356FF',
                    name: '气体浓度',
                    data: series
                }],
                legend : {
                    itemStyle : {
                        'fontSize' : '28px'
                    }
                },
                tooltip: {
                    enabled : true,
                    formatter : function (){ // 提示框格式化字符串
                        var s = '<b>'+this.x+'</b>';
                        // $.each(this.points ,function(){
                        s += '<br />' + this.series.name + ':'+this.y;
                        // });
                        return s;
                    },

                    backgroundColor: '#ffffff',   // 背景颜色
                    borderColor: 'black',         // 边框颜色
                    borderRadius: 10,             // 边框圆角
                    borderWidth: 1,               // 边框宽度
                    shadow: true,                 // 是否显示阴影
                    animation: true  ,             // 是否启用动画效果
                    style: {                      // 文字内容相关样式
                        color: "#1e6d18",
                        fontSize: "30px",
                        // fontWeight: "blod",
                        fontFamily: "Courir new"
                    }
                },
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        // Make the labels less space demanding on mobile
                    }]
                }
            });
            // chart.inverted=true
            function setSize(width) {
                chart2.setSize(width, 200);
            }
        }

        console.log(data)
    },
    error: function (e) {
        alert("request failed !")
    }
});
$.ajax(
    {
        url: `../data/data02.json`,
        type: "GET",
        dataType: "json",
        async: true,
        success: function (data) {
                var chart1 = Highcharts.chart('container1', {
                    credits: {
                        enabled: false // 禁用版权信息
                    },
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'VOCs有机物成分',
                        style: {
                            fontSize: '50px'
                        }
                    },
                    tooltip: {
                        style: {                      // 文字内容相关样式
                            color: "#92e593",
                            fontSize: "40px",
                            // fontWeight: "blod",
                            fontFamily: "Courir new"
                        },
                        formatter : function (){ // 提示框格式化字符串
                            var s = '<b>'+this.point.name+'</b>';
                            // $.each(this.points ,function(){
                            s += '<br/>' + this.point.percentage.toFixed(2) + '%';
                            // });
                            return s;
                        },
                        // pointFormat: '<b>{point.name}:{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b style="font-size: 25px;fontFamily: "Courir new"">{point.name}</b><b style="font-size: 25px;fontFamily: "Courir new"">: {point.percentage:.1f} %</b>',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            }
                        }
                    },
                    series: [data]
                });
        },
        error:function () {
            alert("request failed !")
        }
    }
)
