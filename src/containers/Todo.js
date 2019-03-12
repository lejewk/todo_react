import React from "react";
import Title from "../components/Title";
import AddLi from "../components/AddLi";
import TodoLi from "../components/TodoLi";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todos: []
    };

    this.handleAddedDataFn = this.handleAddedData.bind(this);
    this.handleRemovedDataFn = this.handleRemovedData.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    fetch("http://localhost:8080/todos")
    .then(response => response.json())
    .then(result => {
      this.setState({
          todos: result
      });
    });
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleAddedData(todo) {
    this.setState((prevState) => {
      const todos = prevState.todos;
      todos.push(todo);

      return {
        todos: todos
      };
    });   
  }

  handleRemovedData(todo) {
    this.setState((prveState) => {
      const todos = prveState.todos;
      const index = todos.indexOf(todo);
      todos.splice(index, 1);

      return {
        todos: todos
      };
    });
  }

  render() {
    console.log("render");
    const todoLi = this.state.todos.map(todo => {
      return (
        <TodoLi todo={todo} key={"todo" + todo.id} handleRemovedData={this.handleRemovedDataFn}/>
      );
    });

    return (
      <div className="container">
        <Title text={this.state.text}/>
        <AddLi handleAddedData={this.handleAddedDataFn}/>
        <hr/>
        <ul>
          {todoLi}
        </ul>
      </div>
    );
  }
}

export default Todo;