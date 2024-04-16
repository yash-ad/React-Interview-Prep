import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const[user,setUser] = useState(null)
    return(
        // passing prop as a value
    <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
        )

};

export default UserContextProvider