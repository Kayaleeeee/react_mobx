import React, { Component } from "react";
import BookListView from "../view/BookListView";
import { observer, inject } from "mobx-react";

@inject("bookStore")
@observer
class BookListContainer extends Component {
  //처음 화면에 들어오면 목록뿌려주도록 데이터를 전달받아옴
  //component에서 view를 다 로드하고 나면,
  componentDidMount() {
    const { bookStore } = this.props;
    // if (bookStore) {
    bookStore.bookList();
    //}
  }

  onSelect = (book) => {
    const { bookStore } = this.props;
    bookStore.select(book);
  };

  render() {
    const { bookStore } = this.props;

    return <BookListView books={bookStore._books} onSelect={this.onSelect} />;
  }
}

export default BookListContainer;
