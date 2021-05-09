import React from 'react';
import {Row} from 'antd'
import './row.scss';
export default function Index(props:any){
    return <Row gutter={[8, 8]} className="stafi_data_row">
        {props.children}
    </Row>
}