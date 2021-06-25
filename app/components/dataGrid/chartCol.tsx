import React from 'react';
import {Col} from 'antd'
 
import ReactEcharts from 'echarts-for-react'
import './col.scss';
type Props={
    title:string, 
    barColor:BarColor,
    data:any[],
    xData:any[]
}

export enum BarColor{
    left="#40CB92",
    right="#ED3C9A"
}
export default function Index(props:Props){
    const getChartOption=()=>{
        return {
            color: [props.barColor],
            tooltip: {
                trigger: 'axis',
                axisPointer: {   
                    type: 'line'        
                }, 
                 // formatter:(params:any)=>{
                //     console.log(params,"======params");
                //     return 
                // }
            },  
            xAxis: [
                {
                    type: 'category',
                    data: props.xData,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: { interval: 0, rotate: -40,color:"#A5A5A5" }, 
                }
            ],
            grid: {
                left: '12%',
                right:'6%'  
            },
            yAxis: [
                {
                    type: 'value', 
                    axisLabel: {
                        formatter:(value:any)=>{
                            if(value>1000000){
                                return `${value/1000000}M`
                            }
                            return value
                        },
                        color:"#FFFFFF" , 
                    },
                      
                    splitLine: {
                        show: true,
                        lineStyle:{ 
                            color:"#444755",
                            width:2
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