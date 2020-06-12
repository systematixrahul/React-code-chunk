import React, { useState, useEffect, createContext, useContext } from 'react'

function ToDoDetail({addTodo}) {
 
  const [task, setTask] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask("");
  };



  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            task={task}
            onChange={e => setTask(e.target.task)}
          />
        </form>
      </div>
    </div>
  );

}


export default ToDoDetail;