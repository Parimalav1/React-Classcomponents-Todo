import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const errands = [
  {
    task: 'Online shopping for dining table',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Buy a computer desk',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Organize house',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Decor house',
    id: 1528817084359,
    completed: false
  },
  {
    task: 'Bake cookies',
    id: 1528817077288,
    completed: false
  },
  {
    task: 'Join kids in online classes',
    id: 1528817084360,
    completed: false
  },
  {
    task: 'Get some school stationary for kids',
    id: 1528817077289,
    completed: false
  },
  {
    task: 'Gardening',
    id: 1528817084361,
    completed: false
  }
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {//place to store your state in this component.
      errands: errands
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addErrand = (evt, thing) => {//change handlers
    evt.preventDefault();
    const newErrand = {
      task: thing,
      id: Date.now(),
      completed: false
    };
    this.setState({
      errands: [...this.state.errands, newErrand]
    });
  };

  toggleErrand = (taskId) => {
    this.setState({
      errands:this.state.errands.map(x => {//mapping
        if (taskId === x.id) {//matching
          return {
            ...x,
            completed: !x.completed
          }
        }
        return x;
      })
      // console.log('Done');
    });
  };

  clearCompleted = evt => {
    evt.preventDefault();
    // if task is completed (task.completed is true) then filter out
    this.setState({
      errands: this.state.errands.filter(x => !x.completed)//removing completed errands
    });
  };

  render() {
    console.log('Done');
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to Todo App!</h2>
        </div>
        <div>
        <TodoForm 
        addErrand={this.addErrand} 
        clearCompleted={this.clearCompleted} />
        <TodoList 
          errands={this.state.errands}
          toggleErrand={this.toggleErrand} />
        {/* clearCompleted={this.clearCompleted} /> */}
        </div>
      </div>
    );
  }
}

export default App;
