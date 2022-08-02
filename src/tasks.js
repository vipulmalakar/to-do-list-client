import React, {useState, useEffect } from "react";
import Input from "./components/Input";

const Tasks = () => {

  const [users, setUsers] = useState([]);

  const getTasks = async () => {
    const response = await fetch("http://localhost:3000/home");
    setUsers(await response.json());
  }
  
  useEffect(() => {
    getTasks();
  }, []);

  return (
    users.map(createTask)
  );
}

function createTask(task){
  return(
    <Input 
      key={task._id}
      title={task.title}
      description={task.description}
    />
  );
}

export default Tasks;