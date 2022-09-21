import React from 'react'

const ViewTodo = (props) => {
  return (
    <div style={{border: '1px solid #333', borderRadius: '5px', padding: '20px', width: '300px'}}>
        <p>id: {props?.todo?.id||'no id'}</p>
        <h3>{props?.todo?.title||'title text'}</h3>
    </div>
  )
}

export default ViewTodo;