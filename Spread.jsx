import React from 'react'

export default function Spread() {
    const num1=[1,2,3,4];
    const num2=[5,6,7,8];
    const num3=[1,3,5,7];

    const combine=[...num1,...num2,...num3]


    //destrucing very very important

    const number=[1,2,3,4,5,6];

    const [one,two,three,...rest]=number

    //objects
    const myvehicle={
      brand:"ford",
      model:"mustang",
      color:"red"
    }
    const updatemyvehicle={
      type:"car",
      year:2021,
      color:"yellow"
    }

    const myupdatedvehicle={...myvehicle,...updatemyvehicle,color:"blue "}

    console.log(myupdatedvehicle)
  return (
    <div>
            <h1 style={{color:"white",backgroundColor:"maroon"}}>Spread Operator</h1>

            <h2>{num1}</h2>
            <h2>{num2}</h2>
            <h2>{num3}</h2>
            <h2>{combine}</h2>
            <h2>{one} {two} {three} {rest}</h2>
    </div>
  )
}
