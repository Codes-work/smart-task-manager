import Header from "./components/Header";
import {useState,useEffect} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App(){
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });
   const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks]);

  const addTask = (taskData) =>{
    const newTask = {
      id : Date.now() ,
      text : taskData.text ,
      completed:false ,
      priority : taskData.priority
    };
    setTasks((prevTasks) => [...prevTasks,newTask]);
  };

  const filteredTasks = tasks.filter((task)=>{
    if (filter === "all" ) return true;
    else if(filter === "completed") return task.completed;
    else if(filter === "pending") return !task.completed;
    return true;
  });
  

  const toggleTask = (id) =>{
    const updateTasks= tasks.map((task) =>{
      if(task.id === id)
        return{...task,completed: !task.completed};
      return task;
    });
    setTasks(updateTasks);
  }

  const deleteTask = (idToDelete) => {
  const newTasks = tasks.filter(task => task.id !== idToDelete);
  setTasks(newTasks);
};

  const saveTask = () =>{
    if (!editText.trim()) return;
    const updateTasks = tasks.map((task) => {
      if(task.id===editId){
        return{...task, text: editText};
      }
      return task;
    });
    setTasks(updateTasks);

    setEditId(null);
    setEditText("");
  };

  const completedCount = tasks.filter(task => task.completed === true).length;

  return(
    <div className="container">
      <Header />
      <TaskForm addTask={addTask} />
      <div>
        <button
          style={{ background: filter === "all" ? "#38bdf8" : "" }}
          onClick={() => setFilter("all")}
        >
        All
        </button>
        <button
          style={{ background: filter === "pending" ? "#38bdf8" : "" }}
          onClick={() => setFilter("pending")}
        >
        Pending
        </button>
        <button
          style={{ background: filter === "completed" ? "#38bdf8" : "" }}
          onClick={() => setFilter("completed")}
        >
        Completed
        </button>

      </div>
      <TaskList 
        tasks={filteredTasks} 
        deleteTask={deleteTask}
        editId={editId}
        editText={editText}
        setEditId={setEditId}
        setEditText={setEditText}
        saveTask={saveTask}
        toggleTask={toggleTask}
        completedCount={completedCount}
        filter={filter}

      />
    </div>
  );
}

export default App;
