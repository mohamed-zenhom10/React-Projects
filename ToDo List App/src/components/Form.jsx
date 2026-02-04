import React from 'react'


const Form = ({taskInput , setTaskInput , handleAddTask}) => {

  return (
    <>
      <form className="input-box" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Enter A Task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          onClick={handleAddTask}
        >
          Add 
        </button>
      </form>
    </>
  )
}

export default Form