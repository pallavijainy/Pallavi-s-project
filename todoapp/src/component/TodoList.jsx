import React, { useState } from 'react'
import AddItem from './AddItem'
import Todo from './Todo'

export default function TodoList() {
const [show,setShow]=useState([])


const handleClick=(text)=>{
    const obj={
        title:text,
        id:new Date().toDateString()+text,
        status:false
    }

    setShow([...show,obj])
}




const handleDelete=(id)=>{
 const del=show.filter((el)=>(
     el.id !==id
 ))
 setShow(del)
}

const handleToggle=(id)=>{
    const toggleUpdate= show.map((el)=>(
        el.id === id ? {...el,status: !el.status} : el
    ))

 setShow(toggleUpdate)
}
  return (
  
<>

<Todo handleClick={handleClick} />
{
 show.map((el)=>(
   <AddItem title={el.title} key={el.id} id={el.id} status={el.status} handleDelete={handleDelete} handleToggle={handleToggle}/>
 ))
}

</>


  )
}
