import React from 'react'

export default function Arraymethods() {
    const fruits=['Apple','Banana','Orange','Mango','Grapes'];

    const students=['Ganesh','Abhishek','Shiva','Afnan','Umamaheshwar']

    const studentdetails=[
        {
            name:"Shivaganesh",
            roll_no:1,
            phone:9207483098,
            address:"Kasaragod"
        },
        {
            name:"Keerthan",
            roll_no:2,
            phone:9308768533,
            address:"Sulya"
        },
        {
            name:"Kuldeep",
            roll_no:3,
            phone:9308756453,
            address:"Sulya"
        },
        {
            name:"Venugopal",
            roll_no:4,
            phone:9647489379,
            address:"Kavu"
        },
        {
            name:"Akash",
            roll_no:5,
            phone:9045342315,
            address:"Puttur"
        },
    ]

    const mapping=fruits.map((item)=><h1>{item}</h1>)
    const mapping1=students.map((idea)=><h4>{idea}</h4>)
    const mapping2=studentdetails.map((ate)=><h1>{ate}</h1>)
  return (
    <div>
    <h1 style={{color:"white",backgroundColor:"red"}}>ArrayMethods</h1>
    {mapping}
    
    <table border="3">
        <tr>
            <th>Sl No</th>
            <th>Student Name</th>
           

        </tr>
        {students.map((idea,index)=>{
            return (
                <tr>
                    <td>{++index}</td>
                    <td>{idea}</td>
                </tr>
            )
        })}
    </table>
    <br/>
    <table id="w" border={3}>
    <tr>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>Phone</th>
            <th>Address</th>

        </tr>
        {studentdetails.map((ate)=>{
            return (
                <tr>
                    <td>{ate.roll_no}</td>
                    <td>{ate.name}</td>
                    <td>{ate.phone}</td>
                    <td>{ate.address}</td>
                </tr>
            )
        })}
    </table>
</div>
  )
}
