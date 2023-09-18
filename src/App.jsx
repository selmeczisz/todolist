import { useState } from 'react'
import './App.css'
import React from 'react'

import { Home } from './components/Home'
import { UserProvider } from './context/UserContext'


const App=()=> {
  return (
    <UserProvider><div>
      <Home/>
    </div>
    </UserProvider>
    
  )
}

export default App