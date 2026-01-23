'use client'
import { useTodoStore } from "@/hooks/useToDo"

function TodoPage() {
    const { task, setTask, clearTask } = useTodoStore()
    return (
        <div style={{ padding: "20px" }}>
            <h2>Zustand Example</h2>

            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <p>Task: {task}</p>

            <button onClick={clearTask}>Clear Task</button>
        </div>
    )
}

export default TodoPage
