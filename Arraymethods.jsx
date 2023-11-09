import React from 'react'

export default function Arraymethods() {
    const fruits=['Apple','Banana','Orange','Mango','Grapes'];

    const students=['Ganesh','Abhishek','Shiva','Afnan','Umamaheshwar']

    const studentdetails=[
        {
            name:"Shivaganesh",
            roll_no:1,
            phone:9207483098,
            address:"Kasaragod",
            marks:
            {
              maths:80,
              science:77,
              social_science:99,
              kannada:100,
              hindi:78,
              english:98
            }
        },
        {
            name:"Keerthan",
            roll_no:2,
            phone:9308768533,
            address:"Sulya",
            marks:
            {
              maths:80,
              science:75,
              social_science:90,
              kannada:98,
              hindi:100,
              english:98
            }
        },
        {
            name:"Kuldeep",
            roll_no:3,
            phone:9308756453,
            address:"Sulya",
            marks:
            {
              maths:90,
              science:87,
              social_science:79,
              kannada:100,
              hindi:78,
              english:99
            }
        },
        {
            name:"Venugopal",
            roll_no:4,
            phone:9647489379,
            address:"Kavu",
            marks:
            {
              maths:81,
              science:79,
              social_science:89,
              kannada:100,
              hindi:78,
              english:88
            }
        },
        {
            name:"Akash",
            roll_no:5,
            phone:9045342315,
            address:"Puttur",
            marks:
            {
              maths:50,
              science:71,
              social_science:89,
              kannada:70,
              hindi:78,
              english:88
            }
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
                <tr key={index}>
                    <td>{++index}</td>
                    <td>{idea}</td>
                </tr>
            )
        })}
    </table>
    <br/>
    <table id="w" border={3}>
    <tr>    
            <th>Sl No</th>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social_Science</th>
            <th>Kannada</th>
            <th>Hindi</th>
            <th>English</th>
            <th>Total</th>
            <th>Average</th>
            
        </tr>
        {studentdetails.map((ate,index)=>{
            const total = Object.values(ate.marks).reduce(
                (acc, mark) => acc + mark,
                0
              );
              const average = total / Object.values(ate.marks).length;
  
            return (
                <tr key={index}>
                    <td>{++index}</td>
                    <td>{ate.roll_no}</td>
                    <td>{ate.name}</td>
                    <td>{ate.phone}</td>
                    <td>{ate.address}</td>
                    <td>{ate.marks.maths}</td>
                    <td>{ate.marks.science}</td>
                    <td>{ate.marks.social_science}</td>
                    <td>{ate.marks.kannada}</td>
                    <td>{ate.marks.hindi}</td>
                    <td>{ate.marks.english}</td>
                    <td>{total}</td>
                    <td>{average.toFixed(2)}</td>
                </tr>
            )
        })}
    </table>
</div>
)
}
