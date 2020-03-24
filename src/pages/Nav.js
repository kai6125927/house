import React, { Component } from 'react'
import { TabBar } from "antd-mobile"
import Main from "./nav/Main"
import Microchat from "./nav/MicroChat"
import History from "./nav/History"
import Mine from "./nav/Mine"
import "../assets/styles/nav.sass"

export default class Nav extends Component {
    state = {
        tabs: [
            { title: '首页', key: 't1', img: require('../assets/imgs/首页.png'), img2: require('../assets/imgs/首页2.png'), label: <Main /> },
            { title: '微聊', key: 't2', img: require('../assets/imgs/微聊.png'), img2: require('../assets/imgs/微聊2.png'), label: <Microchat /> },
            { title: '推荐', key: 't3', img: require('../assets/imgs/足迹.png'), img2: require('../assets/imgs/足迹2.png'), label: <History /> },
            { title: '我的', key: 't4', img: require('../assets/imgs/我的.png'), img2: require('../assets/imgs/我的2.png'), label: <Mine /> },
        ],
        selectedTab: '首页',
    }
    render() {
        let { tabs } = this.state
        return (
            <div style={{ height: "100%" }}>
                <TabBar>
                    {tabs.map(item =>
                        <TabBar.Item
                            title={item.title}
                            key={item.key}
                            icon={{ uri: item.img }}
                            selectedIcon={{ uri: item.img2 }}
                            selected={this.state.selectedTab === item.title}
                            onPress={() => {
                                this.setState({
                                    selectedTab: item.title,
                                });
                            }}
                        >
                            {item.label}
                        </TabBar.Item>
                    )}
                </TabBar>
            </div>
        )
    }
}
