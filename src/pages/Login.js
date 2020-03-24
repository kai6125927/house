import React, { Component } from 'react'
import {Flex,InputItem,WhiteSpace,Button,WingBlank} from "antd-mobile"
import "../assets/styles/Login.sass"
import { login } from '../api/apis'

export default class Login extends Component {
    state={
        acc:"",
        pwd:"",
        show:false
    }
    loginBtn(){
        login(this.state.acc,this.state.pwd).then((res)=>{
            console.log(res.data)
            if(res.data === "fail"){
                this.setState({
                    show:true
                })
            }else{
                this.props.history.push("/")
            }
        })
    }
    render() {
        let {acc,pwd} = this.state
        return (
            <div style={{background:"#fff",height:"100%"}}>
                <Flex justify="center" className="logo">
                    <img width="250" height="150" src={require("../assets/imgs/2.jpg")} />
                </Flex>
                
                <WingBlank size="lg">
                <InputItem onChange={(val)=>{this.setState({acc:val})}} placeholder="请输入手机号" value={acc} type="phone" >
                    <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                </InputItem>
                <WhiteSpace size="lg" />
                <InputItem onChange={(val)=>{this.setState({pwd:val})}} placeholder="请输入密码" value={pwd} type="password" >
                    <div style={{ backgroundImage: "url("+require('../assets/imgs/lock.png')+")", backgroundSize: 'cover', height: '24px', width: '24px' }} />
                </InputItem>
                <WhiteSpace size="lg" />
                <Button onClick={this.loginBtn.bind(this)} type="primary" style={{background:"#00BC5B"}}>登陆</Button>
                <p className="warning" style={{display:this.state.show?"block":"none"}}>X 您输入的账号密码有误</p>
                <WhiteSpace size="lg" />
                    <Flex justify="between" style={{color:"#00BC5B"}}>
                        <div>手机快速注册</div>
                        <div>忘记密码?</div>
                    </Flex>
                    </WingBlank>
                <div className="bottom" style={{color:"#EBEAEE"}}>登陆/注册即代表同意《源码房产用户协议》</div>
            </div>
        )
    }
}
