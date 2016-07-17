import React, { Component } from 'react';
class Button extends Component {
  getStyles() {
       return {
         button: {
           color: '#fff',
           backgroundColor: '#2db7f5',
           borderColor: '#2db7f5',
           padding: '4px 15px 5px 15px',
           fontSize: '80px',
           width:'300px',
           height:'100px',
           borderRadius: '56px',
           boxShadow:'20px 20px 20px #000'
         }
       }
     }
  render(){
const styles = this.getStyles();
    return (

      <button style={styles.button} href="http://es6.ruanyifeng.com/">click</button>
    );
  }
}

export default Button;
