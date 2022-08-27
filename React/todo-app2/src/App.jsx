import React, { useState } from 'react'
import './App.css'

export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [incompleteTodos, setIncompleteTodos] = useState(['a', 'b'])
  // eslint-disable-next-line no-unused-vars
  const [completeTodos, setCompleteTodos] = useState(['A', 'B'])
  return (
    <>
      <div className='input-area'>
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>

      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map(todo => {
            return (
              <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            )
          })}
        </ul>
      </div>

      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map(todo => {
            return (
              <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
