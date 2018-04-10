import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const uuid = require("uuid/v4");

class ToDoList extends React.Component {
  state = {
    toDoItems: {}
  };

  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text,
      done: false
    };

    // cloning the current state
    const toDoItems = { ...this.state.toDoItems };

    // changing the state
    toDoItems[todo.uuid] = todo;

    // updating the state
    this.setState({
      toDoItems
    });
  };

  toggleToDoDone = event => {
    const checkbox = event.target;
    const toDoId = checkbox.value;

    const toDoItems = { ...this.state.toDoItems };
    toDoItems[toDoId].done = checkbox.checked;

    this.setState({
      toDoItems
    });
  };

  removeToDo = uuid => {
    const toDoItems = { ...this.state.toDoItems };
    delete toDoItems[uuid];

    this.setState({
      toDoItems
    });
  };

  editToDo = (uuid, text) => {
    const toDoItems = { ...this.state.toDoItems };
    toDoItems[uuid].text = text;

    this.setState({
      toDoItems
    });
  };

  render() {
    return (
      <div className="todo-list">
        <ToDoForm addToDo={this.addToDo} />
        <table className="todo-items table">
          <tbody>
            {Object.keys(this.state.toDoItems).map(uuid => (
              <ToDoItem
                key={`todo-item-${uuid}`}
                data={this.state.toDoItems[uuid]}
                // itemData={this.state.toDoItems[uuid]}
                toggleToDoDone={this.toggleToDoDone}
                removeToDo={this.removeToDo}
                editToDo={this.editToDo}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToDoList;
