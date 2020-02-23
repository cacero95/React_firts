import React, { Component } from 'react';
import './App.css';
import Ninjas from './ninja';
import AddNinja from './addNinja';

class App extends Component {
  state = {
    ninjas:[
      {
        name:'Andres',
        age:25,
        belt:'black',
        id:1
      },
      {
        id:2,
        name:'santiago',
        age:12,
        belt:'blue'
      }
    ]
  };
  
  addNinja = (ninja)=>{
    let find = this.state.ninjas.findIndex((element)=>{
      return ninja.name === element.name
    });
    ninja["id"] = this.state.ninjas[this.state.ninjas.length-1].id+1;
    // los ... funciona para convertir los elementos del arreglo state a objetos que se 
    // integraran, al principio del nuevo arreglo, lo cual permite oviar el metodo push
    console.log(find);
    let ninja_array = find == -1 ? [...this.state.ninjas,ninja] : this.state.ninjas;
    console.log(ninja_array);
    this.setState(
      {
        ninjas:ninja_array
      }
    );
    console.log(this.state);
    this.render();
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('update');
    console.log(prevProps,prevState);
  }
  delete=(name)=>{
    let new_array = this.state.ninjas.filter(element=>{
      return element.name !== name
    })
    this.setState({
      ninjas:new_array
    });
  } 
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas list={this.state.ninjas}></Ninjas>
        <AddNinja addNinja={this.addNinja} delete={this.delete}></AddNinja>
      </div>
    );
  }
}

export default App;
