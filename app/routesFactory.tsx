import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import HomeDashboard from './pages/home/dashboard';
import HomeTemplate from './pages/home/template';
import AtomDashboard from './pages/rATOM/dashboard';
import AtomTemplate from './pages/rATOM/template';
import DotDashboard from './pages/rDOT/dashboard';
import DotTemplate from './pages/rDOT/template';
import EthDashboard from './pages/rETH/dashboard';
import EthTemplate from './pages/rETH/template';
import FisDashboard from './pages/rFIS/dashboard';
import FisTemplate from './pages/rFIS/template';
import KsmDashboard from './pages/rKSM/dashboard';
import KsmTemplate from './pages/rKSM/template';
import MaticDashboard from './pages/rMATIC/dashboard';
import MaticTemplate from './pages/rMATIC/template';
// import authorizedRoute from '@components/route/authorizedRoute';
import RootTemplate from './pages/template/rootTemplate';






  
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
        id:"rmatic",
        path:'/rmatic', 
        component:MaticTemplate, 
        routes:[
          {
            id:"rmatic_dashboard",
            path:"/rmatic/dashboard",
            component:MaticDashboard, 
          },{
            path: '*',
            component: () => <Redirect to="/rmatic/dashboard"/>
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