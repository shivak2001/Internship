import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Arrow from './Arrow'
import Arraymethods from './Arraymethods'
import Spread from './Spread'
import Ternary from './Ternary'
import Destruct from './Destruct'
import Events from './Events'
import Props from './Props'
import Imp from './Imp'
import Conditional from './Conditional'
import Variable from './Variable'
import Usestate from './Usestate'
import Useeffect from './Useeffect'
import Localstorage from './Localstorage'
export default function Router() {
  return (

    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Arrow" element={<Arrow/>}/>
        <Route exact path="/Arraymethods" element={<Arraymethods/>}/>
        <Route exact path="/Spread" element={<Spread/>}/>
        <Route exact path="/Ternary" element={<Ternary/>}/>
        <Route exact path="/Destruct" element={<Destruct/>}/>
        <Route exact path="/Events" element={<Events/>}/>
        <Route exact path="/Props" element={<Props/>}/>
        <Route exact path="/Imp" element={<Imp/>}/>
        <Route exact path="/Conditional" element={<Conditional/>}/>
        <Route exact path="/Variable" element={<Variable/>}/>
        <Route exact path="/Usestate" element={<Usestate/>}/>
        <Route exact path="/Useeffect" element={<Useeffect/>}/>
        <Route exact path="/Localstorage" element={<Localstorage/>}/>

    </Routes>
    </BrowserRouter>
   
  )
}
