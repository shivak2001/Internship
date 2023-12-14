import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Adminlanding() {
    let nav=useNavigate()
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
        <Button style={{fontSize:"30px",backgroundColor:"red"}} onClick={()=>nav('/Loginadmin')} variant="contained">Login</Button><br/><br/>
        <Button style={{fontSize:"30px",backgroundColor:"red"}} onClick={()=>nav('/Adminregister')} variant="contained">Sign Up</Button>

    </div>
  )
}
