import React, { useEffect } from 'react';
import LeftSlider from '@components/slider/leftSlider'
import {renderRoutes}  from 'react-router-config';  
import {getAssetBalanceAll} from '@features/ETHClice'
import './index.scss'
import { useDispatch } from 'react-redux';
export default function index(props:any){ 
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAssetBalanceAll());
  })
  return <div className="stafi_layout" style={{height:"100%"}}> 
     <LeftSlider {...props}/>
      <div className="stafi_container">
        {renderRoutes(props.route.routes)}
      </div>
  </div>
}