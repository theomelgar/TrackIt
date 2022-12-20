import { useState, createContext } from "react";
import useStickyState from "../hooks/index.js"
export const ListContext = createContext()

export const ListProvider = ({children})=>{
    const week=[
    {id:0, name:"Domingo", isAvailable:true},
    {id:1, name:"Segunda", isAvailable:true},
    {id:2, name:"Terça" , isAvailable:true},
    {id:3, name:"Quarta", isAvailable:true},
    {id:4, name:"Quinta", isAvailable:true},
    {id:5, name:"Sexta", isAvailable:true},
    {id:6, name:"Sábado", isAvailable:true}]
    const [days, setDays] = ([])
    const [percentage, setPercentage] = useState(0)
    const [UserData, setUserData] = useStickyState({}, "userData")
    return(
        <ListContext.Provider value={{ percentage, setPercentage, days,setDays, week, UserData, setUserData}}>
            {children}
        </ListContext.Provider>
    )
}