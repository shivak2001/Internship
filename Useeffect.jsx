import React,{useEffect, useState} from 'react'


export default function Useeffect() {
    const [number,setNumber]=useState(0)

    const Increase=()=>
    {
        setNumber(number+1)
    }

    const [sqr,setsqr]=useState(0)

    useEffect(()=>{
       setsqr(number*number)
    },[number])


    setTimeout(()=>{
        setNumber(number+1)
    },1000)
    // setTimeout(()=>{
    //     setNumber(number+0)
    // },1)
    
  return (
    <div>Useeffect

        <h1>{number}-{sqr}</h1>
        <button onClick={Increase}>+</button>
    </div>
  )
}
