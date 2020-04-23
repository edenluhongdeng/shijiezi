import React, { Component } from "react"
import withHeader from "./WithHeader.jsx"
const seflHeader = (title) => (WrappedComponent) => class HOC extends Component {
    render() {
      return <div>
        <div className="demo-header">
          {title
            ? title
            : '我是标题'}
        </div>
        <WrappedComponent {...this.props}/>
      </div>
    }
  }
 
  class Page1 extends Component {
    constructor(props){
        super(props)
        console.log(props.text);
    }
    render() {
        return (
            <div>
                Page1
            </div>
        );
    }
}
class Page2 extends Component {
    render() {
        return (
            <div>
               Page2
            </div>
        );
    }
}
class Demo extends Component {
    render() {
        const EnhancePage1 = withHeader('Demo1')(Page1);
        const EnhancePage2 = withHeader('Demo1')(Page2);
        return (
            <div>
                我是一个普通组件
                <EnhancePage1 />
                <Page2/>
                <EnhancePage2 />
            </div>
        );
    }
}

export default Demo;