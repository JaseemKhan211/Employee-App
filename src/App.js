import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Form from './Form';

const App = () => {
  const[user, setUser] = useState();
  const[addEmployee, setAddEmployee] = useState();
  const[formList, setFormList] = useState([]);
  const[table, setTable] = useState(false);


  const updateUser = (userObject) =>{
    setUser(userObject);
  }
  
  const updateEmployee = (value) =>{
    setAddEmployee(value);
  } 
  
  const updateEmpolyeeList = (object) =>{
    const newEmpolyeeList = [...formList];
    newEmpolyeeList.push(object);
    setFormList(newEmpolyeeList);
    setTable(true);
  }
  
  const deleteItem = (index) =>{
    const newListDelete = [...formList];
    newListDelete.splice(index);
    setFormList(newListDelete);
  }
  
  return(
    <React.Fragment>
      {!user && 
        <Login updateUser={updateUser} />
      }
      {user && !addEmployee && 
        <Dashboard user={user} updateEmployee={updateEmployee} formList={formList} table={table} deleteItem={deleteItem} />
      }
      {user && addEmployee && 
        <Form updateEmployee={updateEmployee} updateEmpolyeeList={updateEmpolyeeList} formList={formList} />
      } 
    </React.Fragment>
  )
}
export default App;
