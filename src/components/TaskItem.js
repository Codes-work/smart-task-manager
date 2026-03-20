function TaskItem({
  task,
  deleteTask,
  editId,
  editText,
  setEditId,
  setEditText,
  saveTask,
  toggleTask,
}) {
  const colorMap = {
    High : "red" ,
    Medium : "orange",
    Low : "green"
  };
  const color = colorMap[task.priority] || "green";
  return (
    <li className="task">

      {editId === task.id ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button style={{ marginLeft: "5px" }}onClick={saveTask}>Save</button>
          <button style={{ marginLeft: "5px" }}
            type="button"
            onClick={() => {
              setEditId(null);
              setEditText("");
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>  
          <div className="task-left">
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            />
            <span 
              style={{ textDecoration: task.completed ? "line-through" : "none", color : color}}>
                {task.text}-{task.priority || "Low"}
            </span>
          </div>

          <div className="task-right">
          <button
            onClick={() => {
              setEditId(task.id);
              setEditText(task.text);
            }}
          >
            Edit
          </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
       </>
      )}  
    </li>
  );
}

export default TaskItem;