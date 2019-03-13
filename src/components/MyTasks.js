import React from "react";

class MyTasks extends React.Component {
	state = { items: [] }

// addToList = event => {

	addToList(event) {
		if (this.user_value !== "") {
			let newTask = {
				text: this.user_value,
				key: Date.now()
			};

	this.setState((lastState) => {
		return {
				items: lastState.items.concat(newTask)
			};
		});
	}

	this.user_value = "";
}

	render(``)
// }
// const addTasks = (task) => {
// 		return <li onClick key={task.key}>{task.text}</li>
// }

// const MyTasks = props => {
// 	<div className="header">
// 		<form onSubmit={this.addToList}>
// 			<input placeholder="Enter a Task Here...">
// 			</input>
// 			<button type="submit">Add Task</button>
// 		</form>
// 	</div>
// }
// const showItems = (list) => {
// 		const theLists = this.props.thelists;
// 		const myItems = theLists.map(this.addTasks);
// 		return (
// 			<ul className="myList">
// 				{myItems}
// 			</ul>
// 		);
// 	}
	}

export default MyTasks;