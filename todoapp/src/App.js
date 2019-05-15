import React, { Component } from 'react';
import Todos from './todos';
import AddForm from './AddForm';

class App extends Component{
  state ={
    todos : [
      {id:1, content:"Buy some milk"},
      {id:2, content:"Play some mario"}
    ]
  }

  deleteTodos =(id) =>{
    const todos = this.state.todos.filter((todo)=>{
      return id !== todo.id
    })

    this.setState({
      todos
    })
  }

  addTodo =(todo) =>{
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
      <h1 className="center blue-text"> To do's</h1>
       <Todos todos={this.state.todos} deleteTodos = {this.deleteTodos} />
       <AddForm addTodo ={this.addTodo}/>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
