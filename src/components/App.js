import React from 'react';
//import MyTasks from './MyTasks';
//import AddTasks from './AddTasks'
//import DoneList from './DoneList';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      inputValue: '',
      items: []
    }
  }
  
  onInputChange = (event) => {
    //console.log('event = 9input0');
    //console.log(event);
    this.setState({ inputValue: event.target.value });
  }

  addTasks = (event) => {
    // console.log("event =");
    // console.log(event.target.value);
    // console.log('inputValue = ');
    // console.log(this.state.inputValue);
    //let taskList = this.state.items;
    //taskList.push(event);
    this.setState({items: [...this.state.items, this.state.inputValue]});
  
  }

	render() {
		return (
			<div className="ui container">
        <input onChange={ this.onInputChange } value={this.state.inputValue} type="text" />
        <button onClick={ this.addTasks }>Add Task</button>
       <ul>{this.state.items.map((thatValue)=> <li>{thatValue}</li>)}</ul> 
      </div>
		);
	}
}

export default App;
