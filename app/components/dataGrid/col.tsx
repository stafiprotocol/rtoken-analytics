import React from 'react';
import {Col,Tooltip} from 'antd'
import doubt from "@images/doubt.svg";
import './col.scss';
type Props={
    title:string,
    amount:string,
    toolTip?:string
}
export default function Index(props:Props){
    return  <Col span={24 / 4}>
            <div className="stafi_data_col">
                    <div className="title_line">
                        <div className="title">
                            {props.title}
                        </div>
                        <div className="tips">
                          <Tooltip title={props.toolTip}> <img src={doubt} /></Tooltip> 
                        </div>
                    </div>
                    <div className="amount_line">
                        ${props.amount}
                    </div>
            </div>
    </Col>
}