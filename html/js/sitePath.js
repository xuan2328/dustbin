//创建和初始化地图函数：
$.ajax(
    {
        url: `../data/data03.json`,
        type: "GET",
        dataType: "json",
        async: true,
        success: function (data) {
            let greenMarkers = data.data[0];
            let redMarkers = data.data[1];
            let yellowMarkers = data.data[2];
            function addMarker(){
                var map = new BMapGL.Map('map');
                map.centerAndZoom(new BMapGL.Point(119.014521,25.459865), 15);
                map.enableScrollWheelZoom(true);
                // 创建点标记
                // var marker = new BMapGL.Marker(new BMapGL.Point(119.014521,25.459865));
                // 创建Marker标注，使用小车图标
                // var pt = new BMapGL.Point(119.014521,25.459865);
                for (var i=0;i<greenMarkers.length;i++){
                    var greenMarker = new BMapGL.Marker(new BMapGL.Point(greenMarkers[i].x,greenMarkers[i].y), {
                        icon: new BMapGL.SVGSymbol(BMapGL.SymbolShapeType.BMap_Symbol_SHAPE_CIRCLE,
                            { fillColor: '#31B446', fillOpacity: 0.6, scale: 5, anchor: new BMapGL.Size(0, 5),strokeOpacity:0
                            })
                    });
                    map.addOverlay(greenMarker)
                }
                for (var i=0;i<redMarkers.length;i++){
                    var redMarker = new BMapGL.Marker(new BMapGL.Point(redMarkers[i].x,redMarkers[i].y), {
                        icon: new BMapGL.SVGSymbol(BMapGL.SymbolShapeType.BMap_Symbol_SHAPE_CIRCLE,
                            { fillColor: 'rgba(255,7,7,0.94)', fillOpacity: 0.6, scale: 5, anchor: new BMapGL.Size(0, 5),strokeOpacity:0
                            })
                    });
                    map.addOverlay(redMarker)
                }
                for (var i=0;i<yellowMarkers.length;i++){
                    var yellowMarker = new BMapGL.Marker(new BMapGL.Point(yellowMarkers[i].x,yellowMarkers[i].y), {
                        icon: new BMapGL.SVGSymbol(BMapGL.SymbolShapeType.BMap_Symbol_SHAPE_CIRCLE,
                            { fillColor: 'rgba(242,207,19,0.99)', fillOpacity: 0.6, scale: 5, anchor: new BMapGL.Size(0, 5),strokeOpacity:0
                            })
                    });
                    map.addOverlay(yellowMarker)
                }
                // var pt1 = new BMapGL.Point(markes[0].x,markes[0].y);
                // var pt2 = new BMapGL.Point(markes[1].x,markes[1].y);
                // console.log(markes[1].x,markes[1].y)
                // var marker1 = new BMapGL.Marker(pt1, {
                //     icon: myIcon
                // });
                // var marker2 = new BMapGL.Marker(pt2, {
                //     icon: myIcon
                // });
                //
                // // 在地图上添加点标点
                // map.addOverlay(marker1);
                // map.addOverlay(marker2);
            }
            function initMap(){
                addMarker()
            }
            initMap();
        },
        error:function () {
            alert("request failed !")
        }
    }
)