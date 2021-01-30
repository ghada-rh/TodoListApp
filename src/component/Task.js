import React, { useContext, useState, useEffect } from 'react'
import { ListContext } from './ListContext'

const Task = ({ task }) => {
  const { removeTask, findItem,toggleState } = useContext(ListContext)
  /*const [complete, setComplete] = useState(false);

  const toggleState = ()=>{
    setComplete(!complete);
  }*/
  
  return (
    <li className="list-item">
     
      <span className={` ${task.isComplete && "completed"}`}>{task.title} <span className="desc">{task.desc && `: ${task.desc}`}</span></span>
     
      <div >

        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
        <button className="btn-delete task-btn" onClick={() => removeTask(task.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn-check task-btn b" onClick={() => toggleState(task.id)}><i className={`fas fa-check ${task.isComplete && "complete"}`}></i></button>
                

      </div>
    </li>
  )
}

export default Task
