import React, { useState } from 'react'
import './App.css'
import { IncompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos'
import { InputTodo } from './components/InputTodo'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText = e => setTodoText(e.target.value)

  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickComplete = index => {
    const targetTodo = incompleteTodos[index]
    const newCompleteTodos = [...completeTodos, targetTodo]
    setCompleteTodos(newCompleteTodos)

    const deleteCount = 1
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, deleteCount)
    setIncompleteTodos(newIncompleteTodos)
  }

  const onClickDelete = index => {
    const deleteCount = 1
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, deleteCount)
    setIncompleteTodos(newTodos)
  }

  const onClickBack = index => {
    const targetTodo = completeTodos[index]
    const newIncompleteTodos = [...incompleteTodos, targetTodo]
    setIncompleteTodos(newIncompleteTodos)

    const deleteCount = 1
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, deleteCount)
    setCompleteTodos(newCompleteTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}

export default App
