import React from 'react' 
import { useState } from 'react'

const Todo = () => {
    const [user, setuser] = useState('')
    const [content, setcontent] = useState([])

const todo = (e) => {
    console.log(e.target.value)
    setuser(e.target.value)
}

const handleclick = () =>{
    setcontent([...content, user])
}

  return (
    <>
    <div>Todo</div>
    <input type="text" onChange={todo}/>
    <button onClick={handleclick}>Update</button>
    <h1>this is second react class {user}</h1>
    {content.map((el , i)=>{
        return (
            <>
           <div key={i}>
             <h1>{el}</h1>
             <button>delte</button>
           </div>
            </>
        )
    })

    }
    
    </>
  )
}

export default Todo