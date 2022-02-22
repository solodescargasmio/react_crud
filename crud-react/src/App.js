import React,{useState} from "react";
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid';



function App() {
  const usersData = [
    { id: uuidv4(), name:'Tania', username:'flopialgo' },
    { id: uuidv4(), name:'Pablo', username:'Por que no' },
    { id: uuidv4(), name:'Manuel', username:'Huyele' },
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
       <h1>CRUD App con Hooks</h1> 
       <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users = {usersData}/>
        </div>
       </div>
    </div>
  );
}

export default App;
