import React,{createContext,useState} from 'react'

export const AuthContext=createContext();
export const AuthContextProvider=({childern}) =>{

    const [authUser, setauthUser] = useState(JSON.parse(localStorage.getItem("chat-user"))|| null);
  return <AuthContext.Provider value={[authUser,setauthUser]}></AuthContext.Provider>
}
