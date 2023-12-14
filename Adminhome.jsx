import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import '../External.css';
import Nav1 from './Nav1'
export default function Adminhome() {
  return (
    <div>
      <Nav1/>
      {/* <h1 style={{backgroundColor:"yellow",fontWeight:"bolder"}}>Admin Home</h1> */}
        <img id='id' src='https://www.loveyourdog.com/wp-content/uploads/2021/08/Golden-Retriever-Prices-Puppies-1344x746.jpg.webp' alt='image'/>
        {/* <Link to="/Addpet"><Button  style={{backgroundColor:"red",fontWeight:"bolder"}} variant="contained">Add Pet</Button></Link> */}
        {/* <Link to="/Viewpet"><Button  style={{backgroundColor:"red",fontWeight:"bolder"}} variant="contained">View Pet</Button></Link> */}
    </div>
  )
}
