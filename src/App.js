import React, {Component} from 'react';
import Todos from './todos'
import Addtodo from './Addtodo'
import Todos1 from './Todos1'
import Addtodo1 from './Addtodo1'
import lahs from './lahs.jpeg'

class App extends Component{
  state =  {
    todos : [
      // {id : 1, content : "full house 1 -  priyansh !"},
      // {id : 2, content : "first line - gautam !"}
    ],
    todos1 : [
      // {id : 1, content : "last line!"},
      // {id : 2, content : "bamboo !"},
      // {id : 3, content : "corners!"},
      // {id : 4, content : "middle line!"}
    ]
  }
  deletetodo = (id) => {
    let todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos : todos
    })
  } 
  deletetodo1 = (id) => {
    let todos1 = this.state.todos1.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos1 : todos1
    })
  } 
  addtodo = (todo) =>{
    let todos = [...this.state.todos, todo]
    this.setState({
      todos : todos
    })
  }
  addtodo1 = (todo) =>{
    let todos1 = [...this.state.todos1, todo]
    this.setState({
      todos1 : todos1
    })
  }
  render(){
  return (
    <div className="todo-app">
      <img src={lahs} alt="lahs-img"></img>
      <h1 className="todo-heading center red-text">
        Tambola
      </h1>
      <h2 className="todo-heading center blue-text">
        Winner List
      </h2>
      <div className="Todo-List container">
        <Todos todos={this.state.todos} deletetodo={this.deletetodo} />
        <Addtodo addtodo={this.addtodo} />
      </div>
      <h2 className="todo-heading center blue-text">
          Awards Left
      </h2>
      <div className="Todo-List container">
        <Todos1 todos1={this.state.todos1} deletetodo1={this.deletetodo1} />
        <Addtodo1 addtodo1={this.addtodo1} />
      </div>
    </div>
  );
  }
}

export default App;
