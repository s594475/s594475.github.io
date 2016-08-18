import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import Search from './Search';
import BlogCard from './BlogCard.js';
import CircularProgress from 'material-ui/CircularProgress';

//https://raw.githubusercontent.com/s594475/peter/master/posts/index.json
class List extends Component {
  constructor(){
    super();
    this.state={
      posts: {},
      text:'',
      wait:true
    }
  }
  cardSearch(x){
  this.setState({text:x})
}
  componentDidMount(){
    let address = `https://raw.githubusercontent.com/s594475/peter/master/posts/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {
      this.setState({
        posts: res.data,
          wait:false
      });
    });
  }

  render(){
    // console.log(Cards.length);
    let x = <CircularProgress size={2} style={{marginLeft:'50%'}}/>;
    var blogCards = [];
    if (this.state.text=='') {
      map((b) =>  {
          blogCards.push(
            <BlogCard title={b.title} date={b.created_at } index={b.index} url={b.name} key={Math.random()}/>
          )
        },
        this.state.posts)
      }else {
      for (var i = 0; i < this.state.posts.length; i++) {
        let thisPost = this.state.posts[i];
        if (thisPost.title.toLowerCase().indexOf(this.state.text)!= -1) {
          blogCards.push(<BlogCard title={thisPost.title} date={thisPost.created_at} index={thisPost.index} key={Math.random()} url={thisPost.name} />)
        }
      }
    }
    return(
      <div>
        <Search change={this.cardSearch.bind(this)}/>
          {this.state.wait ? x :
          <div>

              {blogCards}
          </div>
        }
      </div>
    )
  }
}

export default List;
