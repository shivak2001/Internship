import React, { useState } from 'react'

export default function Usestate() {
  const [name, setName] = useState('Rahul')

  const [phone, setPhone] = useState(9207483097)

  const [color, setColor, setc, setb] = useState("Red")

  const ChangeName = () => {
    setName('Kiran')
  }

  const ChangePhone = () => {
    setPhone(8075414315)
  }
  const page = () => {

  }
  const [state, setState] = useState()

  console.log(state);

  const HandleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({ ...state, [e.target.name]: e.target.value })
  }
  // const [stat,setst]=useState()

  //  console.log(stat);
  // const Handlec=(e)=>
  // {
  //   console.log(e.target.name);
  //   console.log(e.target.value);

  //   setst({...state,[e.target.name]:e.target.value})
  // }

  const [colors, setcolor] = useState('black')

  const colord = (e) => {
    setColor(e.target.value)
  }


  return (
    <div>Usestate
      <h1>{name}</h1>
      <button onClick={ChangeName}>Change</button>
      <h1>{phone}</h1>
      <button onClick={ChangePhone}>Change</button>
      <h2 style={{ backgroundColor: "black", color: color }}>My Fav color is {color}</h2>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("orange")}>orange</button>
      <br />
      <input type='text' name='MyName' placeholder='Enter Your Name' onChange={(e) => HandleChange(e)} />
      <br />
      <input type='number' name='MyPhone' placeholder="enter your number" onChange={(e) => HandleChange(e)} />
      <br />
      <input type='text' name='MyAddress' placeholder="enter your Address" onChange={(e) => HandleChange(e)} />
      <br />
      <input type='email' name='MyEmail' placeholder="enter your Email id" onChange={(e) => HandleChange(e)} />
      <br />
      <input type='text' name='MyState' placeholder="enter your State" onChange={(e) => HandleChange(e)} />
      <br />

      <h1 style={{ backgroundColor: color, color: "yellow" }}>UseState</h1>
      <input type='text' name='MyState' onChange={colord} />
    </div>
  )
}
