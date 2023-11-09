import React from 'react'

export default function () {
    const vehicles=["cars","buses","bicycles"];

    const car=vehicles[0];
    const suv=vehicles[1];
    const truck=vehicles[2];

    const[car1,suv1,truck1]=vehicles;

    const amount=[20+20,50-50,4*5]
    const [x,y,z]=amount

    //Destructing Objects
    const vehicle={
        brand:"Ford",
        model:"mustang",
        type:"car",
        year:2021,
        color:"red",
        registration:{
            city:"Mangaluru",
            state:"Karnataka",
            country:"India"
     }
    }

    const {brand,model,type,year,color,registration:{city,state,country}}=vehicle
  return (
    <div>
        <h1 style={{color:"white",backgroundColor:"red"}}>Destruct</h1>
        <h1>{car1}</h1>
        <h1>{suv1}</h1>
        <h1>{truck1}</h1>
        <h1>{x} {y} {z}</h1>
        <h3>I have {color} {brand} {model} {type} Registered in {city} {state} {country}</h3>
    </div>
  )
}
