
import {api} from '@util/http';
import moment from 'moment'

export default class Dashboard{
    getRToken(rsymbol:string,cycle:number){
        const url="webapi/rtoken/statdetail"; 
        return api.post(url,{
            timestamp:moment().valueOf(),
            rsymbol,
            cycle
        })
    }
    getCollect(cycle:number){
        const url="webapi/rtoken/statinfo"
        return api.post(url,{
            cycle
        })
    }
}