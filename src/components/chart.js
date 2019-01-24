import React from 'react';
import echarts from 'echarts';
class ChartA extends React.Component{

    componentDidMount(){
        let myChart = echarts.init(document.getElementById("chartA"));
        let xAxis = [], yData=[];
        for(let i = 0; i < 10; i++){
            xAxis.push("class_" + i);
        }
        for(let i = 0; i < 4; i++){
            let cur = [];
            for(let j = 0; j < 10; j++){
                cur.push(Math.random() * 10 - 5);
            }
            yData.push(cur);
        }
        myChart.setOption({
            legend: {
                data: ['bar0', 'bar1', 'bar2', 'bar3'],
            },
            xAxis:{
                data:xAxis,
            },
            yAxis:{
                inverse: true
            },
            series:[
                {
                    name: 'bar0',
                    type: 'bar',
                    stack:"one",
                    data:yData[0],
                    label:{
                        show:true
                    }
                },
                {
                    type: 'bar',
                    stack:"one",
                    data:yData[1],
                    name: 'bar1',
                },
                {
                    type: 'bar',
                    stack:"one",
                    data:yData[2],
                    name: 'bar2'
                },
                {
                    type: 'bar',
                    stack:"one",
                    data:yData[3],
                    name: 'bar3'
                },
            ]
        })
    }
    render(){
        return (<div id="chartA" style={{width:"500px", height:"500px"}}></div>)
    }
}
export default ChartA;