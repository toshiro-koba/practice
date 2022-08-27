import React, { useState } from 'react'
import './App.css'

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
      <div className='input-area'>
        <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={index} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>

      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={index} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
