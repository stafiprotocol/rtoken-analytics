import React from 'react';
import LeftSlider from '@components/slider/leftSlider'
import {renderRoutes}  from 'react-router-config';  
import './index.scss'
export default function index(props:any){ 
  return <div className="stafi_layout" style={{height:"100%"}}> 
     <LeftSlider {...props}/>
      <div className="stafi_container">
        {renderRoutes(props.route.routes)}
      </div>
  </div>
}