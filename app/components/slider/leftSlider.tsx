import React from 'react';
import logo from '@images/logo.png';
import home_svg from '@images/home.png';
import fis_svg from '@images/fis.svg'
import dot_svg from '@images/dot.svg'
import ksm_svg from '@images/ksm.svg'
import atom_svg from '@images/atom.svg'
import eth_svg from '@images/eth.svg'
import selected_fis_svg from '@images/selected_fis.svg'
import selected_dot_svg from '@images/selected_dot.svg'
import selected_ksm_svg from '@images/selected_ksm.svg'
import selected_atom_svg from '@images/selected_atom.svg'
import selected_eth_svg from '@images/selected_eth.svg'
import selected_home_svg from '@images/selected_home.png'
import './leftSlider.scss'
const dataList=[
    {
        title:"home",
        icon:home_svg,
        selected_icon:selected_home_svg,
        url:"/home/dashboard",
        keyWord:"home"
    },{
        title:"eth",
        icon:eth_svg,
        selected_icon:selected_eth_svg,
        url:"/reth/dashboard",
        keyWord:"reth"
    },{
        title:"fis",
        icon:fis_svg,
        selected_icon:selected_fis_svg,
        url:"/rfis/dashboard",
        keyWord:"rfis"
    },{
        title:"dot",
        icon:dot_svg,
        selected_icon:selected_dot_svg,
        url:"/rdot/dashboard",
        keyWord:"rdot"
    },{
        title:"ksm",
        icon:ksm_svg,
        selected_icon:selected_ksm_svg,
        url:"/rksm/dashboard",
        keyWord:"rksm"
    },{
        title:"atom",
        icon:atom_svg,
        selected_icon:selected_atom_svg,
        url:"/ratom/dashboard",
        keyWord:"ratom"
    }
]
export default function Index(props:any){
    return  <div className="left_slider">
    <div className="logoPanel">
        <img src={logo} />
    </div>
    <div className="icons">
        {dataList.map(item=>{
            return <div onClick={()=>{
                !location.pathname.includes(item.keyWord) &&  props.history.push(item.url)
            }} key={item.title} className="icon_item">
                <img src={location.pathname.includes(item.keyWord)?item.selected_icon:item.icon} />
            </div>
        })}
       
        {/* <div className="icon_item">
            <img src={eth_svg} />
        </div> */}
    </div>
</div>
}