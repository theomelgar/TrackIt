import { useState, createContext } from "react";

export const ImageContext = createContext()

export const ImageProvider = ({children})=>{
    const [info, setInfo] = useState([])
    const token = info.token
    return(
        <ImageContext.Provider value={{ info, setInfo, token}}>
            {children}
        </ImageContext.Provider>
    )
}