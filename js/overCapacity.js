let series90=[]
let series50=[]
let series30=[]
let xAxis=[]
$.ajax({
    url: `../data/data06.json`,
    type: "GET",
    dataType: "json",
    async: true,
    success: function (data){
        $.each(data.data,function (i,v){
            series90.push(v.nineNumber)
            series50.push(v.fiveNumber)
            series30.push(v.threeNumber)
            xAxis.push(v.name)
        })
        high(xAxis,series90,series50,series30)
        function high(xAxis,series90,series50,series30) {
            var chart = Highcharts.chart('container',{
                chart: {
                    type: 'column'
                },
                credits: {
                    enabled: false // 禁用版权信息
                },
                title: {
                    text: '垃圾箱已装载容量',
                    style: {
                        fontSize: '50px'
                    }
                },
                xAxis: {
                    categories: xAxis,
                    labels : {
                        style : {
                            'fontSize' : '22px',
                            color: "#0b5a41",

                        }
                    },
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title:null,
                    labels: {
                        style : {
                            'fontSize' : '28px',
                            color: "#0b5a41",

                        },
                        x: -15
                    }
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
                        var s = '<b>'+this.x+'-'+ this.series.name+'</b>';
                        // $.each(this.points ,function(){
                        s += '<br />' +'已装载容量' + ':'+this.y;
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

                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    name: '90%',
                    data: series90
                }, {
                    name: '50%',
                    data: series50
                }, {
                    name: '30%',
                    data: series30
                }]
            });
        }
    },
    error:function () {
        alert("error")
    }
})







