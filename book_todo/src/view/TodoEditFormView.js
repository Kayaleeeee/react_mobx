import React, { PureComponent } from "react";
import { Form, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoEditFormView extends PureComponent {
  //
  constructor(props) {
    super(props);
  }

  render() {
    //
    const {
      todo,
      onSetTodoProp,
      onAddTodo,
      onRemoveTodo,
      onModifyTodo,
    } = this.props;

    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            value={todo && todo.title ? todo.title : ""}
            onChange={(e) => onSetTodoProp("title", e.target.value)}
          />
          <Form.Input
            fluid
            label="Contents"
            placeholder="Contents"
            value={todo && todo.contents ? todo.contents : ""}
            onChange={(e) => onSetTodoProp("contents", e.target.value)}
          />
          <Form.Field>
            <label>Start Date</label>
            <DatePicker
              showTimeSelect
              selected={
                todo && todo.startDate ? new Date(todo.startDate) : null
              }
              dateFormat="yyyy-MM-dd hh:mm"
              timeFormat="hh:mm"
              timeIntervals={15}
              onChange={(date) => onSetTodoProp("startDate", date.valueOf())}
            />
          </Form.Field>
          <Form.Field>
            <label>End Date</label>
            <DatePicker
              showTimeSelect
              selected={todo && todo.endDate ? new Date(todo.endDate) : null}
              dateFormat="yyyy-MM-dd hh:mm"
              timeFormat="hh:mm"
              timeIntervals={15}
              onChange={(date) => onSetTodoProp("endDate", date.valueOf())}
            />
          </Form.Field>
        </Form.Group>
        <Button primary onClick={onAddTodo}>
          Add
        </Button>
        <Button primary onClick={onRemoveTodo}>
          Remove
        </Button>
        <Button primary onClick={onModifyTodo}>
          Modify
        </Button>
      </Form>
    );
  }
}

export default TodoEditFormView;
