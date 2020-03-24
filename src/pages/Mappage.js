import React, { Component } from 'react'
import {connect} from "react-redux"

export default class Mappage extends Component {
    componentDidMount(){
        var map = new window.AMap.Map("myMap", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        //地图显示当前城市
                        map.setBounds(citybounds);
                    }
                } else {
                    console.log(result.info);
                }
            });
        }
        showCityInfo();
    }
    
    render() {
        return (
            <div>
                <div id="myMap" style={{height:"500px"}}>
                
                </div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

