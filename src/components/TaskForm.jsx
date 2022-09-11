import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu descripcion"
          type="text"
          onChange={(event) => {
            setDesc(event.target.value);
          }}
          value={desc}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}
