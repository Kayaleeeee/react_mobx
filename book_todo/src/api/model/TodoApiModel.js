class TodoApiModel {
  todoNum = 0;
  title = "";
  contents = "";
  startDate = "";
  endDate = "";

  constructor(todoNum, title, contents, startDate, endDate) {
    this.todoNum = todoNum;
    this.title = title;
    this.contents = contents;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default TodoApiModel;
