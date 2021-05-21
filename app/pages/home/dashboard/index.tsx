import React, { useEffect } from 'react'; 
import DataRow from '@components/dataGrid/row';
import DataCol from '@components/dataGrid/col';
import ChartCol,{BarColor} from '@components/dataGrid/chartCol';
import { getCollect} from '@features/dashboardClice'
import { useDispatch, useSelector } from 'react-redux';
export default function Index(props:any){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCollect());
    },[]);

    const {data}=useSelector((state:any)=>{
        return {
            data:state.dashboardModule.collect
        }
    }) 
    return <div>
          <DataRow>
            <DataCol title={"STAKED VALUE"} unit="$" amount={data?data.info.stakeValue:"--"} toolTip={"test"}/>
            <DataCol title={"rTOKEN VALUE"} unit="$" amount={data?data.info.rtokenValue:"--"} toolTip={"test"}/>
            <DataCol title={"rTOKEN VALUE (ERC20)"} unit="$" amount={data?data.info.erc20RtokenValue:"--"} toolTip={"test"}/>
            <DataCol title={"TOTAL FEE"} unit="$" amount={data?data.info.feesValue:"--"} toolTip={"test"}/>
            <DataCol title={"ORIGINAL VALIDATORS"} amount={data?data.info.validators:"--"} toolTip={"test"}/>
            <DataCol title={"UNIQUE USERS"} amount={data?data.info.users:"--"} toolTip={"test"}/>
            <DataCol title={"STAKED TRANSACTIONS"} unit="$" amount={data?data.info.stakeTxs:"--"} toolTip={"test"}/>
            <DataCol title={"REDEEM VALUE "} unit="$" amount={data?data.info.reddemValue:"--"} toolTip={"test"}/>
        </DataRow>
        <DataRow>
            <ChartCol data={data?data.list.stakeValue.data:[]} xData={data?data.list.stakeValue.yData:[]} title="STAKED VALUE IN STAFI PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.reddemValue.data:[]} xData={data?data.list.reddemValue.yData:[]} title="REDEEM VALUE IN STAFI PER WEEK" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.rtokenValue.data:[]} xData={data?data.list.rtokenValue.yData:[]} title="rTOKEN VALUE IN STAFI PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.feesValue.data:[]} xData={data?data.list.feesValue.yData:[]} title="STAKED FEE GENERATED PER WEEK" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.users.data:[]} xData={data?data.list.users.yData:[]} title="UNIQUE USERS PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.stakeTxs.data:[]} xData={data?data.list.stakeTxs.yData:[]} title="STAKED TRANSACTION IN STAFI PER WEEK" barColor={BarColor.right}/>
        </DataRow>
    </div>
}