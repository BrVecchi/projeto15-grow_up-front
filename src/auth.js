import React, { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [produtos, setProdutos] = useState([])
  
    return(
        <AuthContext.Provider value={{produtos, setProdutos}}>
            {props.children}
        </AuthContext.Provider>
    )
}