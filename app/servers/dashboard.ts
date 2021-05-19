
import {api} from '@util/http';
import moment from 'moment'

export default class Dashboard{
    getRToken(rtoken:string,cycle:number){
        const url="webapi/stat/rtoken"; 
        return api.post(url,{
            timestamp:moment().valueOf(),
            rtoken,
            cycle
        })
    }
    getCollect(){
        const url="webapi/stat/collect"
        return api.post(url)
    }
}