
import { createContext } from "react";
import useStickyState from "../hooks/index.js"
export const InfoContext = createContext()

export const InfoProvider = ({children})=>{
    const [UserData, setUserData] = useStickyState({}, "userData")
    return(
        <InfoContext.Provider value={{ UserData, setUserData}}>
            {children}
        </InfoContext.Provider>
    )
}