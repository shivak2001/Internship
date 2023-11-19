import React from 'react'

export default function Ternary() {
    var a=10;
    var b="10";
    if(a==b){
        console.log(true);

    }
    else
    {
        console.log(false);
    }

    const click=()=>
    {
        const time=new Date().toLocaleTimeString();
        time>='12'?alert("Good Afternoon:"+time):time>=4?alert("Good Morning:"+time):time>=8?alert("Good Evening:"+time):alert("Good Night:"+time)  
    }

    //using ternary
    //a==b?<h1>true</h1>:<h1>false</h1>
  return (
    <div>{a===b?<h1>true</h1>:<h1>false</h1>}
    <button id="v" onClick={click}>Greeting</button>
    </div>
    
  )
}
