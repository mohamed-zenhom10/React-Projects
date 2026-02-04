import React from 'react'

const Task = ({text , id , selected , handleDeleteTask , handleSelectTask}) => {

  return (
    <>
      <div className="task">
        <div className="task-content">
          <input 
            type="checkbox" 
            onClick={() => handleSelectTask(id)}
          />
          <label className={`${selected ? "selected" : ""}`}>{text}</label>
        </div>
        <div className="del-btn" onClick={() => handleDeleteTask(id)}>
          &times;
        </div>
      </div>
    </>
  )
}

export default Task