import React from "react";

const TodoLi = (props) => {
  console.log(props);
  const onClickRemoveButton = () => {
    props.handleRemovedData(props.todo);
  };

  return (
    <li>
      <span>{props.todo.title}</span>
      <span className="btn-container">
        <a href="#" onClick={onClickRemoveButton}>삭제</a>
      </span>
    </li>
  );
};

export default TodoLi;