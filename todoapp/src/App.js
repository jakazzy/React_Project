import React, { Component } from 'react';

class App extends Component{
  state ={
    todos : [
      {id:1, content:"Buy some milk"},
      {id:2, content:"Play some mario"}
    ]
  }
  render(){
    return(
      <div className="App">
        I am
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
