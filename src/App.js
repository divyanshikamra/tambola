import React, {Component} from 'react';
import Todos from './todos'
import Addtodo from './Addtodo'

class App extends Component{
  state =  {
    todos : [
      {id : 1, content : "Buy some chocolates !"},
      {id : 2, content : "complete the todo app !"}
    ]
  }
  deletetodo = (id) => {
    let todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos
    })
  } 
  addtodo = (todo) =>{
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render(){
  return (
    <div className="todo-app">
      <h1 className="todo-heading center blue-text">
          Todo's
      </h1>
      <div className="Todo-List container">
        <Todos todos={this.state.todos} deletetodo={this.deletetodo} />
        <Addtodo addtodo={this.addtodo} />
      </div>
    </div>
  );
  }
}

export default App;
