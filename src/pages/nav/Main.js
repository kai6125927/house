import React, { Component } from 'react'
import { Grid, Carousel } from "antd-mobile"
import "../../assets/styles/main.sass"
import {gethouselist} from "../../api/apis"


export default class Main extends Component {
    state = {
        data: [require("../../assets/imgs/2.jpg"), require("../../assets/imgs/2.jpg"), require("../../assets/imgs/2.jpg")],
        list: [
            { icon: require("../../assets/imgs/新房.png"), text: "新房" },
            { icon: require("../../assets/imgs/二手房.png"), text: "二手房" },
            { icon: require("../../assets/imgs/租房.png"), text: "租房" },
            { icon: require("../../assets/imgs/商铺写字楼.png"), text: "商铺写字楼"},
            { icon: require("../../assets/imgs/卖房.png"), text: "卖房"},
            { icon: require("../../assets/imgs/海外房产.png"), text: "海外房产",},
            { icon: require("../../assets/imgs/小区房价.png"), text: "小区房价"},
            { icon: require("../../assets/imgs/问答.png"), text: "问答"},
        ],
        list2:[
            { icon: require("../../assets/imgs/我要贷款.png"), text: "我要贷款" },
            { icon: require("../../assets/imgs/房贷计算.png"), text: "房贷计算" },
            { icon: require("../../assets/imgs/知识.png"), text: "知识" },
            { icon: require("../../assets/imgs/扫一扫.png"), text: "扫一扫"},
        ],
        like:[],
        citychange:"定位中"
    }
    componentDidMount(){
        gethouselist().then(d=>{
            this.setState({
                like:d.data
            })
            console.log(d)
        })


        //获取用户所在城市信息
        var showCityInfo = ()=>{
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            var _this = this
            citysearch.getLocalCity((status, result)=>{
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        _this.setState({
                            citychange:cityinfo
                        })
                    }
                } else {
                    console.log(result.info);
                }
            });
        }
        showCityInfo();
    }
    headerBtn(btn){
        window.location.hash = "/"+btn
    }
    render() {
        let {like,citychange} = this.state
        return (
            <div style={{ height: "100%" }}>
                <div className="mainTop">
                    <span onClick={this.headerBtn.bind(this,"citylist")}>{citychange}▼</span>
                    <label onClick={this.headerBtn.bind(this,"search")} className="inp">
                        <img width="22" src={require("../../assets/imgs/搜索.png")} />
                        <input />
                    </label>
                    <span onClick={this.headerBtn.bind(this,"mappage")}>
                        <img src={require("../../assets/imgs/map.png")} width="26px" />
                    </span>
                </div>
                <div>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                    >
                        {this.state.data.map(val => (
                            <img
                                src={val}
                                key={val}
                            />
                        ))}
                    </Carousel>
                </div>
                <div>
                    <Grid data={this.state.list} hasLine={false} />
                </div>
                <div style={{marginTop:"10px"}}>
                    <div style={{background:"#fff",padding:"10px",paddingBottom:"0"}}>
                        <span style={{color:"#03BD5D",fontWeight:"bolder"}}>房产全百科</span>
                        <span style={{fontSize:"12px"}}>专业的买房攻略</span>
                    </div>
                    <Grid data={this.state.list2} hasLine={false} />
                </div>
                <div className="like">
                    <div className="header">猜你喜欢</div>
                    <div>
                        {like.map(item=>
                           <div key={item.id} className="content">
                            <img src={"http://192.168.101.2:80"+item.imgs} />
                            <div className="likeRight">
                                <div className="contentHeader">{item.name}</div>
                                <div>
                                    <span>{item.area}</span>
                                    <span>{item.range}</span>
                                </div>
                                <div>
                                    <span style={{marginRight:"5px"}}>{item.type}</span>
                                    <span>{item.point}平</span>
                                </div>
                            </div>  
                            <div className="money">{item.price}/平</div>      
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
