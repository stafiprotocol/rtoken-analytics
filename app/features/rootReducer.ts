import { combineReducers } from 'redux';
import { History,createBrowserHistory } from 'history';  
import {connectRouter} from 'connected-react-router';  
import dashboardReducer from './dashboardClice';
import ETHReducer from './ETHClice'

export default function createRootReducer(history?: History) {
  return combineReducers({  
    router:connectRouter(history),
    dashboardModule:dashboardReducer,
    ETHModule:ETHReducer 
  });
}