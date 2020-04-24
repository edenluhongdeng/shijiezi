import React, { Component } from "react"
import ReactDom from 'react-dom';
import gotem from 'gotem';
import { Spin,message } from "antd"
const withHeader = (title) => (WrappedComponent) => class HOC extends Component {
    render() {
        const newProps = {
            text: "我是自定义的新props,也就是属性基于代理的传递"
        }
        return (
            <div>
                我的自定义组件
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

  const withCopy = (targetName) => {
    return (WrappedComponent) => {
      return class extends Component {
        componentDidMount() {
          const ctx = this;
          const dom = ReactDom.findDOMNode(ctx);
          const nodes = {
            trigger: dom,
            target: dom.querySelector(targetName)
          };
          gotem(nodes.trigger, nodes.target, {
            success: function () {
              message.success('复制成功');
            },
            error: function () {
              message.error('复制失败，请手动输入');
            }
          });
        }
        render() {
          return <WrappedComponent {...this.props}/>;
        }
      };
    };
  }
export {withHeader,withLoading,withCopy};