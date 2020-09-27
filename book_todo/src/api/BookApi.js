import axios from "axios";

class BookApi {
  URL = "/api/books/";

  bookList() {
    return axios
      .get(this.URL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  }

  //   bookDetail(ISBN) {}
  bookDetail(ISBN) {
    return axios
      .get(this.URL + `${ISBN}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  }

  //   bookCreate(BookApiModel) {}
  bookCreate(bookApiModel) {
    return axios
      .post(this.URL, bookApiModel)
      .then((response) => (response && response.data) || null);
  }

  bookModify(bookApiModel) {
    return axios
      .put(this.URL, bookApiModel)
      .then((response) => (response && response.data) || null);
  }

  //   bookDelete(ISBN) {}
  bookDelete(ISBN) {
    return axios
      .delete(this.URL + `${ISBN}`)
      .then((response) => (response && response.data) || null);
  }

  //   search(searchType, keyword) {}
  search(searchType, keyword) {
    return axios
      .get(this.URL + `${searchType}/${keyword}`)
      .then((response) => (response && response.data) || null);
  }
}

export default BookApi;
