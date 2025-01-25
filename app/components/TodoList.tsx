"use client";

import { useState } from "react";
import { Trash } from "lucide-react"; // Ícone para remover tarefas

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-6 w-full max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Minhas Tarefas</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicione uma tarefa..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Adicionar
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow hover:shadow-md transition"
          >
            <span className="text-gray-700">{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-600 transition"
            >
              <Trash className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
