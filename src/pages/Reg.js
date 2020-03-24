import React, { Component } from 'react'
import {InputItem,Button,WhiteSpace,Checkbox} from "antd-mobile"
import "../assets/styles/reg.sass"

export default class Reg extends Component {
    render() {
        return (
            <div className="reg">
                <InputItem placeholder="请输入手机号" type="phone" />
                <WhiteSpace size="lg" />
                <InputItem placeholder="请输入密码" type="password" />
                <WhiteSpace size="lg" />
                <div className="code">
                    <InputItem placeholder="请输入验证码" />
                    <button type="button">获取验证码</button>
                </div>
                <WhiteSpace size="lg" />
                <Checkbox>
                    <span style={{color:"#C5C5C5"}}>我已同意<span style={{color:"#00BC5B"}}>《用户服务协议》及《隐私权政策》</span></span>
                </Checkbox>
                <WhiteSpace size="xl" />
                <Button type="primary" style={{background:"#00BC5B"}}>登陆</Button>
                <WhiteSpace size="lg" />
                <div style={{color:"#00BC5B"}}>已有账号</div>
            </div>
        )
    }
}
