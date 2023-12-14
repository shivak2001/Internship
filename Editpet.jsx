import { MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import '../External.css';
const EditPetPage = () => {
  const { petId } = useParams();
  let nav = useNavigate()
  const [editedPet, setEditedPet] = useState({});

  useEffect(() => {
    // Fetch the pet details from localStorage based on petId
    let petDetails = JSON.parse(localStorage.getItem("PetRegistration"))
    let singlePet = petDetails.filter((item) => { return item.pet_id == petId })

    // Set the fetched pet details to the state
    console.log(singlePet, 333333333333)
    setEditedPet(...singlePet);
  }, [petId]);

  const handleSaveChanges = () => {
    // Fetch the existing pet registrations from localStorage
    const existingPetRegistrations = JSON.parse(localStorage.getItem("PetRegistration"));

    // Find the index of the pet to be updated
    const petIndex = existingPetRegistrations.findIndex((pet) => pet.pet_id == petId);

    // Create a copy of the existing pet details
    const updatedPet = { ...existingPetRegistrations[petIndex] };
    existingPetRegistrations.splice(petIndex,1,editedPet)

    // Save the updated pet details back to localStorage
    localStorage.setItem("PetRegistration", JSON.stringify(existingPetRegistrations));

    // Navigate back to the ViewPet page after saving changes
    nav('/ViewPet');
  };

  if (!editedPet) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    setEditedPet({ ...editedPet, [e.target.name]: e.target.value })
  }
  console.log(editedPet,99999)
  return (
    <div className='i'>
      <h2 style={{fontWeight:"bolder",backgroundColor:"red"}}> Pet Details</h2>
      <form>
        <label style={{fontWeight:"bolder"}}>Name: </label>
        <input style={{width:"50%",height:"50px"}} name='name'
          type="text"
          value={editedPet?.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Breed: </label>
        <input  style={{width:"50%",height:"50px"}} name='breed'
          type="text"
          value={editedPet?.breed}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Behaviour: </label>
        
        <Select style={{width:"50%"}} name='behaviour' onChange={handleChange} className='select' value={editedPet?.behaviour || ''}>
        <MenuItem value='normal' >Normal</MenuItem>
        <MenuItem value='medium' >Medium</MenuItem>
        <MenuItem value='aggressive' >Aggressive</MenuItem>
        </Select> 
                
        <br />
        <br />
         
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Description: </label>
        <input style={{width:"50%",height:"50px"}} name='description'
          type="text"
          value={editedPet?.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Gender: </label>
        <Select style={{width:"50%"}} name='gender' onChange={handleChange} className='select' value={editedPet?.gender || ''}>
        <MenuItem value='male' >Male</MenuItem>
        <MenuItem value='female' >Female</MenuItem>
        </Select> 
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Age: </label>
        <input style={{width:"50%",height:"50px"}} name='age'
          type="text"
          value={editedPet?.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Image: </label>
        <input style={{width:"50%",height:"50px"}} name='image' type="text" value={editedPet?.image} onChange={handleChange}/>
        <br />
        <br />
        <h1 style={{fontWeight:"bolder",backgroundColor:"red"}}>Owner Details</h1>
        <label style={{fontWeight:"bolder"}}>Owner Name: </label>
        <input style={{width:"50%",height:"50px"}} name='owner'
          type="text"
          value={editedPet?.owner}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Phone: </label>
        <input style={{width:"50%",height:"50px"}} name='phone'
          type="text"
          value={editedPet?.phone}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{fontWeight:"bolder"}}>Location: </label>
        <input style={{width:"50%",height:"50px"}} name='location'
          type="text"
          value={editedPet?.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <button style={{fontWeight:"bolder"}} type="button" onClick={handleSaveChanges}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditPetPage;
