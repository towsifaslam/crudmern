import axios from 'axios';
import  { useState } from 'react'
import { addUser } from './redux/userSlice';
 import { useDispatch } from 'react-redux';
 import {useNavigate} from'react-router-dom'

export default function CreateUser() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const[name,setName] = useState();
  const [email,setEamil] = useState();
  const [age,setAge]= useState();
  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(1)
    axios.post('http://localhost:3001/create',{name,email,age})
    .then(res => {
      console.log(2)
       dispatch(addUser(res.data))
      console.log(res.data)
      navigate('/')
    
    })
    .catch(err => console.log(err))
    // console.log({name,email,age})
  }
  return (

    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div>
            <label htmlFor="">Name</label>
            <input type="text"
             placeholder='Enter name'
              onChange={(e)=> setName(e.target.value)}
             />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email"
             placeholder='Enter email'
              onChange={(e)=>setEamil(e.target.value)}
             />
          </div>
           <div>
            <label htmlFor="">Age</label>
              <input 
              type="text" 
              placeholder='Enter age'
              onChange={(e)=> setAge(e.target.value)}
              />
           </div>
           <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
