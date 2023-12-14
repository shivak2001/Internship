import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';
import Nav1 from './Nav1'
export default function Petregister() {
  let nav=useNavigate()
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let pet_id = 101;
    let old = localStorage.getItem('PetRegistration');
    old = JSON.parse(old) || [];

    if (old && old.length > 0) {
      pet_id = old[old.length - 1].pet_id + 1;
    }

    let newuser = {
      pet_id: pet_id,
      name: user.name,
      breed: user.breed,
      behaviour: user.behaviour,
      gender: user.gender,
      category: user.category,
      description: user.description,
      age: user.age,
      owner: user.owner,
      phone: user.phone,
      location: user.location,
      image:user.image
    };

    const allData = [...old, newuser];
    localStorage.setItem('PetRegistration', JSON.stringify(allData));
    nav('/Viewpet')
  };

  return (
    <Card style={{ margin: 'auto', marginTop: '20px', padding: '20px' }}>
      <Nav1/>
      <h1 style={{ backgroundColor: "red", textAlign: 'center',fontWeight:"bolder"}}>PET REGISTRATION</h1>
      <CardContent>
      <label style={{fontWeight:"bolder"}}>Pet Name: </label>
        <TextField name="name" onChange={handleChange} label="Pet Name" type="text" placeholder='Enter Pet name' required fullWidth />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Pet Breed: </label>

        <TextField name="breed" onChange={handleChange} label="Pet Breed Name" type="text" placeholder='Enter Breed name' required fullWidth />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Behaviour: </label>
        <Select style={{width:"100%",height:"50%"}} name='behaviour' onChange={handleChange} className='select'>
        <MenuItem value='normal' >Normal</MenuItem>
        <MenuItem value='medium' >Medium</MenuItem>
        <MenuItem value='aggressive' >Aggressive</MenuItem>
        </Select>         <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Gender: </label>
        <Select style={{width:"100%",height:"50%"}} name='gender' onChange={handleChange} className='select'>
        <MenuItem value='male' >Male</MenuItem>
        <MenuItem value='female' >Female</MenuItem>
        </Select>         
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Category: </label>
        <Select style={{width:"100%",height:"50%"}} name='category' onChange={handleChange} className='select' >
        <MenuItem value='cat' >Cat</MenuItem>
        <MenuItem value='dog' >Dog</MenuItem>
        <MenuItem value='cow' >Cow</MenuItem>
        </Select>        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Description: </label>

        <TextField name="description" onChange={handleChange} label="Pet Description" type="text" placeholder='Enter Description' required fullWidth />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Age: </label>

        <TextField name="age" onChange={handleChange} label="Pet age" type="text" placeholder='Enter pet age' required fullWidth />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Image: </label>

        <TextField name="image" onChange={handleChange} label="Pet Image Path" type="text" placeholder='Enter pet image' required fullWidth />
        <br />
        <br />
        <h1 style={{ backgroundColor: "red", textAlign: 'center',fontWeight:"bolder"}}>OWNER DETAILS</h1>
        <label style={{fontWeight:"bolder"}}>Owner Name: </label>

        <TextField name="owner" onChange={handleChange} label="Owner Name" type="text" placeholder='Enter pet Owner' required fullWidth />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Owner Phone: </label>

        <TextField name="phone" onChange={handleChange} label="Owner Contact Number" type="Number" placeholder='Enter Owner Phone' required fullWidth />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}> Location: </label>

        <TextField name="location" onChange={handleChange} label="Owner Location" type="text" placeholder='Enter pet Location' required fullWidth />
        <br />
        <br />
        <Button onClick={handleSubmit} variant="contained" fullWidth>
          AddPet
        </Button>
      </CardContent>
    </Card>
  );
}
