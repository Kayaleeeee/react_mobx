import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class BookDetailsView extends Component {
  render() {
    const { book } = this.props;
    console.log(book);
    console.log(book.title);

    return (
      <Card>
        <Image src={book.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{book.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              {book.author} &nbsp; {book.publisher}
            </span>
            <br></br>
            <span className="date">{book.price}</span>
          </Card.Meta>
          <Card.Description>{book.introduce}</Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    );
  }
}

export default BookDetailsView;
