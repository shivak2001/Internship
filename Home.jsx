import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
export default function Home() {
  function app()
  {
    alert("Hello")
  }
  return (
    <div>Thank You!
      <br/>
      <br/>
      <Link to="/Arrow"><Button color="warning"  endIcon={<SendIcon />} variant="contained">Arrow</Button></Link>
      <br/>
      <br />
      <Link to="/Arraymethods"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Arraymethods</Button></Link>
      <br/>
      <br />
      <Link to="/Conditional"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Conditional</Button></Link>
      <br/>
      <br/>
      <Link to="/Events"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Events</Button></Link>
      <br/>
      <br />
      <Link to="/Imp"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Import</Button></Link>
      <br/>
      <br />
      <Link to="/Props"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Props</Button></Link>
      <br/>
      <br />
      <Link to="/Ternary"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Ternary</Button></Link>
      <br/>
      <br />
      <Link to="/Spread"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Spread</Button></Link>
      <br/>
      <br />
      <Link to="/Variable"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Variable</Button></Link>
      <br/>
      <br />
      <Link to="/Usestate"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Usestate</Button></Link>
      {/* <br/>
      <Link to="{notfound}">Abcd</Link> */}
      <br/>
      <br />
      <Link to="/Useeffect"><Button color="warning" endIcon={<SendIcon />} variant="contained">Useeffect</Button></Link>
      <br/>
      <br />
      <Link to="/Localstorage"><Button color="warning" endIcon={<SendIcon />}  variant="contained">Localstorage</Button></Link>
      <br/>
      <br />
      <Link to="/View"><Button color="warning" endIcon={<SendIcon />} variant="contained">View</Button></Link>
      <br />
      <br />
      <Link to="/Employee"><Button color="warning" endIcon={<SendIcon />} variant="contained">Employee</Button></Link>

    </div>
  )
}
