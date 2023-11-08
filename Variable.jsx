import React from 'react'

export default function Variable() {
    var a=10;
    let b=20;
    const c=30;
    a=50;
    b=200;
    var name="john"
    console.log(name,111)
    if(true){
        var name="shiva"
        console.log(name,2222)
    }
    console.log(name,4444)

    let n="john"
    console.log(n,1111)
    if(true){
        let name="kiran"
        console.log(n,2222)
    }
    console.log(n,3333)
  return (
    <div>
    <h1 style={{color:"white",backgroundColor:"red"}}>Variable</h1>
    <h2>{a}</h2>
    <h2>{b}</h2>
    <h2>{c}</h2>
    </div>
  )
}
