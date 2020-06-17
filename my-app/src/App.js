import React from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import List from './components/List';
import Buttons from './components/Buttons';

class App extends React.Component {
  state = {
    todos: [],
    filter: 'All',
  }

  handleTodo = (value) => {
    const todos = [
      ...this.state.todos,
      {
        id: Date.now(),
        value,
        completed: false,
      }
    ]
    this.setState({
      todos: todos,
    })
  }

  toggleCompleted = (id) => {
    const todos = this.state.todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item
    });

    this.setState({
      todos: todos,
    })
  }

  applyFilter = (filter) => {
    this.setState({
      filter,
    })
  }

  filterTodos() {
    const { filter: filterBy, todos } = this.state;
    switch (filterBy) {
      case 'Active': {
        return todos.filter(({ completed }) => !completed);
      }
      case 'Completed': {
        return todos.filter(todo => todo.completed)
      }
      default: return todos

    }
  }

  clearTodos = () => {
    this.setState({
      todos: this.state.todos.filter(({ completed }) => !completed)
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App" >
        <ToDoInput addTodo={this.handleTodo} />
        <List toggleCompleted={this.toggleCompleted} items={this.filterTodos(todos)} />
        <Buttons filterBy={this.applyFilter} clearCompleted={this.clearTodos} />
      </div>
    );
  }
}

export default App;
