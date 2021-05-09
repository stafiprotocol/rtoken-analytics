import React from 'react';
import {Col} from 'antd'
 
import ReactEcharts from 'echarts-for-react'
import './col.scss';
type Props={
    title:string, 
    barColor:string,
    data:any[],
    xData:any[]
}
export default function Index(props:Props){
    const getChartOption=()=>{
        return {
            color: [props.barColor],
            tooltip: {
                trigger: 'axis',
                axisPointer: {   
                    type: 'line'        
                }
            }, 
            xAxis: [
                {
                    type: 'category',
                    data: props.xData,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: { interval: 0, rotate: -30,color:"#A5A5A5" }, 
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} M',
                        color:"#FFFFFF" 
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{ 
                            color:"#A5A5A5"
                        }
                    }
        
                }
            ],
            series: [
                {
                    name: 'value',
                    type: 'bar',
                    barWidth: '60%', 
                    data: props.data
                }
            ]
        };
    }
    return  <Col span={24 / 2}>
            <div className="stafi_chart_data_col">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="chart">
                      <ReactEcharts option={getChartOption()}></ReactEcharts>
                    </div>
            </div>
    </Col>
}