import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
// import authorizedRoute from '@components/route/authorizedRoute';
 

import RootTemplate from './pages/template/rootTemplate';
import HomeTemplate from  './pages/home/template';
import HomeDashboard from  './pages/home/dashboard';

import DotTemplate from  './pages/rDOT/template';
import DotDashboard from  './pages/rDOT/dashboard';

import KsmTemplate from  './pages/rKSM/template';
import KsmDashboard from  './pages/rKSM/dashboard';

import AtomTemplate from  './pages/rATOM/template';
import AtomDashboard from  './pages/rATOM/dashboard';

import EthTemplate from  './pages/rETH/template';
import EthDashboard from  './pages/rETH/dashboard';

import FisTemplate from  './pages/rFIS/template';
import FisDashboard from  './pages/rFIS/dashboard';
  
const routesFactory=(role?:any)=>{ 
  const routes=[
    {
      id:"root",
      path:'/', 
      component:RootTemplate,  
      routes:[{
        id:"home",
        path:'/home', 
        component:HomeTemplate, 
        routes:[
          {
            id:"home_dashboard",
            path:"/home/dashboard",
            component:HomeDashboard, 
          },{
            path: '*',
            component: () => <Redirect to="/home/dashboard"/>
          }
        ]
      },{
        id:"rdot",
        path:'/rdot', 
        component:DotTemplate, 
        routes:[
          {
            id:"rdot_dashboard",
            path:"/rdot/dashboard",
            component:DotDashboard, 
          },{
            path: '*',
            component: () => <Redirect to="/rdot/dashboard"/>
          }
        ]
      },{
        id:"rksm",
        path:'/rksm', 
        component:KsmTemplate, 
        routes:[
          {
            id:"rksm_dashboard",
            path:"/rksm/dashboard",
            component:KsmDashboard, 
          },{
            path: '*',
            component: () => <Redirect to="/rksm/dashboard"/>
          }
        ]
      },{
        id:"ratom",
        path:'/ratom', 
        component:AtomTemplate, 
        routes:[
          {
            id:"ratom_dashboard",
            path:"/ratom/dashboard",
            component:AtomDashboard, 
          },{
            path: '*',
            component: () => <Redirect to="/ratom/dashboard"/>
          }
        ]
      },{
        id:"reth",
        path:'/reth', 
        component:EthTemplate, 
        routes:[
          {
            id:"reth_dashboard",
            path:"/reth/dashboard",
            component:EthDashboard, 
          },{
            path: '*',
            component: () => <Redirect to="/reth/dashboard"/>
          }
        ]
      },{
        id:"rfis",
        path:'/rfis', 
        component:FisTemplate, 
        routes:[
          {
            id:"rfis_dashboard",
            path:"/rfis/dashboard",
            component:FisDashboard, 
          },{
            path: '*',
            component: () => <Redirect to="/rfis/dashboard"/>
          }
        ]
      },{
        path: '*',
        component: () => <Redirect to="/home/dashboard"/>
      }]
    },{
      path: '*',
      component: () => <Redirect to="/home/dashboard"/>
    }
    
  ]

  return renderRoutes(routes);
}

export default routesFactory;