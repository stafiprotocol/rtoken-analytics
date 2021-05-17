import React from 'react';
import {Row,Col} from 'antd';
import DataRow from '@components/dataGrid/row';
import DataCol from '@components/dataGrid/col';
import ChartCol from '@components/dataGrid/chartCol';
export default function Index(props:any){
    return <div>
          <DataRow>
            <DataCol title={"STAKED VALUE"} amount={"232,236,774"} toolTip={"test"}/>
            <DataCol title={"rTOKEN VALUE"} amount={"232,236,774"} toolTip={"test"}/>
            <DataCol title={"rTOKEN VALUE (ERC20)"} amount={"232,236,774"} toolTip={"test"}/>
            <DataCol title={"TOTAL FEE"} amount={"232,236,774"} toolTip={"test"}/>
            <DataCol title={"ORIGINAL VALIDATORS"} amount={"232,236,774"} toolTip={"test"}/>
            <DataCol title={"UNIQUE USERS"} amount={"232,236,774"} toolTip={"test"}/>
            <DataCol title={"STAKED TRANSACTIONS"} amount={"232,236,774"} toolTip={"test"}/>
            <DataCol title={"REDEEM VALUE "} amount={"232,236,774"} toolTip={"test"}/>
         

        </DataRow>
        <DataRow>
            <ChartCol data={[10, 52, 200, 334, 390, 330, 220]} xData={['2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07']} title="STAKED VALUE IN STAFI PER WEEK" barColor={"#40CB92"}/>
            <ChartCol data={[10, 52, 200, 334, 390, 330, 220]} xData={['2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07']} title="REDEEM VALUE IN STAFI PER WEEK" barColor={"#ED3C9A"}/>
            <ChartCol data={[10, 52, 200, 334, 390, 330, 220]} xData={['2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07']} title="rTOKEN VALUE IN STAFI PER WEEK" barColor={"#40CB92"}/>
            <ChartCol data={[10, 52, 200, 334, 390, 330, 220]} xData={['2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07']} title="STAKED FEE GENERATED PER WEEK" barColor={"#ED3C9A"}/>
            <ChartCol data={[10, 52, 200, 334, 390, 330, 220]} xData={['2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07']} title="UNIQUE USERS PER WEEK" barColor={"#40CB92"}/>
            <ChartCol data={[10, 52, 200, 334, 390, 330, 220]} xData={['2010-01', '2010-02', '2010-03', '2010-04', '2010-05', '2010-06', '2010-07']} title="STAKED TRANSACTION IN STAFI PER WEEK" barColor={"#ED3C9A"}/>
        </DataRow>
    </div>
}