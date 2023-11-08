import React from 'react'

export default function Arrow() {
    function Simple(name)
    {
        alert('this is simple function'+name)
    }
    const Arrow= name =>alert("this is arrow function"+name)
    
    
  return (
    <div>
        <h1 style={{color:"white",backgroundColor:"red"}}>Arrow</h1>
        <button onClick={()=>Simple("kiran")}>Simple Function</button>
        <button onClick={()=>Arrow("john")}>Arrow Function</button>

    </div>
  )
}
