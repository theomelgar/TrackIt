import { useState, createContext } from "react";

export const ListContext = createContext()

export const ListProvider = ({children})=>{
    const [list, setList] = useState([])
    const week=[
    {id:1, name:"Domingo", isAvailable:true},
    {id:2, name:"Segunda", isAvailable:true},
    {id:3, name:"Terça" , isAvailable:true},
    {id:4, name:"Quarta", isAvailable:true},
    {id:5, name:"Quinta", isAvailable:true},
    {id:6, name:"Sexta", isAvailable:true},
    {id:7, name:"Sábado", isAvailable:true}]
    const [days, setDays] = ([])
    const [empty, setEmpty] = useState(true)
    return(
        <ListContext.Provider value={{ list, setList, empty, setEmpty, days,setDays, week}}>
            {children}
        </ListContext.Provider>
    )
}