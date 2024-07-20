// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import './App.css'
// import authService from "./appwrite/auth"
// import {login, logout} from "./store/authSlice"
// import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'
// import {LoadingSpinner} from './components';

// function App() {
//   const [loading, setLoading] = useState(false)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//     .then((userData) => {
//       if (userData) {
//         dispatch(login({userData}))
//       } else {
//         dispatch(logout())
//       }
//     })
//     .finally(() => setLoading(true))
//   }, [])
  
//   return loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-red-600'>
//       <div className='w-full block'>
//         <Header />
//         <main>
//         <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) :  <LoadingSpinner />
// }

// export default App








import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { LoadingSpinner } from './components'

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(true))
  }, [dispatch])

  return loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-r from-blue-200 via-purple-100 to-pink-100'>
      <div className='w-full block'>
        <Header />
        <main className='p-4'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : <LoadingSpinner />
}

export default App

