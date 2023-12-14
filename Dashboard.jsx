import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import External from '../External.css'
import Nav from './Nav'

const Dashboard = () => {
  // Sample data, replace it with your actual data
  const petCount = 1;
  const recentAdoptions = 0;
  const availablePets = petCount - recentAdoptions;

  // Use the useParams hook to get the username from the route
  const { username } = useParams();

  return (
    <div className='images'>
      <Nav />
      <p style={{ backgroundColor: "maroon", color: "ButtonFace",fontSize:"40px" }}>Welcome, {username}!</p>
     
      <div>
      <p style={{fontWeight:"bolder"}}>WHY PET IS IMPORTANT ?</p>
      <p style={{fontWeight:"bolder",fontSize:"30px",textAlign:"center"}}>Pets are a great blessing in anyone’s life. They are the only ones who love us unconditionally. Pets always offer us everything they have without asking for anything in return. The main aim of any pet’s life is to make their owner happy. Nowadays, even the term ‘owner’ is changing. People prefer their pets as kids and to themselves as parents. This is how the relationship between pets is evolving. People treat them no less than humans. For instance, they celebrate their birthdays; get those matching outfits and more.

In my opinion, I feel the pets rightly deserve it. The most common pet you can find at anyone’s place is dogs. A man’s best friend and the most faithful animal, a dog. I also have a pet dog that I love to bits. We got him when he was a little baby and have watched him grow into a beautiful dog. All my family members love him with all their heart. We love his silly antics and cannot imagine our lives without him. We named him Sasha.</p>
      </div>
    </div>
  );
};

export default Dashboard;
