import React from 'react'

export default function Conditional() {
    const Check=({isGoal})=>{
       if(isGoal){
          return <MadeGoal/>
       }
       else
       {
        return <MissedGoal/>
       }
    }
    const MadeGoal=()=>{
        return <h1>Made Goal !!!</h1>
    }
    const MissedGoal=()=>
    {
        return <h1>Missed Goal !!!</h1>
    }
  return (
    <div>
   <h1 style={{color:"white",backgroundColor:"red"}}>Conditional</h1>
    <Check isGoal={false}/>
    </div>
  )
}
