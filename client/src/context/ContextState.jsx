import React, { useState } from 'react'
import mycontext from './mycontext'


function ContextState({ children }) {
  const [user, setUser] = useState('da@gmail.com');
  const [password, setPassword] = useState('123');

  const AddUser =(p)=>{
      setUser(p)
  }

  return (
    <mycontext.Provider value={{ user, password, AddUser }}>
      {children}
    </mycontext.Provider>
  )
}

export default ContextState;
