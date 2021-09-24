import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import dashboardReducer from "./dashboardClice";
import ETHReducer from "./ETHClice";

export default function createRootReducer(history?: History) {
  return combineReducers({
    router: connectRouter(history),
    dashboardModule: dashboardReducer,
    ETHModule: ETHReducer,
  });
}
