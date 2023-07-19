
import './App.css'
import { useEffect } from 'react';
import CreateUser from './CreateUser';
import  User from'./User';
import axios from 'axios';
import {useDispatch} from'react-redux'
import { getData } from './redux/userSlice';
import {BrowserRouter,Routes,Route} from'react-router-dom'
import UpdateUser from './UpdateUser';
function App() {
   
   const dispatch = useDispatch()
  useEffect(()=>{
    const fetchData = async()=>{
      try {
         const response = await axios.get('http://localhost:3001');
          dispatch(getData(response.data))
      } catch (error) {
        console.log(error)   
      }
      
    }
    fetchData()
  },[dispatch])

  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<User />} />
      <Route path='/create' element={<CreateUser />} />
      <Route path='/edit/:id' element={<UpdateUser />} />
     </Routes>
     </BrowserRouter>
  )
}

export default App
