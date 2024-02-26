import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Col, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div >
        <Row className='mt-5'>
          <Col md={3}></Col>

          <Col md={6} className='d-flex  flex-column border border-2 shadow bg-dark rounded p-2'>
            <div className="mb-4">
              <h1 className='mb-2 text-light fw-bolder'>What's the Plan for Today?</h1>

            </div>
            <TodoForm onSubmit={addTodo} />
            <TrackVisibility>
      {({ isVisible }) =>



            <Todo className={isVisible ? "animate__animated animate__backInUp" : ""}
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />

      }
      </TrackVisibility>
          </Col>

          <Col md={3}></Col>

        </Row>
      </div>
    </>
  );
}

export default TodoList;
