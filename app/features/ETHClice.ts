import { createSlice } from '@reduxjs/toolkit';  
import { AppThunk, RootState } from '../store'; 
import EthServer from '@servers/eth/index';
import FisServer from '@servers/stafi';
import KsmServer from '@servers/ksm';
import AtomServer from '@servers/atom'; 
import DotServer from '@servers/polkadot';
import NumberUtil from '@util/numberUtil'

const ethServer =new EthServer();
const fisServer =new FisServer();
const ksmServer=new KsmServer(); 
const dotServer =new DotServer();
const atomServer=new AtomServer();
const ETHClice = createSlice({
  name: 'ETHModule',
  initialState: {   
    ercETHBalance:"--",
    ercFISBalance:"--",
    ercRFISBalance:"--",
    ercRKSMBalance:"--",
    ercRDOTBalance:"--",
    ercRATOMBalance:"--", 

    totalStakedAmount:"--",
    ratio:"--"
  },
  reducers: {   
    setErcETHBalance(state,{payload}){
        state.ercETHBalance=payload;
    },
    setErcFISBalance(state,{payload}){
        state.ercFISBalance=payload;
    },
    setErcRFISBalance(state,{payload}){
        state.ercRFISBalance=payload;
    },
    setErcRKSMBalance(state,{payload}){
        state.ercRKSMBalance=payload;
    },
    setErcRDOTBalance(state,{payload}){
      state.ercRDOTBalance=payload
    },
    setErcRATOMBalance(state,{payload}){
      state.ercRATOMBalance=payload;
    },
    setRatio(state,{payload}){
      state.ratio=payload;
    },
    setTotalStakedAmount(state,{payload}){
      state.totalStakedAmount=payload;
    }
  },
});

export const {
    setErcETHBalance,
    setErcFISBalance,
    setErcRFISBalance,
    setErcRKSMBalance,
    setErcRDOTBalance,
    setErcRATOMBalance, 
    setRatio,
    setTotalStakedAmount
}=ETHClice.actions

export const getAssetBalanceAll=():AppThunk=>(dispatch,getState)=>{ 
    dispatch(getETHAssetBalance());
    dispatch(getFISAssetBalance());
    dispatch(getRFISAssetBalance());
    dispatch(getRKSMAssetBalance());
    dispatch(getRDOTAssetBalance());
    dispatch(getRATOMAssetBalance());
} 
export const getETHAssetBalance=():AppThunk=>(dispatch,getState)=>{  
  getAssetBalance(ethServer.getRETHTokenAbi(),ethServer.getRETHTokenAddress(),(v:any)=>{
    dispatch(setErcETHBalance(NumberUtil.handleFisAmountToFixed(v)))
  })
}

export const getFISAssetBalance=():AppThunk=>(dispatch,getState)=>{  
  getAssetBalance(fisServer.getFISTokenAbi(),fisServer.getFISTokenAddress(),(v:any)=>{
    dispatch(setErcFISBalance(NumberUtil.handleFisAmountToFixed(v)))
  })
}
export const getRFISAssetBalance=():AppThunk=>(dispatch,getState)=>{  
  getAssetBalance(fisServer.getRFISTokenAbi(),fisServer.getRFISTokenAddress(),(v:any)=>{
    dispatch(setErcRFISBalance(NumberUtil.handleFisAmountToFixed(v)))
  })
}
export const getRKSMAssetBalance=():AppThunk=>(dispatch,getState)=>{   
  getAssetBalance(ksmServer.getRKSMTokenAbi(),ksmServer.getRKSMTokenAddress(),(v:any)=>{
    dispatch(setErcRKSMBalance(NumberUtil.handleFisAmountToFixed(v)))
  }) 
}
export const getRDOTAssetBalance=():AppThunk=>(dispatch,getState)=>{  
  getAssetBalance(dotServer.getRDOTTokenAbi(),dotServer.getRDOTTokenAddress(),(v:any)=>{
    dispatch(setErcRDOTBalance(NumberUtil.handleFisAmountToFixed(v)))
  })
}

export const getRATOMAssetBalance=():AppThunk=>(dispatch,getState)=>{  
  getAssetBalance(atomServer.getRATOMTokenAbi(),atomServer.getRATOMTokenAddress(),(v:any)=>{
    dispatch(setErcRATOMBalance(NumberUtil.handleFisAmountToFixed(v)))
  })
}
const getAssetBalance=(getTokenAbi:string,tokenAddress:string,cb?:Function)=>{
    let web3=ethServer.getWeb3(); 
    let contract = new web3.eth.Contract(getTokenAbi,tokenAddress);
    try{
      contract.methods.totalSupply().call().then((balance:any) => {

        let rbalance = web3.utils.fromWei(balance, 'ether');   
        cb && cb(rbalance);
      }).catch((e:any)=>{
        console.error(e)
      });
    }catch(e:any){
      console.error(e)
    }
}
 
export const rTokenRate=():AppThunk=>async (dispatch,getState)=>{
  let web3=ethServer.getWeb3(); 
  let contract = new web3.eth.Contract(ethServer.getRETHTokenAbi(),ethServer.getRETHTokenAddress());
  const amount = web3.utils.toWei('1');
  const result = await contract.methods.getEthValue(amount).call();
  let ratio = web3.utils.fromWei(result, 'ether'); 
  dispatch(setRatio(NumberUtil.handleEthAmountRateToFixed(ratio)))
}

 
export const getStakingPoolStatus=():AppThunk=>async (dispatch,getState)=>{
  const result=await ethServer.getStakingPoolStatus(); 
  if (result.status == '80000') {
    if (result.data) {
      if (result.data.stakeAmount) {
        dispatch(setTotalStakedAmount(NumberUtil.handleEthAmountToFixed(result.data.stakeAmount)));
      }
    }
  }  
}
 






  
export default ETHClice.reducer;