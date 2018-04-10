import React from "react";

class ToDoItem extends React.Component {
  render() {
    const todo = this.props.data;

    return (
      <tr className="todo-item">
        <td>
          <div className="custom-control custom-checkbox text-left">
            <input
              type="checkbox"
              className="custom-control-input checkbox"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              checked={todo.done}
              onChange={this.props.toggleToDoDone}
            />
            {/* <label
              className={`custom-control-label ${todo.done ? "done" : ""}`}
              htmlFor={`todo-done-${todo.uuid}`}
            >
              {todo.text}
            </label> */}
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className={`my-item form-control ${todo.done ? "done" : ""}`}
            defaultValue={todo.text}
            onChange={e => {
              this.props.editToDo(todo.uuid, e.target.value);
            }}
          />
        </td>
        <td className="text-right">
          <span
            className="icon-remove"
            onClick={e => {
              this.props.removeToDo(todo.uuid);
            }}
          >
            remove
          </span>
        </td>
      </tr>
    );
  }
}

export default ToDoItem;
