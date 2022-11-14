let series1=[]
let xAxis1=[]
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
            series1.push(v.concentration)
            xAxis1.push(v.name)
        })
        high(xAxis1,series1)
        // let html = "";
        // for(let i=0; i<data.data.length; i++){ //遍历data数组
        //     const name = data.data[i].name;
        //     const concentration = data.data[i].concentration;
        //     html += "<div>"+name+"</div><div>"+concentration+"</div>";
        // }
        // $("#ulul").html(html);
        function high(xAxis,series) {
            var chart2 = Highcharts.chart('gasPhoto', {
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
                            'fontSize' : '25px'
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

let series2=[]
let xAxis2=[]
$.ajax({
    url: `../data/data04.json`,
    type: "GET",
    dataType: "json",
    async: true,
    success: function (data){
        $.each(data.data,function (i,v){
            series2.push(v.number)
            xAxis2.push(v.name)
        })
        high(xAxis2,series2)
        function high(xAxis,series) {
            var chart = Highcharts.chart('disPhoto', {
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
                    text: '清理数量',
                    style : {
                        'fontSize': '50px'
                    }
                },
                xAxis: {
                    categories: xAxis,
                    labels : {
                        style : {
                            'fontSize' : '18px',
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

let seriesLine=[]
let seriesBar=[]
let xAxis3=[]
$.ajax({
    url: `../data/data05.json`,
    type: "GET",
    dataType: "json",
    async: true,
    success: function (data){
        $.each(data.data,function (i,v){
            seriesLine.push(v.clearedNumber)
            xAxis3.push(v.name)
            seriesBar.push(v.unclearedNumber)
        })
        high(seriesLine,seriesBar,xAxis3)
        function high(seriesLine,seriesBar,xAxis) {
            var chart = Highcharts.chart('stnPhoto', {
                credits: {
                    enabled: false // 禁用版权信息
                },
                title: {
                    text: '清理数量',
                    style : {
                        'fontSize': '50px'
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
        }

    },
    error:function () {
        alert('error')
    }
})


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
            var chart = Highcharts.chart('capPhoto',{
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
                    data: series90,
                    color: "#f8df72",

                }, {
                    name: '50%',
                    data: series50,
                    color: "#F9D5A8",

                }, {
                    name: '30%',
                    data: series30,
                    color: '#BBA491',
                }]
            });
        }
    },
    error:function () {
        alert("error")
    }
})
