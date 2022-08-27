import React from 'react'

const style = {
  backgroundColor: '#E83C4A',
  width          : '400px',
  height         : '30px',
  padding        : '8px',
  margin         : '8px',
  borderRadius   : '8px'
}

export const InputTodo = props => {
  // eslint-disable-next-line react/prop-types
  const { todoText, onChange, onClick } = props
  return (
    <div style={style}>
      <input placeholder='TODOを入力' value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  )
}
