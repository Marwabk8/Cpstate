import React from 'react';
import './App.css';
import Person from './Person';



 class App extends React.Component{

  state ={bt:true,count:0}

  toggleshow=()=>{ this.setState({bt: ! this.state.bt})   } 

  componentDidMount () {
    this.myInterval= setInterval(() => {this.setState ({count:this.state.count +1}) 
    },1000);
  }


 render() {
  
  return (
  <div >
    <h3>count:{this.state.count}</h3> 
<button className='buton' onClick={this.toggleshow}>{this.state.bt ? "hide": "show"} </button> 
{this.state.bt && <Person></Person> }


  </div>

  )
 }
 }

 export default App;