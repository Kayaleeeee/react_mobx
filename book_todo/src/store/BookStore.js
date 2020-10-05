import { observable, computed, action } from "mobx";
import BookApi from "../api/BookApi";

// import Books from '../Books';

class BookStore {
  bookApi = new BookApi();

  @observable books = [];
  @observable book = null;
  @observable errorMessage = "";

  @computed get _book() {
    return this.book ? { ...this.book } : {};
  }

  @computed get _books() {
    console.log(this.books);
    return this.books ? this.books.slice() : [];
  }

  @computed get getErrorMessage() {
    return this.errorMessage ? this.errorMessage : "fail";
  }

  @action select = (book) => {
    this.findByBook(book.ISBN);
  };

  @action
  async bookList() {
    // this.books = await this.bookApi.bookList();
    // let jsonResult = this.bookApi.bookList();
    // console.log(jsonResult);

    let result = await this.bookApi.bookList();
    // let jsonResult = this.bookApi.bookList();
    // console.log(jsonResult);

    //파싱 형태를 맞추기위해 result가 잘 파
    //result -> jSON 객체로 정규화 -> Books 객체로 파싱
    if (result instanceof Array) {
      this.books = JSON.parse(JSON.stringify(result));
    } else if (result) {
      this.errorMessage = result("message");
    }
  }

  @action
  async bookDetail(ISBN) {
    this.book = await this.bookApi.bookDetail(ISBN);
  }

  @action
  async findByBook(ISBN) {
    this.book = await this.bookApi.bookDetail(ISBN);
    console.log(this.book);
  }

  @action
  async bookCreate(bookApiModel) {
    let result = this.bookApi.bookCreate(bookApiModel);
    if (result == null) {
      this.errorMessage = "Create Error";
    }
  }

  @action
  async bookDelete(ISBN) {
    let result = this.bookApi.bookDelete(ISBN);
    if (result == null) {
      this.errorMessage = `${ISBN}` + "delete Error";
    }
  }

  @action
  async bookUpdate(bookApiModel) {
    let result = this.bookApi.bookUpdate(bookApiModel);
    if (result == null) {
      this.errorMessage = `${bookApiModel.ISBN}` + "update Error";
    }
  }

  @action
  async search(searchType, keyword) {
    this.books = this.bookApi.search(searchType, keyword);
  }
}

export default new BookStore();
