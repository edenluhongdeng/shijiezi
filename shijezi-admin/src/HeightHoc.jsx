/*
*https://segmentfault.com/a/1190000010371752
* react 高阶组件学习
*/
import React, { Component } from "react"
import {withHeader,withLoading,withCopy} from "./WithHeader"
import recompact from 'recompact'
  class Page1 extends Component {
    render() {
        return (
            <div>  Page1 </div>
        );
    }
}
class Page2 extends Component {
    render() {
        return (
            <div>
                 <h1>Page2</h1>
                <div>用组件props值更新的方式来修改loading的状态</div>
             </div>
        );
    }
}
class Page3 extends Component {
    render() {
        return (
               <div id="copytext">
                   <h3>我是接受复制的那段文字？{Math.random()}</h3>
               </div>
        );
    }
}
class Demo extends Component {
    constructor(props){
        super(props)
        // propTypes: {
        //     data:React.PropTypes.array,    // 验证传入的data是不是数组，如果不是则会报错
        //  loadding:React.PropTypes.bool,  // 验证loadding是否为true
        //  loadData:React.PropTypes.func, // 验证loadData是否为函数类型
        // }
    }
    state = {
        loading:false
    }
    loadingCheck(newProps){
        return newProps.loading;
    }
    render() {
        const EnhancePage2 = withLoading(this.loadingCheck)(Page2);
        const EnhancePage3 = withCopy("h3")(Page3);
        return (
            <div>
                <EnhancePage3 />
                我是一个普通组件
                <Page1 />
                <EnhancePage2 loading={this.state.loading} />
                {this.state.textData}
                <br />
                <br />
                <button onClick={()=>{this.setState({loading:!this.state.loading})}}>刷新一下啊</button>
            </div>
        );
    }
}

const enhance = recompact.compose(withHeader);
const WithLoading = enhance('Demo')(Demo);

export default WithLoading;