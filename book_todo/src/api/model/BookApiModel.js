class BookApiModel {
  ISBN = "";
  title = "";
  author = "";
  publisher = "";
  price = 0.0;
  imgUrl = "";
  introduce = "";

  constructor(ISBN, title, author, publisher, price, imgUrl, introduce) {
    this.ISBN = ISBN;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
    this.imgUrl = imgUrl;
    this.introduce = introduce;
  }
}

export default BookApiModel;
