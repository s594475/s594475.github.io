import React,{Component} from 'react';
class Button extends Component{
  getStyles(){
    return{
      root:{
        display:'block',
        color: '#fff',
        backgroundColor: this.props.bg,
        borderColor: '#2db7f5',
        fontSize: '80px',
        width:'300px',
        height:'100px',
        borderRadius: '56px',
        boxShadow:'20px 20px 20px #000',
        marginLeft:'500px'
      }
    }
  }
  render(){
    const styles=this.getStyles();
    return(
      <button style={styles.root}>{this.props.title}</button>
    )
  }
}
Button.defaultProps = {//设置默认的值，默认样式
  title:"我是锅盖儿",
  bg:"#daba55"
};
Button.propTypes = {//设置的值不对应，出现报错信息
  title:React.PropTypes.string.isRequired,
  bg:React.PropTypes.string.isRequired
};
export default Button;
