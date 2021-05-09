import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
// import authorizedRoute from '@components/route/authorizedRoute';
 

import RootTemplate from './pages/template/rootTemplate';
import HomeTemplate from  './pages/home/template';
import HomeDashboard from  './pages/home/dashboard';
  
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