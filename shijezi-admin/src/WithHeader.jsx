import React, { Component } from "react"

export default (title) => (WrappedComponent) => class HOC extends Component {
    render() {
        const newProps = {
            text: "我是自定义的新props,也就是属性基于代理的传递"
        }
        return (
            <div>
                我的自定义高阶组件
                <aside>{title ? title : "我是自定义标题"}</aside>
                <WrappedComponent {...this.props}{...newProps} />
            </div>
        )
    }
}