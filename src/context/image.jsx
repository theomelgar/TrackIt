import { useState, createContext } from "react";

export const ImageContext = createContext()

export const ImageProvider = ({children})=>{
    const [info, setInfo] = useState()
    return(
        <ImageContext.Provider value={{ info, setInfo }}>
            {children}
        </ImageContext.Provider>
    )
}