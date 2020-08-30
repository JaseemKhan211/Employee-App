import React from 'react';

const Dashboard = (props) =>{
    // console.log('from Dashboard' , props);
    return(
        <React.Fragment>
            <h1 className="heading_style_2"> Employee List </h1>
        
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th> # </th>
                        <th scope="col"> First Name </th>
                        <th scope="col"> Second Name </th>
                        <th scope="col"> Email </th>
                        <th scope="col"> Salery </th>
                        <th scope="col"> Action </th>
                    </tr>
                </thead>

                <tbody className="text-white bg-white">
                    {
                    props.table &&
                    props.formList.map((item,index) =>{
                        //Destructring Array
                        const { fName, lName, email, salery } = item
                        // console.log('tbody==========' , {fName} , {lName} , {email} , {salery}) 
                        return(
                                <tr>
                                    <td> {index + 1} </td>
                                    <td> {fName} </td>
                                    <td> {lName} </td>
                                    <td> {email} </td>
                                    <td> {salery} </td>
                               
                                <td>
                                    <button 
                                        className="delete_btn" 
                                        onClick={() =>props.deleteItem(index)}
                                        > 
                                        <i class="fa fa-trash" aria-hidden="true"></i> 
                                    </button>  
                                </td>
                                </tr>
                            )
                    })
                    } 
               </tbody>

            </table>
     
        <button 
            type="submit"
            onClick={() => {props.updateEmployee(true)}}
        > 
            <div className="action">
                <span> + </span>
            </div>
        </button>
        </React.Fragment>
    )
}
export default Dashboard;