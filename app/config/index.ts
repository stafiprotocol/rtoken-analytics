 export const isdev=()=>{
   return false;
  // let host = window.location.host;
  // var local =
  //   /192\.168\./.test(host) || /127\.0\./.test(host) || /localhost/.test(host);
  // let demo = /test/.test(host);
  // return process.env.NODE_ENV!="production" &&  (local || demo)
}
export default {
  webApiSite:"https://rtoken-api.stafi.io",
  stafiChain: ()=>{
    if(!isdev()){
      return 'wss://mainnet-rpc.stafi.io';
    }else{
      return 'wss://stafi-seiya.stafi.io'
    } 
  },
  rFISTokenAddress: ()=>{
    if(!isdev()){
      return '0xc82eb6dea0c93edb8b697b89ad1b13d19469d635';
    }else{
      return '0xc372e985fda306cfe0e903657de808cf757f536f';
    }  
  },
  FISTokenAddress: ()=>{
    if(!isdev()){
      return '0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d';
    }else{
      return '0x64591e3f2dbf46cdfb398a0d9ba81f41b7cbd449';
    }  
  },
  rKSMTokenAddress:()=>{
    if(!isdev()){
      return '0x3c3842c4d3037ae121d69ea1e7a0b61413be806c';
    }else{
      return '0xd1d458c1c3579033a65db4ca2f06c12573aa5e27';
    }  
  },
  rDOTTokenAddress:()=>{
    if(!isdev()){
      return '0x505f5a4ff10985fe9f93f2ae3501da5fe665f08a';
    }else{
      return '0x6aef17cea6e6841f1957f9fde6538ac391d55636';
    }  
  },
  rATOMTokenAddress:()=>{
    if(!isdev()){
      return '0xd01cb3d113a864763dd3977fe1e725860013b0ed';
    }else{
      return '0xd363ed9ee73c8b6bd048ae188000be454f7b7925';
    }  
  },
  rMATICTokenAddress:()=>{
    if(!isdev()){
      return '0x3dbb00c9be5a327e25caf4f650844c5dba81e34b';
    }else{
      return '0x1a80c8874e4bf1516c02aa92b838b33e11cde7e8';
    }  
  },
  rETHTokenAddress: ()=>{ 
    if(!isdev()){
      return '0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593';
    }else{
      return '0x680ab46340aa2189515b49fd35ac8a5bd66e78de';
    }  
  },
  stafiUserDepositAddress:()=> {
    if(!isdev()){
      return '0x430cf6dd3e289adae63b50ff661d6bba2dbb3f28';
    }else{
      return '0x310b80843c56591bd3c403f877ab665f68530cef';
    }   
  },
  stafiNodeDepositAddress:() => { 
    if(!isdev()){
      return '0x50db2ce93c8b1f6771c985b6b840b587349496a0';
    }else{
      return '0x0313d2b2e9ef926012881a7e33482a957bed265c';
    }   
  },
  stafiStakingPoolManagerAddress:()=> {
    if(!isdev()){
      return '0x1c9890c9cb9925a8651c10b5f557d744bafbed5a';
    }else{
      return '0xa84ec99b9c9d16f769d9909a2466923f4dddd282';
    }  
  },
  stafiStakingPoolQueueAddress:()=> { 
    if(!isdev()){
      return '0xc59ea6cebb8089a0330800f50946610977c4fc96';
    }else{
      return '0xc8985dd9da3c9d35eaac6b29b5f6b7ecc3f765ca';
    }  
  },
  bridgeAddress:()=>{
    if(!isdev()){
      return '0x13ef51f0525df6045267baed411f535d86586bc1';
    }else{
      return '0x57e7c280a3828bf9a5356d7c926fcd555cf0bdc8';
    } 
  }
} 
 