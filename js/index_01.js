

var option = {
    title:{
        text:"我的ECharts实例",
        subtext:"我是副标题",
        sublink:"http://localhost:8080/ol_api/apidoc/index.html",
        right:"100px"
    },
    tooltip:{},//鼠标放上去的时候的提示
    legend:{
        data:["销量数据"]
    },
    xAxis:{
        name:"横轴",
        type:"category",//类目轴
        data:["衬衫","雪纺衫","羊毛衫","裤子","袜子","高跟鞋"],
        axisTick:{
            alignWithLabel:true  //刻度线和标签是否对其
        }
    },
    yAxis:{
        name:"纵轴",
        type:"value",//数值轴，time:时间轴,log:对数轴
        interval:5 //y轴间隔
    },
    series:[{
        name:"销量数据",
        type:"bar",
        data:[5,20,36,10,15,20],
        /*itemStyle:{ //4.0之前的设置(兼容)
            normal:{
                color:"#f00"
            },
            emphasis:{
                color:"#00f"
            }
        }*/
        itemStyle:{
            color:"#f00"  //覆盖调色盘的颜色
        },
        emphasis:{
            itemStyle:{
                color:"#00f"
            }
        }
    }]
};

var eChart = echarts.init(document.getElementById("main"));
eChart.setOption(option);

var option_1 = {
    title:{
        text:"主标题",
        subtext:"副标题",
        right:"100px"
    },//标题
    tooltip:{
        trigger:'item', //触发类型，axis:坐标轴触发(柱状图)，item:数据项图形触发(除柱状图)
        axisPointer:{
            type:'cross',
            snap:true,
            crossStyle:{
                color:"#f00",
                type:"solid"
            }
        }
    },//提示
    legend:{
        data:[{
            name:"销量1",
            icon:"circle"
        },{
            name:"销量2",
            icon:"rect"
        }]
    },//图例
    xAxis:{
        name:"横轴",
        type:"category",
        data:["衬衫","雪纺衫","羊毛衫","裤子","袜子","高跟鞋"],
        axisTick:{
            alignWithLabel:true
        }
    },//x坐标
    yAxis:{
        name:"纵轴",
        type:"value", //数值轴
        interval:5
    },//y坐标
    series:[{
        type:"bar",
        name:"销量1",
        itemStyle:{
            color:"#00f"
        },
        emphasis:{
            color:"#f00"
        },
        label:{
            show:true,
            position:"top",
            formatter:"{a}\n{b}:{c}"
        },
        data:[15,36,22,45,67,89]
    },{
        type:"line",
        name:"销量2",
        lineStyle:{
            color:"#ff0" //线条的颜色
        },
        itemStyle:{
            color:"#0ff" //折线拐点的颜色
        },
        areaStyle:{
            color:"#f0f"
        },
        emphasis:{
            color:"#f00"
        },
        label:{
            show:true,
            position:"right"
        },
        data:[25,16,32,54,94,75]
    }],//数据
    color:['#123456','#654321','#123321','#456654'] //调色盘颜色，系列没有设置颜色时则选用它
}
var eChart_1 = echarts.init(document.getElementById("div_1"));
eChart_1.setOption(option_1);


