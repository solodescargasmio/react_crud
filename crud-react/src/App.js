import React,{useState} from "react";
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid';
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EdditUserForm";



function App() {
  const usersData = [
    { id: uuidv4(), name:'Tania', username:'flopialgo' },
    { id: uuidv4(), name:'Pablo', username:'Por que no' },
    { id: uuidv4(), name:'Manuel', username:'Huyele' },
  ]

  const [users, setUsers] = useState(usersData);

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    console.log(users)
    setUsers([
      ...users,
      user
    ])

  }

  //Eliminar Usuario
  const deleteUser = (id) => {
      setUsers(users.filter(user => user.id !== id))
  }

  //Editar Usuario
  const [editing, setEditing] = useState(false)
  
  const [currentUser,setCurrentUser] = useState({
    id:null, name:'', username:''
  });

  return (
    <div className="container">
       <h1>CRUD App con Hooks</h1> 
       <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
                <div><h2>Edit user</h2>
                <EditUserForm />
              
            </div>
            ) : (
              <div>
                <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
              
            </div>
            )
          }
          
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users = {users} deleteUser={deleteUser} setEditing={setEditing}/>
        </div>
       </div>
    </div>
  );
}

export default App;
