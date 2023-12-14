
import React, { useEffect, useState } from 'react';
import { Link, json, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import Nav from './Nav'
const petsData = [
    { id: 1, name: 'Buddy', breed: 'Labrador Retriever', age: 3, available: true, imageUrl: 'data:image/jpeg;base64,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' },
    { id: 2, name: 'Max', breed: 'German Shepherd', age: 2, available: true, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmcjs7pt7r8_ZxASM_t9MP_TuPT81wSVw7Q&usqp=CAU' },
    { id: 3, name: 'Luna', breed: 'Golden Retriever', age: 1, available: true, imageUrl: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D' }
];


const AdoptionPage = () => {
    let nav=useNavigate()
    const { petId } = useParams();
    const [selectedPet, setSelectedPet] = useState(null);

    // Find the selected pet based on the URL parameter
    const selectedPetInfo = petsData.find((pet) => pet.id === parseInt(petId));

    const handleAdopt = () => {
        // Find the index of the selected pet in the petsData array
        const petIndex = petsData.findIndex((pet) => pet.id === parseInt(petId));

        // Update the petsData array with the adopted pet
        petsData[petIndex] = { ...petsData[petIndex], available: false };

        // Set the selectedPet state
        setSelectedPet(petsData[petIndex]);

        // Handle the adoption process here (e.g., show a confirmation message)
        alert(`You have adopted ${petsData[petIndex].name}!`);
    };

    const [pet, setPet] = useState([])
    

    useEffect(() => {
        let p = JSON.parse(localStorage.getItem("PetRegistration")) || []
        setPet(p)
    }, [])
  
    const handleDelete = (petId) => {
        // Find the index of the selected pet in the petsData array
        const petIndex = pet.findIndex((p) => p.user_id === petId);
    
        // Remove the pet from the state
        const updatedPets = [...pet.slice(0, petIndex), ...pet.slice(petIndex + 1)];
        setPet(updatedPets);
    
        // Update the local storage
        localStorage.setItem('PetRegistration', JSON.stringify(updatedPets));
    
        // Handle the delete process here (e.g., show a confirmation message)
        alert(`Pet with ID ${petId} has been deleted.`);
      };
      const handleEdit = (index) => {
        const selectedPet = pet[index];
        setSelectedPet(selectedPet);
    
        // Navigate to the EditPet page with the selected pet's ID
        nav(`/EditPet/${selectedPet.user_id}`);
    };
    
    const PetCard = ({ pet ,index}) => (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                <img src={pet.image} alt={pet.name} style={{ maxWidth: '100%', height: '200px' }} />
                <Typography variant="h5" component="div">
                    {pet.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Breed: {pet.breed}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Age: {pet.age} years
                </Typography>
                <Link to={`/Details/${index}`}><Button  style={{backgroundColor:"red",fontWeight:"bolder"}} variant="contained">View Pet Details</Button> </Link>
                <br />
                <br />
            </Paper>
        </Grid>
    );
    return (
        <div>
            <Nav/>

            {selectedPetInfo ? (
                <Card sx={{ backgroundColor: "ee" }}>
                    <img src={selectedPetInfo.imageUrl} alt={selectedPetInfo.name} />
                    <CardContent>
                        <Typography variant="h4" component="div">
                            {selectedPetInfo.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            Breed: {selectedPetInfo.breed}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            Age: {selectedPetInfo.age} years
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            Availability: {selectedPetInfo.available ? 'Available' : 'Adopted'}
                        </Typography>
                        {selectedPetInfo.available && (
                            <Button variant="contained" color="primary" onClick={handleAdopt} style={{ marginTop: '20px' }}>
                                Adopt {selectedPetInfo.name}
                            </Button>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <Typography variant="h6"></Typography>
            )}

            <div style={{ marginTop: '20px' }}>
                <Typography style={{ backgroundColor: "Yellow", color: "black", fontWeight: "bolder" }} variant="h5">Available Pets</Typography>
                <Grid container spacing={3}>
                    {pet.map((pet,index) => (
                        <PetCard key={pet.id} pet={pet} index={index} />
                    ))}
                </Grid>
            </div>
            <br />
        </div>
    );
};

export default AdoptionPage;
