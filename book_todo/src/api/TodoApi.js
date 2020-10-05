import axios from "axios";

class TodoApi {
  URL = "/api/todos/"; //proxy : http://localhost:9001/api/todos;

  //todoCreate(todoApiModel): URL Post
  todoCreate(todo) {
    let todoJson = todo;
    console.log(todoJson);
    return axios
      .post(this.URL, todoJson)
      .then((response) => (response && response.data) || null);
  }

  //todoDetail(todoNum) : URL Get : Todo
  todoDetail(todoNum) {
    return (
      axios
        .get(this.URL + `${todoNum}/`)
        //if response가 있으면, reponse.data를 리턴 , 없으면 null
        .then((response) => (response && response.data) || null)
    );
  }

  //todoList(): URL get : [Todo]
  todoList() {
    return axios
      .get(this.URL)
      .then((response) => (response && response.data) || null);
  }

  //todoModify(todoApiModel) : URL put
  todoModify(todoApiModel) {
    let todoJson = JSON.stringify(todoApiModel);

    return (
      axios
        .put(this.URL, todoJson)
        //현재 URL로 바디에 todoJson전달
        .then((response) => (response && response.data) || null)
    );
  }

  //todoDelete(todoNum) : URL Delete
  todoDelete(todoNum) {
    return axios
      .delete(this.URL + `${todoNum}/`)
      .then((response) => (response && response.data) || null);
  }
}

export default TodoApi;
