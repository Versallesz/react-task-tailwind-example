import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  let science = "physics";
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.desc,
      },
    ]); //[...tasks, task] agarra los elementos de tasks y le agrega el elemento task. Sin modificar el array de Tasks
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
