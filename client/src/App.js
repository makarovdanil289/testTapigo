import { useEffect, useState } from "react";
import { getTasks, updateTask } from "./api/tasksApi";
import TodoItem from "./componets/TodoItem";

function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (err) {
        setError('Не удалось загрузить задачи');
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [])

  const toggleTaskCompletion = async (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    const updatedTask = { ...task, done: !task.done };

    try {
      await updateTask(taskId, updatedTask);
      setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
    } catch (err) {
      alert('Ошибка при обновлении задачи');
    }
  };

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error}</p>
 
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ul>
        {tasks.map(task => (
           <TodoItem key={task.id} task={task} onToggle={toggleTaskCompletion} />
        ))}
      </ul>
    </div>
  );
}

export default App;
