import React from 'react'
import Hello,{name,phone,Address,Pincode,Country} from './Exp'

export default function Imp() {
  return (
    <div>       
         <h1 style={{color:"white",backgroundColor:"red"}}>Import</h1>
         <h1>My name is {name} My Phone Number is {phone}</h1>
         <h1>Address:{Address} Pincode:{Pincode} Country:{Country}</h1>

         <button onClick={Hello}>Hello</button>
    </div>
  )
}


