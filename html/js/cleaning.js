let seriesLine=[]
let seriesBar=[]
let xAxis=[]
high(seriesLine,seriesBar,xAxis)
function high(seriesLine,seriesBar,xAxis) {
    $.ajax({
        url: `../data/data05.json`,
        type: "GET",
        dataType: "json",
        async: true,
        success: function (data){
            $.each(data.data,function (i,v){
                seriesLine.push(v.clearedNumber)
                xAxis.push(v.name)
                seriesBar.push(v.unclearedNumber)
            })
            var chart = Highcharts.chart('container', {
                credits: {
                    enabled: false // 禁用版权信息
                },
                title: {
                    text: '清理数量',
                    style : {
                        'fontSize' : '30px',
                        color: "#0b5a41",
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
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                labels: {
                    items: null
                },
                legend : {
                    itemStyle : {
                        'fontSize' : '28px',
                        color: "#0b5a41",
                    }
                },
                series: [{

                    type: 'column',
                    name: '未清理',
                    data: seriesBar,
                    color: '#9EB356FF',
                    labels : {
                        style : {
                            'fontSize' : '30px',
                            color: "#0b5a41",
                        }
                    }
                }, {

                    color: "#0b5a41",
                    type: 'line',
                    name: '已清理',
                    data: seriesLine,
                    lineWidth: 5,
                    labels : {
                        style : {
                            'fontSize' : '30px',
                            color: "#0b5a41",
                        }
                    },
                }]
            });
        },
        error:function () {
            alert('error')
        }
    })
}
