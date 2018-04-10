import React from "react";

class ToDoForm extends React.Component {
  newItemText = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const text = this.newItemText.current.value.trim();
    this.props.addToDo(text);
    event.currentTarget.reset();

    // console.log(this.newItemText);
    // console.log(`Create new item ${this.newItemText.current.value}`);
  };

  render() {
    return (
      <form className="input-group my-3" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="text"
          placeholder="Add a new todo-item ..."
          ref={this.newItemText}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Add item
          </button>
        </div>
      </form>
    );
  }
}

export default ToDoForm;
