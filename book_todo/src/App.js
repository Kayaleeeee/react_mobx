import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import BookMain from "./view/menu/BookMain";
import TodoMain from "./view/menu/TodoMain";
import { observer } from "mobx-react";
import { Component } from "react";

@observer
class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const activeItem = this.state.activeItem;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="book"
            active={activeItem === "book"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="todo"
            active={activeItem === "todo"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
            {activeItem === "home" && <h1>WELLCOME!</h1>}
            {activeItem === "book" && <BookMain/>}
            {activeItem === "todo" && <TodoMain/>}
            {activeItem === "login" && <h1>로그인</h1>}        
        </Segment>
      </div>
    );
  }
}

export default App;
