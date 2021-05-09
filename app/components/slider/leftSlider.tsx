import React from 'react';
import logo from '@images/logo.png';
import home_svg from '@images/home.png';
import fis_svg from '@images/fis.svg'
import dot_svg from '@images/dot.svg'
import ksm_svg from '@images/ksm.svg'
import atom_svg from '@images/atom.svg'
import eth_svg from '@images/eth.svg'

import './leftSlider.scss'
const dataList=[
    {
        title:"home",
        icon:home_svg,
        selected_icon:home_svg,
        url:"/dashboard"
    },{
        title:"eth",
        icon:eth_svg,
        selected_icon:home_svg,
        url:"/eth"
    },{
        title:"fis",
        icon:fis_svg,
        selected_icon:home_svg,
        url:"/fis"
    },{
        title:"dot",
        icon:dot_svg,
        selected_icon:home_svg,
        url:"/dot"
    },{
        title:"ksm",
        icon:ksm_svg,
        selected_icon:home_svg,
        url:"/ksm"
    },{
        title:"atom",
        icon:atom_svg,
        selected_icon:home_svg,
        url:"/atom"
    }
]
export default function Index(){
    return  <div className="left_slider">
    <div className="logoPanel">
        <img src={logo} />
    </div>
    <div className="icons">
        {dataList.map(item=>{
            return <div key={item.title} className="icon_item">
                <img src={item.icon} />
            </div>
        })}
       
        {/* <div className="icon_item">
            <img src={eth_svg} />
        </div> */}
    </div>
</div>
}