import { observable, computed, action } from "mobx";
import TodoApi from "../api/TodoApi";

//1.Mobx Store 클래서 선언
class TodoStore {
  todoApi = new TodoApi();
  //2.관리해야하는 state객체 @observable 선언 및 초기화
  @observable
  todos = [];

  @observable
  todo = {};

  @observable
  errorMessage = "";

  //3.state 데이터 리턴 - @computed get로 함수 구현
  @computed
  get getTodo() {
    return this.todo ? { ...this.todo } : {};
  }

  @computed
  get getTodos() {
    return this.todos ? this.todos.slice() : [];
  }

  //4.state 데이터 변경 @action 함수 구현
  @action
  setTodoProp(name, value) {
    this.todo = {
      ...this.todo,
      [name]: value,
    };
  }

  @action
  async addTodo() {
    // this.todos.push(JSON.stringify(todoApiModel));
    let result = this.todoApi.todoCreate(this.todo);
    this.todos = await this.todoApi.todoList();
    if (result == null) {
      this.errorMessage = "Error Occured while creating new todo";
    }
  }

  @action
  async removeTodo(todoNum) {
    //todos에 id인 todo 삭제
    this.todos = this.todos.filter((element) => element.todoNum !== this.todo);
    this.todo = {};

    let result = this.todoApi.todoDelete(todoNum);
    if (result == null) {
      this.errorMessage = `Error : There is no Todo with todoNum ${todoNum} `;
    }
  }

  @action
  async modifyTodo(todoApiModel) {
    //todos에서 local todo.todoNum와 같은 객체 수정
    this.todos = this.todos.map((element) =>
      element.todoNum === todoApiModel.todoNum
        ? JSON.stringify(todoApiModel)
        : element
    );
    this.todo = {};

    let result = this.todoApi.todoModify(todoApiModel);
    if (result == null) {
      this.errorMessage = `Error : cannot modify Todo No.${todoApiModel.title}`;
    }
  }

  //
  @action
  async selectTodo(todoNum) {
    console.log("selectTodo");
    console.log(todoNum);
    //todos에서 id가 같은 todo객체 변경
    // this.todo = this.todos.find((element) => element.id === id);
    this.todo = await this.todoApi.todoDetail(todoNum);
    console.log(this.todo);
    if (this.todo == null) {
      this.errorMessage = `Error : There is no Todo named ${todoNum}`;
    }
  }

  @action
  async selectAll() {
    console.log("select all");
    const todos = await this.todoApi.todoList();
    console.log(todos);
    this.todos = todos;

    if (this.todos == null) {
      return "empty list";
    }
  }
}

//5.객체 생성해서 export
export default new TodoStore();
