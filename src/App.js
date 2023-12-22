import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root/Root'
import Home from './pages/Home/Home'
import Habits from './pages/Habits/Habits'
import Add from './pages/Add/Add'
import About from './pages/About/About' 
import Profile from './pages/Profile/Profile'
import Signup from './pages/Signup/Signup'
import Details from './pages/HabitDetails/Details'
import Notfound from './components/Notfound'
import Pro from './pages/Pro/Pro'

import ModalState from './contexts/Modal/State'
import UserState from './contexts/User/State'
import NotificationBarState from './contexts/NotificationBar/State'





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
        element: <Habits />,

      },
      {
        path: 'habits/:habitName',
        element: <Details />
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
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'pro',
        element: <Pro />
      },
      {
        path: '*',
        element: <Notfound/>
      }
    ]
  }
])

function App() {
  return (
    <NotificationBarState>
      <UserState>
        <ModalState>
          <RouterProvider router={router} />
        </ModalState>
      </UserState>
    </NotificationBarState>

  )
}

export default App