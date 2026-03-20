import TaskItem from "./TaskItem";
function TaskList({
  tasks,
  deleteTask,
  editId,
  editText,
  setEditId,
  setEditText,
  saveTask,
  toggleTask,
  completedCount,
  filter
}) {
  return(
    <ul>
      {filter === "all" && (
        <p>{completedCount}/{tasks.length} tasks completed</p>
      )}
        {tasks.map((t)=>(
          <TaskItem
            key={t.id}
            task={t}
            deleteTask={deleteTask}
            editId={editId}
            editText={editText}
            setEditId={setEditId}
            setEditText={setEditText}
            saveTask={saveTask}
            toggleTask={toggleTask}
          />
        ))}
    </ul>
  );
}

export default TaskList;