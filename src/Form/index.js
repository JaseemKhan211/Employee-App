import React, { useState } from 'react';

const Form = (props) =>{

    const[users, setUsers] = useState(
        {
            fName: "",
            lName: "",
            email: "",
            salery: "",
        }
    );

    const { fName, lName, email, salery } = users;
    const addForm =() =>{
        props.updateEmployee(false);
        props.updateEmpolyeeList(users);
        
    }
    const onInputChange = (event) =>{
        setUsers({...users,[event.target.name]:event.target.value});
    }


    
    return(
        <React.Fragment>
            <h1 className="heading_style_3"> Employee Form </h1>

            <input 
               type="text"
               placeholder="Enter Your First Name..."
               name="fName"
               value={fName}
               onChange={onInputChange}
            />
            <br />
             <input 
               type="text"
               placeholder="Enter Your Second Name..."
               name="lName"
               value={lName}
               onChange={onInputChange}
            />
            <br />
           <input 
               type="text"
               placeholder="Enter Your Email..."
               name="email"
               value={email}
               onChange={onInputChange}
            />
            <br />
            <input 
               type="text"
               placeholder="Enter Your Salery..."
               name="salery"
               value={salery}
               onChange={onInputChange}
            />
            <button 
                className="form_btn"
                onClick={addForm}
                
            >
                Add Form
            </button>
        </React.Fragment>
    )
}
export default Form;