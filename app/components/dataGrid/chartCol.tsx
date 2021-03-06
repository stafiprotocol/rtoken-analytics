import React from "react";
import { Col } from "antd";
import numberUtil from "../../util/numberUtil";

import ReactEcharts from "echarts-for-react";
import "./col.scss";
type Props = {
  title: string;
  barColor: BarColor;
  data: any[];
  xData: any[];
};

export enum BarColor {
  left = "#40CB92",
  right = "#ED3C9A",
}
export default function Index(props: Props) {
  const getChartOption = () => {
    return {
      color: [props.barColor],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
        formatter: (params: any) => {
          // console.log("params[0]", params[0]);
          try {
            if (params[0]) {
              return (
                `${params[0].name.slice(4, 6)}-${params[0].name.slice(
                  6,
                  8
                )}-${params[0].name.slice(0, 4)}` +
                "<br/>" +
                params[0].marker +
                "value   " +
                "<b>" +
                numberUtil.amount_format(params[0].value, 3) +
                "</b>"
              );
            }
          } catch {}

          return "";
        },
      },
      xAxis: [
        {
          type: "category",
          data: props.xData,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            interval: 0,
            rotate: -50,
            color: "#A5A5A5",
            formatter: (value: string) => {
              return `${value.slice(4, 6)}-${value.slice(6, 8)}-${value.slice(
                0,
                4
              )}`;
            },
          },
        },
      ],
      grid: {
        left: "12%",
        right: "6%",
      },
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: (value: any) => {
              if (value > 1000000) {
                return `${value / 1000000}M`;
              }
              return value;
            },
            color: "#FFFFFF",
          },

          splitLine: {
            show: true,
            lineStyle: {
              color: "#444755",
              width: 2,
            },
          },
        },
      ],
      series: [
        {
          name: "value",
          type: "bar",
          barWidth: "60%",
          data: props.data,
        },
      ],
    };
  };
  return (
    <Col span={24 / 2}>
      <div className="stafi_chart_data_col">
        <div className="title">{props.title}</div>
        <div className="chart">
          <ReactEcharts option={getChartOption()}></ReactEcharts>
        </div>
      </div>
    </Col>
  );
}
