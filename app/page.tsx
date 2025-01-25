import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">To-Do List</h1>
      </header>
      <section className="flex flex-col items-center w-full flex-1">
        <p className="text-gray-700 mt-6 text-center">
          Organize suas tarefas com facilidade e estilo!
        </p>
        <TodoList />
      </section>
      <footer className="w-full bg-gray-800 text-gray-300 py-4 text-center mt-6">
        <p>© 2025 To-Do List App. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
