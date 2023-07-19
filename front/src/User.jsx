// import 'bootstrap/dist/css/bootstrap.main.css';
// import Table from 'react-bootstrap/Table';

import axios from "axios";
// import { useEffect } from "react";
import {useDispatch, useSelector} from'react-redux'
// import { getData } from "./redux/userSlice";
import { Link } from "react-router-dom";
import { deleteUser } from "./redux/userSlice";


function BasicExample() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
 
  const handleDelet =(id)=>{
      console.log(id)
    axios.delete('http://localhost:3001/delete/'+id)
    .then(res=>{
          console.log("hellow")
          dispatch(deleteUser({id}))
          console.log(res)
        })
        .catch(e=>console.log(e))
  }
  return (
    <div>
      <div>
        <Link to='/create'>Add +</Link>
        <table  >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        users.map(user=>(
          <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td>
            <Link to={`/edit/${user.id}`}>Edit</Link>
             <button onClick={()=>handleDelet(user.id)}>Delet</button>
          </td>
        </tr>
        ))
       }
        
      </tbody>
    </table>
      </div>
    </div>
    
  );
}

export default BasicExample;