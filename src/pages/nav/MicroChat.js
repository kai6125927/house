import React, { Component } from 'react'
import {WhiteSpace,Button} from "antd-mobile"
import "../../assets/styles/MicroChat.sass"

export default class MicroChat extends Component {
    render() {
        return (
            <div className="chat">
                <div className="card">
                    <img src={require('../../assets/imgs/header.png')} />
                    <p>置业顾问:<span>张小妹</span></p>
                    <p>专业服务诚信做人做事!</p>
                    <WhiteSpace />
                    <Button type="primary" inline size="small">我要聊天</Button>
                </div>
            </div>
        )
    }
}
