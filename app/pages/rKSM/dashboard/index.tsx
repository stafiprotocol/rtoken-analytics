import React, { useEffect } from 'react'; 
import DataRow from '@components/dataGrid/row';
import DataCol from '@components/dataGrid/col';
import ChartCol from '@components/dataGrid/chartCol';
import { getRToken,Rtoken,Cycle} from '@features/dashboardClice'
import { useDispatch, useSelector } from 'react-redux';
export default function Index(props:any){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRToken(Rtoken.rKsm,Cycle.week));
    },[]);

    const {data}=useSelector((state:any)=>{
        return {
            data:state.dashboardModule.rToken
        }
    })  
    return <div>
          <DataRow>
          <DataCol title={"STAKED rKSM VALUE"} unit="$" amount={data?data.info.stakeValue:"--"} toolTip={"test"}/>
            <DataCol title={"rKSM VALUE"} unit="$" amount={data?data.info.rtokenValue:"--"} toolTip={"test"}/>
            <DataCol title={"rKSM VALUE (ERC20)"} unit="$" amount={data?data.info.erc20RtokenValue:"--"} toolTip={"test"}/>
            <DataCol title={"TOTAL FEE"} unit="$"  amount={data?data.info.feesValue:"--"} toolTip={"test"}/>
            <DataCol title={"rKSM/KSM"} amount={data?data.info.rate:"--"} toolTip={"test"}/>
            <DataCol title={"rKSM PRICE"} unit="$" amount={data?data.info.price:"--"} toolTip={"test"}/>
            <DataCol title={"rKSM AMOUNT"} unit="$" amount={data?data.info.rtokenAmount:"--"} toolTip={"test"}/>
            <DataCol title={"rKSM AMOUNT (ERC20)"} unit="$" amount={data?data.info.erc20RtokenAmount:"--"} toolTip={"test"}/>
            <DataCol title={"ORIGINAL VALIDATORS"} amount={data?data.info.validators:"--"} toolTip={"test"}/>
            <DataCol title={"UNIQUE USERS"} amount={data?data.info.users:"--"} toolTip={"test"}/>
            <DataCol title={"STAKED TRANSACTIONS"} unit="$"  amount={data?data.info.stakeTxs:"--"} toolTip={"test"}/>
            <DataCol title={"REDEEM VALUE "} unit="$"  amount={data?data.info.reddemValue:"--"} toolTip={"test"}/>
        </DataRow>
        <DataRow>
            <ChartCol data={data?data.list.rate.data:[]} xData={data?data.list.rate.yData:[]} title="rKSM : KSM  RATE" barColor={"#40CB92"}/>
            <ChartCol data={data?data.list.price.data:[]} xData={data?data.list.price.yData:[]} title="rKSM PRICE" barColor={"#ED3C9A"}/>
            <ChartCol data={data?data.list.mint.data:[]} xData={data?data.list.mint.yData:[]} title="MINTED rKSM (NATIVE)" barColor={"#40CB92"}/>
            <ChartCol data={data?data.list.erc20Mint.data:[]} xData={data?data.list.erc20Mint.yData:[]} title="MINTED rKSM (ERC20)" barColor={"#ED3C9A"}/>
            <ChartCol data={data?data.list.stakeValue.data:[]} xData={data?data.list.stakeValue.yData:[]} title="STAKED rKSM VALUE IN STAFI PER WEEK" barColor={"#40CB92"}/>
            <ChartCol data={data?data.list.reddemValue.data:[]} xData={data?data.list.reddemValue.yData:[]} title="REDEEM rKSM VALUE IN STAFI PER WEEK" barColor={"#ED3C9A"}/>
            <ChartCol data={data?data.list.rtokenValue.data:[]} xData={data?data.list.rtokenValue.yData:[]} title="rKSM VALUE IN STAFI PER WEEK" barColor={"#40CB92"}/>
            <ChartCol data={data?data.list.feesValue.data:[]} xData={data?data.list.feesValue.yData:[]} title="STAKED FEE GENERATED PER WEEK" barColor={"#ED3C9A"}/>
            <ChartCol data={data?data.list.users.data:[]} xData={data?data.list.users.yData:[]} title="UNIQUE USERS PER WEEK" barColor={"#40CB92"}/>
            <ChartCol data={data?data.list.stakeTxs.data:[]} xData={data?data.list.stakeTxs.yData:[]} title="STAKED TRANSACTION IN STAFI PER WEEK" barColor={"#ED3C9A"}/>
             
        </DataRow>
    </div>
}