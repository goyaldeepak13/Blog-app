// import React from 'react'
// import { Container, Logo, LogoutBtn } from '../index'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)

//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/", // slug is url
//       active: true
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },

//     {
//       name: "My Posts",
//       slug: "/my-posts",
//       active: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//     },
//     {
//       name: "My Account",
//       slug: "/account",
//       active: authStatus,
//     },
//   ]

//   // in li we are giving key we have to give key when html are repeating so in this case in navitem we apply map so the li will repeat so we have to give key
//   return (
//     <header className='py-3 shadow bg-green-600 '>
//       <Container>
//         <nav className='flex '>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px' />

//             </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                   >{item.name}</button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && ( // if authStatus is true then the next part which is after && will be display
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header


 

















import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/", // slug is url
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "My Account",
      slug: "/account",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500'>
      <Container>
        <nav className='flex '>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />

            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='mx-2'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 text-white duration-200 hover:bg-white hover:text-gray-800 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='mx-2'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
