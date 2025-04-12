export const getTasks = async () => {
    const response = await fetch('http://localhost:3001/tasks');
    const data = await response.json();
    return data;
}

export const updateTask = async (id, updatedTask) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedTask),
      headers: { 'Content-Type': 'application/json' }
    });
};