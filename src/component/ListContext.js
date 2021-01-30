import React, { createContext, useState, useEffect } from 'react'


export const ListContext = createContext()

const ListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  // Add tasks
  const addTask = (title, desc) => {
    setTasks([...tasks, { title, desc, isComplete: false, id: Math.random()*1000 }])
  }
  
  {/*const toggleState = (id)=>{
    setTasks(
      setTasks(tasks.map(task => {
            if(task.id === id ){
                return{
                    ...task, completed: !task.completed,
                };
                return task;
            }
        }))
      )}*/}
      const toggleState = id => {
        let updatedTodos = tasks.map(task => {
          if (task.id === id) {
            task.isComplete = !task.isComplete;
          }
          return task;
        });
        setTasks(updatedTodos);
      };  
  
  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  // Edit task
  const editTask = (title, desc, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, desc, id } : task))

    console.log(newTasks)

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <ListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findItem,
        editTask,
        toggleState,
        editItem
      }}
    >
      {props.children}
    </ListContext.Provider>
  )
}

export default ListContextProvider;
