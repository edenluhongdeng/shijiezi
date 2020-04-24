import React, { Component } from "react"
import { Spin } from "antd"
const withHeader = (title) => (WrappedComponent) => class HOC extends Component {
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
const withLoading = (loadingCheck)=> {
    return function (WrappedComponent) {
      return class extends WrappedComponent {
        componentWillUpdate(nextProps, nextState) {
          console.log('withLoading将会更新');
        }
        render() {
          if (loadingCheck(this.props)) {
            return <Spin tip="加载中" size="large">
              {super.render()}
            </Spin>
          } else {
            return super.render();
          }
        }
      }
    }
  }

// 使用
// @withLoading(props => {
//     return props.IndexStore.accountList.length == 0;
//   })
export {withHeader,withLoading};