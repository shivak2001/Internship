import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import Localstorage from './Localstorage'
import View from './View'
import Dashboard from './Dashboard'
import Petadoption from'./Petadoption'
import Addpet from './Addpet'
import Loginadmin from './Loginadmin'
import Adminregister from './Adminregister'
import Adminhome from './Adminhome'
import Viewpet from './Viewpet'
import Details from './Details'
import EditPet from './Editpet'
import Adminlanding from './Adminlanding'
import Landingpage from './Landingpage'
export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landingpage/>} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/Login" element={<Login/>} />
                <Route exact path="/Registration" element={<Registration/>} />
                <Route exact path="/Localstorage" element={<Localstorage/>} />
                <Route exact path="/View" element={<View/>} />
                <Route path="/Dashboard/:username" element={<Dashboard />} />
                <Route exact path="/Petadoption" element={<Petadoption/>} />
                <Route exact path="/Loginadmin" element={<Loginadmin/>}/>
                <Route exact path="/Adminregister" element={<Adminregister/>}/>
                <Route exact path="/Addpet" element={<Addpet/>}/>
                <Route exact path='/Adminhome' element={<Adminhome/>}/>
                <Route exact path='/Viewpet' element={<Viewpet/>}/>
                <Route exact path='/Details/:index' element={<Details/>}/>
                <Route exact path='/Editpet/:petId' element={<EditPet/>}/>
                <Route exact path='/Adminlanding' element={<Adminlanding/>}/>
            </Routes>
        </BrowserRouter>
    )
}
