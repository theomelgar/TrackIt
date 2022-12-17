import { useState, createContext } from "react";

export const ListContext = createContext()

export const ListProvider = ({children})=>{
    const [list, setList] = useState([])
    const week=[{id:1, name:"Domingo"},
    {id:2, name:"Segunda"},
    {id:3, name:"Terça"},
    {id:4, name:"Quarta"},
    {id:5, name:"Quinta"},
    {id:6, name:"Sexta"},
    {id:7, name:"Sábado"}]
    const [days, setDays] = ([])
    const [empty, setEmpty] = useState(true)
    return(
        <ListContext.Provider value={{ list, setList, empty, setEmpty, days,setDays, week}}>
            {children}
        </ListContext.Provider>
    )
}