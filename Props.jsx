import React from 'react'

export default function Props(props,{value,v}) {
    console.log(props); 
  return (
    <div>
        <h1>Good Morning {value}</h1> 
        <h1 style={{color:"white",backgroundColor:"red"}}>Props</h1>
        <ul>
          {v?.map((item)=>{
            return(
              <li>{item}</li>
            )
          })}
        </ul>
        <h1>My name is {props.name}.I am {props.age} Years old</h1>
        
    </div>
  )
}
