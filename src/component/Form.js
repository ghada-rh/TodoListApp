import React, { useState, useContext, useEffect } from 'react'
import { ListContext } from './ListContext'

const Form = () => {
  const { addTask, editTask, editItem } = useContext(ListContext)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title, desc)
      setTitle('')
      setDesc('')
    } else {
      editTask(title,desc, editItem.id)
    }
  }

  const handleChangeTitle = e => {
    setTitle(e.target.value)
  }
  const handleChangeDesc = e => {
    setDesc(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setDesc(editItem.desc)
      console.log(editItem)
    } else {
      setTitle('')
      setDesc('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-input">
      <input
        type="text"
        placeholder="Enter Task..."
        value={title}
        onChange={handleChangeTitle}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Enter description..."
        value={desc}
        onChange={handleChangeDesc}
        className="task-input"
      />
      </div>
        <button type="submit" className="btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
      
    </form>
  )
}

export default Form;
