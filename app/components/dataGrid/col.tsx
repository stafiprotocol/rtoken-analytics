import NumberUtil from '@util/numberUtil';
import { Col } from 'antd';
import React from 'react';
import './col.scss';
type Props={
    title:string,
    amount:string|number,
    toolTip?:string,
    unit?:string
}
export default function Index(props:Props){
    return  <Col span={24 / 4}>
            <div className="stafi_data_col">
                    <div className="title_line">
                        <div className="title">
                            {props.title}
                        </div>
                        <div className="tips">
                          {/* <Tooltip title={props.toolTip}> <img src={doubt} /></Tooltip>  */}
                        </div>
                    </div>
                    <div className="amount_line">
                        {props.unit}{(props.unit=="$")?NumberUtil.amount_format(NumberUtil.handleEthRoundToFixed(props.amount)):NumberUtil.amount_format(props.amount,6)}
                    </div>
            </div>
    </Col>
}