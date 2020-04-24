/*
*https://segmentfault.com/a/1190000010371752
* react 高阶组件学习
*/
import React, { Component } from "react"
import {Button} from "antd"
import {withHeader,withLoading} from "./WithHeader"
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
                 sdasd,asld,asldmasldmasldmasldmasldwiojriwehreuh hfjfhwueh
             </div>
        );
    }
}

class Demo extends Component {
    state = {
        loading:false
    }
    loadingCheck(newProps){
        return newProps.loading;
    }
    render() {
        const EnhancePage2 = withLoading(this.loadingCheck)(Page2);
        return (
            <div>
                我是一个普通组件
                <Page1 />
                <EnhancePage2 loading={this.state.loading} />
                {this.state.textData}
                <br />
                <br />
                <button onClick={()=>{
                    this.setState({loading:!this.state.loading})
                    }}>
                刷新一下啊
                </button>
            </div>
        );
    }
}

const enhance = recompact.compose(withHeader);
const WithLoading = enhance('Demo')(Demo);

export default WithLoading;