// Details.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { index } = useParams();
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    // Retrieve pet details from local storage
    const petData = JSON.parse(localStorage.getItem("PetRegistration"));

    // Check if the index is valid and petData is available
    if (petData && index >= 0 && index < petData.length) {
      setSelectedPet(petData[index]);
    }
  }, [index]);
  
  return (
    <div style={{fontWeight:"bolder"}} className='img'>
      {selectedPet ? (
        <div>
          <h1 style={{fontWeight:"bolder",backgroundColor:'red'}}>{selectedPet.name}'s Details</h1>
          <img src={selectedPet.image} alt={selectedPet.name} style={{ maxWidth: '100%', height: '300px' }} />
          <p style={{fontWeight:"bolder"}}>Pet Name: {selectedPet.name}</p>
          <p style={{fontWeight:"bolder"}}>Breed: {selectedPet.breed}</p>
          <p style={{fontWeight:"bolder"}}>Age: {selectedPet.age} years</p>
          <p style={{fontWeight:"bolder"}}>Behaviour: {selectedPet.behaviour}</p>
          <p style={{fontWeight:"bolder"}}>Gender: {selectedPet.gender}</p>
          <p style={{fontWeight:"bolder"}}>Category: {selectedPet.category}</p>
          <h1 style={{fontWeight:"bolder",backgroundColor:'red'}}>Owner Details</h1>
          <p style={{fontWeight:"bolder"}}>Owner: {selectedPet.owner}</p>
          <p style={{fontWeight:"bolder"}}>Location: {selectedPet.location}</p>
          <p style={{fontWeight:"bolder"}}>Phone: {selectedPet.phone}</p>
        </div>
      ) : (
        <div>No details available for this pet.</div>
      )}
    </div>
  );
};

export default Details;
