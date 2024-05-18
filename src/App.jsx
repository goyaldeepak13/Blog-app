// import React, { useState, useEffect } from 'react'
// import {useDispatch} from 'react-redux'
// import './App.css'
// import authService from './appwrite/auth'
// import { login,logout } from './store/authSlice'
// import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'

// function App() {
 
  
//  const [loading, setLoading] = useState(true) // basically there will be loading in order to fetch data so if loading is true we will show loading data othewise we will show the data
// const dispatch = useDispatch()


// useEffect(() => {
//   authService.getCurrentUser()
//   .then((userData) =>{
//     if(userData){
//       dispatch(login({userData}))
//     }else{
//       dispatch(logout())
//     }
//   })
//   .finally(() => setLoading(false))
// }, [])
   
//  return !loading?(
 
//   <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//     <div className='w-full block'>
//       <Header/>
//       <main>
 
//        Todo: <Outlet/>
//       </main>
//       <Footer/>
//     </div>
//   </div>

//  ):(null)
 
// }

// export default App





 






import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import {LoadingSpinner} from './components';

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(true))
  }, [])
  
  return loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) :  <LoadingSpinner />
}

export default App