import React from 'react'
import Task from './Task'

const TaskList = ({tasks , handleDeleteTask , handleSelectTask}) => {

  return (
    <>
      {tasks.map(task => {
        return <Task 
          key={task.id} 
          text={task.text} 
          id={task.id} 
          selected={task.selected}
          handleDeleteTask={handleDeleteTask}
          handleSelectTask={handleSelectTask}
        />
      })}
    </>
  )
}

export default TaskList