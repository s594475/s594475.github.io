import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './component/button.js';
let btnProps = {
  title:"来至外部变量",
  bg:"blue"
}
let btnProps2 = {
  title:"duo变量",
  bg:"deeppink"
}
class App extends Component {
  render(){
    let btns=[
      <Button key="1"/>,<Button key="2"/>,<Button key="3"/>,<Button key="4"/>
    ]
    return(
      <div>
          <p>hello{this.props.name}</p>
          // <Button title="props" bg="red"/>//如果属性多，就在外面定义一个变量对象

          <Button title={btnProps.title} bg={btnProps.bg}/>
          <Button {...btnProps2}/>
          {btns}
    </div>
    )
  }
}

ReactDOM.render(
  <App name="song" where="china"/>,
  document.getElementById('app'));
