import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/TodoList';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {

  return (
    <>
      <Header/>
      <TodoList />
      
    </>
  )
}

export default App
