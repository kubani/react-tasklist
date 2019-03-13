import React from 'react';
import TaskList from './TaskList';

// This might as well be my App.js

class InputTask extends React.Component {
  state = { inputValue: '', items: [], clickedItem: null} // Data that is being altered

  // Testing the on-click state change
  onItemClick = (tap) => {
    this.setState({ clickItem: tap})
  }
  onTaskSubmit = event => {
    event.preventDefault();
    console.log(this.state.inputValue)
  }

  onInputChange = event => {
    this.setState({ inputValue: event.target.value})
  }
  // User tasks get captured and put into an array of tasks called 'items'
  myTasks = () => {
    this.setState({ items: [...this.state.items, this.state.inputValue] })
  }
  // Why does the <TaskList /> component not render when put outside of the <form></form>?
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onTaskSubmit} className="ui form">
          <div>
            <label>Enter Task...</label>
            <input onChange={ this.onInputChange } value={ this.state.inputValue }></input>
          </div>
          <button className="ui button" type="submit" onClick={ this.myTasks }>Add Task</button>
        </form>
        <TaskList items={ this.state.items } onItemClick={ this.onItemClick } />
      </div>
    );
  }
}

export default InputTask;