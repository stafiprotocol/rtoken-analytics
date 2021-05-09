import React from 'react';
import {renderRoutes}  from 'react-router-config';  
export default function Index(props:any){
    return  <>
    {renderRoutes(props.route.routes)}
    </>
}