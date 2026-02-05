import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import UserContext from './context/UserContext.js';

function App() {

  return (
    <UserContextProvider>
      <h1>Context API with Chai aur code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App;
