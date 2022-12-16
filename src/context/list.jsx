import { useState, createContext } from "react";

export const ListContext = createContext()

export const ListProvider = ({children})=>{
    const [list, setList] = useState([])
    const week=["Domingo", "Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
    const [days, setDays] = ([])
    const [empty, setEmpty] = useState(true)
    return(
        <ListContext.Provider value={{ list, setList, empty, setEmpty, days,setDays, week}}>
            {children}
        </ListContext.Provider>
    )
}