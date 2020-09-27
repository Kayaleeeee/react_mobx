import { observable, computed, action } from "mobx";
import BookApi from "../api/BookApi";

// import Books from '../Books';

class BookStore {
  constructor() {
    this.bookApi = new BookApi();
  }

  @observable books = [];
  @observable book = null;
  @observable errorMessage = "";

  @computed get _book() {
    return this.book ? { ...this.book } : {};
  }

  @computed get _books() {
    return this.books ? this.books.slice() : [];
  }

  @computed get getErrorMessage() {
    return this.errorMessage ? "true" : "false";
  }

  @action select = (book) => {
    this.bookDetail(book.ISBN);
  };

  @action
  async bookList() {
    this.books = await this.bookApi.bookList();
    // let jsonResult = this.bookApi.bookList();
    // console.log(jsonResult);
  }

  @action
  async bookDetail(ISBN) {
    this.book = await this.bookApi.bookDetail(ISBN);
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
