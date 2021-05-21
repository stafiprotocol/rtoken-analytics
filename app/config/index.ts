 export const isdev=()=>{
  let host = window.location.host;
  var local =
    /192\.168\./.test(host) || /127\.0\./.test(host) || /localhost/.test(host);
  let demo = /test/.test(host);
  return (local || demo)
}
export default {
  webApiSite:"https://rtoken-api.stafi.io",
  stafiChain: ()=>{
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return 'wss://mainnet-rpc.stafi.io';
    }else{
      return 'wss://stafi-seiya.stafi.io'
    } 
  },
  rFISTokenAddress: ()=>{
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return '0xc82eb6dea0c93edb8b697b89ad1b13d19469d635';
    }else{
      return '0xc372e985fda306cfe0e903657de808cf757f536f';
    }  
  },
  FISTokenAddress: ()=>{
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return '0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d';
    }else{
      return '0x64591e3f2dbf46cdfb398a0d9ba81f41b7cbd449';
    }  
  },
  rKSMTokenAddress:()=>{
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return '0x3c3842c4d3037ae121d69ea1e7a0b61413be806c';
    }else{
      return '0xd1d458c1c3579033a65db4ca2f06c12573aa5e27';
    }  
  },
  rDOTTokenAddress:()=>{
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return '0x505f5a4ff10985fe9f93f2ae3501da5fe665f08a';
    }else{
      return '0x6aef17cea6e6841f1957f9fde6538ac391d55636';
    }  
  },
  rATOMTokenAddress:()=>{
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return '0xd01cb3d113a864763dd3977fe1e725860013b0ed';
    }else{
      return '0xd363ed9ee73c8b6bd048ae188000be454f7b7925';
    }  
  },
  rETHTokenAddress: ()=>{ 
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return '0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593';
    }else{
      return '0x680ab46340aa2189515b49fd35ac8a5bd66e78de';
    }  
  },
  bridgeAddress:()=>{
    if(process.env.NODE_ENV=="production" &&  !isdev()){
      return '0x13ef51f0525df6045267baed411f535d86586bc1';
    }else{
      return '0x57e7c280a3828bf9a5356d7c926fcd555cf0bdc8';
    } 
  }
} 
 