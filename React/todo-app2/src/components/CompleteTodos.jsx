import React from 'react'

const style = {
  wraper: {
    backgroundColor: '#F7F371',
    width          : '400px',
    minHeight      : '200px',
    padding        : '8px',
    margin         : '8px',
    borderRadius   : '8px'
  },
}

export const CompleteTodos = props => {
  // eslint-disable-next-line react/prop-types
  const { todos, onClickBack } = props
  return (
    <div style={style.wraper}>
      <p className='title'>完了のTODO</p>
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {todos.map((todo, index) => {
          return (
            <div key={index} className='list-row'>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
