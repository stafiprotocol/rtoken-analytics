import React, { useEffect } from 'react'; 
import DataRow from '@components/dataGrid/row';
import DataCol from '@components/dataGrid/col';
import ChartCol,{BarColor} from '@components/dataGrid/chartCol';
import { getRToken,Rtoken,Cycle,initData} from '@features/dashboardClice'
import { useDispatch, useSelector } from 'react-redux';
import NumberUtil from '@util/numberUtil'
import {rSymbol} from '@keyring/defaults'
export default function Index(props:any){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRToken(Rtoken.rEth,Cycle.week));
        // dispatch(initData(rSymbol.Eth))
    },[]); 
    const {data,erc20Amount,ratio,totalIssuance}=useSelector((state:any)=>{ 
        return {
            data:state.dashboardModule.rToken,
            erc20Amount:state.ETHModule.ercRETHBalance,
            ratio:state.dashboardModule.ratio,
            totalIssuance:state.dashboardModule.totalIssuance
        }
    })  
    return <div>
          <DataRow>
          <DataCol title={"STAKED rETH VALUE"} unit="$" amount={NumberUtil.handleFisAmountToFixed(ratio*totalIssuance)} toolTip={"test"}/>
            <DataCol title={"rETH VALUE"} unit="$" amount={data?data.info.rtokenValue:"--"} toolTip={"test"}/>
            <DataCol title={"rETH VALUE (ERC20)"} unit="$" amount={data?data.info.erc20RtokenValue:"--"} toolTip={"test"}/>
            <DataCol title={"TOTAL FEE"} unit="$"  amount={data?data.info.feesValue:"--"} toolTip={"test"}/>
            <DataCol title={"rETH/ETH"} amount={NumberUtil.handleFisAmountRateToFixed(ratio)} toolTip={"test"}/>
            <DataCol title={"rETH PRICE"} unit="$" amount={data?data.info.price:"--"} toolTip={"test"}/>
            <DataCol title={"rETH AMOUNT"} unit="$" amount={totalIssuance} toolTip={"test"}/>
            <DataCol title={"rETH AMOUNT (ERC20)"} unit="$" amount={erc20Amount} toolTip={"test"}/>
            <DataCol title={"ORIGINAL VALIDATORS"} amount={data?data.info.validators:"--"} toolTip={"test"}/>
            <DataCol title={"UNIQUE USERS"} amount={data?data.info.users:"--"} toolTip={"test"}/>
            <DataCol title={"STAKED TRANSACTIONS"} unit="$"  amount={data?data.info.stakeTxs:"--"} toolTip={"test"}/>
            <DataCol title={"REDEEM VALUE "} unit="$"  amount={data?data.info.reddemValue:"--"} toolTip={"test"}/>
        </DataRow>
        <DataRow>
            <ChartCol data={data?data.list.rate.data:[]} xData={data?data.list.rate.yData:[]} title="rETH : ETH  RATE" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.price.data:[]} xData={data?data.list.price.yData:[]} title="rETH PRICE" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.mint.data:[]} xData={data?data.list.mint.yData:[]} title="MINTED rETH (NATIVE)" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.erc20Mint.data:[]} xData={data?data.list.erc20Mint.yData:[]} title="MINTED rETH (ERC20)" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.stakeValue.data:[]} xData={data?data.list.stakeValue.yData:[]} title="STAKED rETH VALUE IN STAFI PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.reddemValue.data:[]} xData={data?data.list.reddemValue.yData:[]} title="REDEEM rETH VALUE IN STAFI PER WEEK" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.rtokenValue.data:[]} xData={data?data.list.rtokenValue.yData:[]} title="rETH VALUE IN STAFI PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.feesValue.data:[]} xData={data?data.list.feesValue.yData:[]} title="STAKED FEE GENERATED PER WEEK" barColor={BarColor.right}/>
            <ChartCol data={data?data.list.users.data:[]} xData={data?data.list.users.yData:[]} title="UNIQUE USERS PER WEEK" barColor={BarColor.left}/>
            <ChartCol data={data?data.list.stakeTxs.data:[]} xData={data?data.list.stakeTxs.yData:[]} title="STAKED TRANSACTION IN STAFI PER WEEK" barColor={BarColor.right}/>
             
        </DataRow>
    </div>
}