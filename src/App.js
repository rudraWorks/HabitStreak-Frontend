import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root/Root'
import Home from './pages/Home'
import Habits from './pages/Habits/Habits'
import Add from './pages/Add/Add'
import About from './pages/About/About'
import Profile from './pages/Profile/Profile'
import ModalState from './contexts/Modal/State'
import Signup from './pages/Signup/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'habits',
        element: <Habits />
      },
      {
        path: 'add',
        element: <Add />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path:'signup',
        element: <Signup/>
      },
      {
        path: '*',
        element: <center><h2>Page not found!</h2><br/><img style={{ width: '100px' }} src='/icons/404.png'></img></center>
      }
    ]
  }
])

function App() {
  return (
    <ModalState>
      <RouterProvider router={router} />
    </ModalState>
  )
}

export default App