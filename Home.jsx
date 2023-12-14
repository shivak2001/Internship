import React from 'react'
import Button from '@mui/material/Button';
import '../External.css';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let nav=useNavigate();
  return (
    <div className='image'>
        {/* <h1>Home</h1> */}
        <br/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button style={{fontSize:"30px",backgroundColor:"red"}} onClick={()=>nav('/Login')} variant="contained">Login</Button><br/><br/>
        <Button style={{fontSize:"30px",backgroundColor:"red"}} onClick={()=>nav('/Registration')} variant="contained">Sign Up</Button>

    </div>
  )
}
