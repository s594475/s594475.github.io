import React, {Component} from 'react';
import CardsList from './CardsList.js';
let Card=[
      {title:'第一天',data:'2016.7.1'},
      {title:'第二天',data:'2016.7.2'},
      {title:'第三天',data:'2016.7.3'},
      {title:'第四天',data:'2016.7.4'}
    ]
class Cards extends Component {
  render(){
    var AllCards =[];
    for(var i = 0;i<Card.length;i++){
      let j=i+1;
      AllCards.push(
        <CardsList title={Card[i].title} data={Card[i].data} index={j} key={i}/>
      )
    };
    return(
      <div>
        {AllCards}
    </div>
    )
  }
}

export default Cards;
