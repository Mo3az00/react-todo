import React from "react";
import ToDoForm from "./ToDoForm";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ToDoForm />
        <div className="alert alert-info">
          This is where the ToDo items will be.
        </div>
      </div>
    );
  }
}

export default ToDoList;
