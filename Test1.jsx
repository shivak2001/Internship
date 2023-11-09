import React from 'react'

export default function() {
   const amount=[10000,20000,30000,40000,50000]

   const mapping=amount.map((a)=><h1>{a}</h1>)
  return (
    <div>
        <h1 style={{color:"white",backgroundColor:"red"}}>Test1</h1>
        <ol>
         {amount.map((item)=><li>{item}</li>)}
         </ol>
    </div>
  )
}
