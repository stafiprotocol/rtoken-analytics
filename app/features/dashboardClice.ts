import { createSlice } from '@reduxjs/toolkit';  
import { AppThunk, RootState } from '../store';  
import DashboardServer from '@servers/dashboard'
import StafiServer from '@servers/stafi'
import {rSymbol} from '@keyring/defaults'
import NumberUtil from '@util/numberUtil'; 

const stafiServer=new StafiServer(); 
const dashboardServer = new DashboardServer()
const DashboardClice = createSlice({
  name: 'DashboardModule',
  initialState: {   
      collect:null,
      rToken:null,
      ratio:"--",
      free:"--", 
      totalIssuance:'--', 
  },
  reducers: {  
      setCollect:function(state,{payload}){
          state.collect=payload;
      },
      setRToken:function(state,{payload}){
          state.rToken=payload;
      },
      setRatio:function(state,{payload}){
          state.ratio=payload
      },
      setFree:function(state,{payload}){
          state.free=payload
      },
      setTotalIssuance:function(state,{payload}){
          state.totalIssuance=payload
      }
  },
});

export const { 
    setCollect,
    setRToken,
    setRatio,
    setFree,
    setTotalIssuance
}=DashboardClice.actions

 
export const getCollect=():AppThunk=>async (dispatch,getState)=>{  
     const result=await dashboardServer.getCollect(Cycle.week); 
     if(result.status==="80000"){
        dispatch(setCollect(result.data))
     }
}
export const getRToken=(rtoken:Rtoken,cycle:Cycle):AppThunk=>async (dispatch,getState)=>{ 
    const result=await dashboardServer.getRToken(rtoken,cycle); 
    if(result.status==="80000"){
       dispatch(setRToken(result.data))
    }
}
export const initData=(type:rSymbol):AppThunk=>async (dispatch,getState)=>{
    dispatch(rTokenRate(type));    
    dispatch(getFree(type));
    dispatch(getTotalIssuance(type)); 
}
export const rTokenRate=(type:rSymbol):AppThunk=>async (dispatch,getState)=>{
    dispatch(setRatio("--"))
    const api = await stafiServer.createStafiApi();
    const result = await api.query.rTokenRate.rate(type);
    let ratio:any = NumberUtil.rTokenRateToHuman(result.toJSON());
    if (!ratio) {
      ratio = 1;
    }
    dispatch(setRatio(ratio))
}

export const getFree=(type:rSymbol):AppThunk=>async (dispatch,getState)=>{
    try {
        dispatch(setFree("--"));
        const stafiApi = await stafiServer.createStafiApi(); 
        const protocolFeeAccount = await stafiApi.query.rTokenLedger.receiver();  
        const accountData = await stafiApi.query.rBalances.account(type, protocolFeeAccount.toJSON());
        const account=accountData.toJSON();  
        dispatch(setFree(NumberUtil.tokenAmountToHuman(account.free,type) || "--"));
    } catch (error) {
        dispatch(setFree("--"));
    } 
}
 
 export const  getTotalIssuance=(type:rSymbol):AppThunk=>async (dispatch,getState)=>{
    dispatch(setTotalIssuance("--"))
    const stafiApi = await stafiServer.createStafiApi(); 
    const  result =await stafiApi.query.rBalances.totalIssuance(type) 
    let totalIssuance:any = NumberUtil.tokenAmountToHuman(result.toJSON(),type);
    totalIssuance = NumberUtil.handleFisAmountToFixed(totalIssuance); 
    console.log("totalIssuance:",totalIssuance);
    dispatch(setTotalIssuance(totalIssuance))
}

 
export enum Rtoken {
    rKsm = 'Rksm',
    rDot = 'Rdot',
    rAtom = 'Ratom', 
    rEth="Reth",
    rFis="Rfis"
  }
  export enum Cycle {
    day=1,
    week=2,
    month=3,
  }
export default DashboardClice.reducer;