import axios from 'axios';
import  { useState } from 'react'
 
 import { useDispatch, useSelector } from 'react-redux';
 import {useNavigate, useParams} from'react-router-dom'
 import {updateUser}from'./redux/userSlice'
export default function UpdateUser() {
  const {id} = useParams()
  const users = useSelector(state => state.users.users)
 
  const user = users.find(u => u.id === id)
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const[name,setName] = useState(user.name);
  const [email,setEamil] = useState(user.email);
  const [age,setAge]= useState(user.age);
  const handleUpdate =(event)=>{
    event.preventDefault();
 
    axios.put('http://localhost:3001/update/'+id,{name,email,age})
    .then(res => {
     
       dispatch(updateUser({id,name,email,age}))
      console.log(res.data)
      navigate('/')
    
    })
    .catch(err => console.log(err))
    // console.log({name,email,age})
  }
  return (
    <div>
    <form action="" onSubmit={handleUpdate}>
      <h2>Udatate  User</h2>
      <div>
        <label htmlFor="">Name</label>
        <input type="text"
         placeholder='Enter name'
         value={name}
          onChange={(e)=> setName(e.target.value)}
         />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email"
         placeholder='Enter email'
         value={email}
          onChange={(e)=>setEamil(e.target.value)}
         />
      </div>
       <div>
        <label htmlFor="">Age</label>
          <input 
          type="text" 
          placeholder='Enter age'
          value={age}
          onChange={(e)=> setAge(e.target.value)}
          />
       </div>
       <button>Upadate</button>
    </form>
  </div>
  )
}
