import React from 'react'

const style = {
  wraper: {
    backgroundColor: '#15A399',
    width          : '400px',
    minHeight      : '200px',
    padding        : '8px',
    margin         : '8px',
    borderRadius   : '8px'
  },
}

export const IncompleteTodos = props => {
  // eslint-disable-next-line react/prop-types
  const { todos, onClickComplete, onClickDelete } = props
  return (
    <div style={style.wraper}>
      <p className='title'>未完了のTODO</p>
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {todos.map((todo, index) => {
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
  )
}
