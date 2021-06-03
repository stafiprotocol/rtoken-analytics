import React, { useEffect } from 'react';
import LeftSlider from '@components/slider/leftSlider'
import {renderRoutes}  from 'react-router-config';  
import {getAssetBalanceAll} from '@features/ETHClice';
import {Spin} from 'antd'; 
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
export default function index(props:any){ 
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAssetBalanceAll());
  },[])
  const {loadding}=useSelector((state:RootState)=>{
    return {
      loadding:state.dashboardModule.loadding
    }
  })
  return <Spin spinning={loadding}  size="large"><div className="stafi_layout" style={{height:"100%"}}> 
      
        <LeftSlider {...props}/>
      
        <div className="stafi_container">
          {renderRoutes(props.route.routes)}
        </div>
      
  </div></Spin>
}