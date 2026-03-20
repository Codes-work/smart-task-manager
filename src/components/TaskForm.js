import { useState } from "react";

function TaskForm({ addTask}) {
    const [task, setTask] = useState("");
    const [priority,setPriority] = useState("Low");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        addTask({
            text: task,
            priority: priority});
        setTask("")
    }    

return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e)=> setTask(e.target.value)}
        />
         <select value={priority} onChange={(e) => {setPriority(e.target.value)}} >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
         </select>   
        <button type="submit">Add Task</button>
    </form>

    
    );

}

export default TaskForm;