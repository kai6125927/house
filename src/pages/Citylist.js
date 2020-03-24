import React, { Component } from 'react'
import BScroll from "better-scroll";
import city from "../json/city.json"
import "../assets/styles/Citylist.sass"

export default class City extends Component {
      checked = (e) => {
        console.log(e.target.innerHTML)
        this.leftScroll.scrollToElement(document.getElementById(e.target.innerHTML), 500);
      }
    componentDidMount(){
        this.leftScroll = new BScroll(document.querySelector(".listLeft"))   
      }
      
    render() {
        return (
            <div style={{height:"100%"}}>
                <div className="listLeft">
                    <ul className="content">
                      <div className="listHeader">当前定位</div>
                      <div className="listContent">成都</div>
                      <div className="listHeader">热门城市</div>
                      {city.hot.map(obj=>
                      <div key={obj} className="listContent">{obj}</div>
                          )}
                      {city.list.map(obj=><div>
                      <div key={obj.title} id={obj.title} className="listHeader">{obj.title}</div>
                      {obj.city.map((item,i)=>
                      <div key={i} className="listContent">{item}</div>                        
                          )}
                      </div>)}
                    </ul>
                </div>
                <div className="listRight">
                    {city.list.map((obj,i)=>
                        <p onClick={this.checked} key={obj.title}>{obj.title}</p>
                        )}
                </div>
            </div>
        )
    }
}
