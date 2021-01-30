import React, { useContext } from "react";
import { ListContext } from "./ListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(ListContext);

  return (
    <div>
         {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
