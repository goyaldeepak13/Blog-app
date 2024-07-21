 
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => { // in appwrite service the most of the thing is promise so logout will return promise and to handle promise we can use then catch finally
      dispatch(logout()) // we dispatch logout to store so that store always remain updated because we will take knowledge of login logut from store
    })
  }
  return (
    <button
      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn