import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  function app()
  {
    alert("Hello")
  }
  return (
    <div>Thank You!
      <br/>
      <Link to="/Arrow">Arrow</Link>
      <br/>
      <Link to="/Arraymethods">Arraymethods</Link>
      <br/>
      <Link to="/Conditional">Conditional</Link>
      <br/>
      <Link to="/Events">Events</Link>
      <br/>
      <Link to="/Imp">Import</Link>
      <br/>
      <Link to="/Props">Props</Link>
      <br/>
      <Link to="/Ternary">Ternary</Link>
      <br/>
      <Link to="/Spread">Spread</Link>
      <br/>
      <Link to="/Variable">Variable</Link>
      <br/>
      <Link to="/Usestate">Usestate</Link>
      <br/>
      <Link to="{notfound}">Abcd</Link>
      <br/>
      <Link to="/Useeffect">Useeffect</Link>
      <br/>
      <Link to="/Localstorage">Localstorage</Link>
    </div>
  )
}
