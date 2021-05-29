import React, { useEffect } from 'react'; 
import DataRow from '@components/dataGrid/row';
import DataCol from '@components/dataGrid/col';
import ChartCol,{BarColor} from '@components/dataGrid/chartCol';
import { getRToken,Rtoken,Cycle,initData} from '@features/dashboardClice'
import { useDispatch, useSelector } from 'react-redux';
import NumberUtil from '@util/numberUtil';
import {rSymbol} from '@keyring/defaults';
export default function Index(props:any){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRToken(Rtoken.rDot,Cycle.week));
        dispatch(initData(rSymbol.Dot))
    },[]); 
    const {data,erc20Amount,ratio,totalIssuance,free}=useSelector((state:any)=>{ 
        return {
            data:state.dashboardModule.rToken,
            erc20Amount:state.ETHModule.ercRDOTBalance,
            ratio:state.dashboardModule.ratio,
            totalIssuance:state.dashboardModule.totalIssuance,
            free:state.dashboardModule.free
        }
    })  
 
    return <div>
          <DataRow>
          <DataCol title={"STAKED DOT VALUE"} unit="$" amount={NumberUtil.handleFisAmountToFixed(ratio*totalIssuance)} toolTip={"test"}/>
            <DataCol title={"rDOT VALUE"} unit="$" amount={data?NumberUtil.handleFisAmountToFixed(data.info.rtokenPrice*totalIssuance):"--"} toolTip={"test"}/>
            <DataCol title={"rDOT VALUE (ERC20)"} unit="$" amount={data?NumberUtil.handleFisAmountToFixed((data.info.rtokenPrice*erc20Amount)):"--"} toolTip={"test"}/>
            <DataCol title={"TOTAL FEE"} unit="$"  amount={data?NumberUtil.handleFisAmountToFixed(Number(data.info.rtokenPrice)*Number(free)):"--"} toolTip={"test"}/>
            <DataCol title={"rDOT/DOT"} amount={NumberUtil.handleFisAmountRateToFixed(ratio)} toolTip={"test"}/>
            <DataCol title={"rDOT PRICE"} unit="$" amount={data?data.info.rtokenPrice:"--"} toolTip={"test"}/>
            <DataCol title={"rDOT AMOUNT"}   amount={totalIssuance} toolTip={"test"}/>
            <DataCol title={"rDOT AMOUNT (ERC20)"}  amount={erc20Amount} toolTip={"test"}/>
            <DataCol title={"ORIGINAL VALIDATORS"} amount={data?data.info.validators:"--"} toolTip={"test"}/>
            <DataCol title={"UNIQUE USERS"} amount={data?data.info.users:"--"} toolTip={"test"}/>
            <DataCol title={"STAKED TRANSACTIONS"} amount={data?data.info.stakeTxs:"--"} toolTip={"test"}/>
            <DataCol title={"REDEEM VALUE "} unit="$"  amount={data?data.info.reddemValue:"--"} toolTip={"test"}/>
        </DataRow>
        <DataRow>
            <ChartCol data={data?data.list.rate.data:[]} xData={data?data.list.rate.yData:[]} title="rDOT : DOT  RATE" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.price.data:[]} xData={data?data.list.price.yData:[]} title="rDOT PRICE" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.mint.data:[]} xData={data?data.list.mint.yData:[]} title="MINTED rDOT (NATIVE)" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.erc20Mint.data:[]} xData={data?data.list.erc20Mint.yData:[]} title="MINTED rDOT (ERC20)" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.stakeValue.data:[]} xData={data?data.list.stakeValue.yData:[]} title="STAKED DOT VALUE IN STAFI PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.reddemValue.data:[]} xData={data?data.list.reddemValue.yData:[]} title="REDEEM DOT VALUE IN STAFI PER WEEK" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.rtokenValue.data:[]} xData={data?data.list.rtokenValue.yData:[]} title="rDOT VALUE IN STAFI PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.feesValue.data:[]} xData={data?data.list.feesValue.yData:[]} title="STAKED FEE GENERATED PER WEEK" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.users.data:[]} xData={data?data.list.users.yData:[]} title="UNIQUE USERS PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.stakeTxs.data:[]} xData={data?data.list.stakeTxs.yData:[]} title="STAKED TRANSACTION IN STAFI PER WEEK" barColor={BarColor.right}/>
             
        </DataRow>
    </div>
}