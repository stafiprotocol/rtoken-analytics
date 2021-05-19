import { createSlice } from '@reduxjs/toolkit';  
import { AppThunk, RootState } from '../store';  
import DashboardServer from '@servers/dashboard'

const dashboardServer = new DashboardServer()
const DashboardClice = createSlice({
  name: 'DashboardModule',
  initialState: {   
      collect:null,
      rToken:null
  },
  reducers: {  
      setCollect:function(state,{payload}){
          state.collect=payload;
      },
      setRToken:function(state,{payload}){
          state.rToken=payload;
      }  
  },
});

export const { 
    setCollect,
    setRToken
}=DashboardClice.actions

 
export const getCollect=():AppThunk=>async (dispatch,getState)=>{  
     const result=await dashboardServer.getCollect(); 
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

export enum Rtoken {
    rKsm = 'rKsm',
    rDot = 'rDot',
    rAtom = 'rAtom', 
    rEth="rEth",
    rFis="rFis"
  }
  export enum Cycle {
    day=1,
    week=2,
    month=3,
  }
export default DashboardClice.reducer;