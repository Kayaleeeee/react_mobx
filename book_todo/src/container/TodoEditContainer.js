import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoEditFormView from "../view/TodoEditFormView";
import generateId from "../IDGenerator";

@inject("TodoStore")
@observer
class TodoEditContainer extends Component {
  onSetTodoProp = (name, value) => {
    //TodoStore의 setTodoProp(name, value) 호출
    //const {TodoStore} = this.props;
    this.props.TodoStore.setTodoProp(name, value);
  };

  onAddTodo = () => {
    //TodoStore의 addTodo(todo) 호출
    let todo = this.props.TodoStore.todo;
    todo = { ...todo, id: generateId(5) };
    this.props.TodoStore.addTodo(todo);
  };

  onRemoveTodo = () => {
    let todo = this.props.TodoStore.todo;
    this.props.TodoStore.removeTodo(todo.id);
  };

  onModifyTodo = () => {
    let todo = this.props.TodoStore.todo;
    this.props.TodoStore.modifyTodo(todo);
  };

  render() {
    const { todo } = this.props.TodoStore;
    // const todo = this.props.TodoStore; //todo->TodoStore
    return (
      <TodoEditFormView
        todo={todo}
        onSetTodoProp={this.onSetTodoProp}
        onAddTodo={this.onAddTodo}
        onRemoveTodo={this.onRemoveTodo}
        onModifyTodo={this.onModifyTodo}
      />
    );
  }
}

export default TodoEditContainer;
