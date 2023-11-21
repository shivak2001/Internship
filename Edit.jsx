import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Edit() {
  let {item}=useParams()
  let nav=useNavigate()


//   console.log(item);

const [user,setUser]=useState({})

  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("Users"))
    let single_data=data.filter((value,i)=>{
        // if(value.user_id == item)
        // {
        //     index=i
        // }
       
      return i == item
    })
    console.log(single_data,8888)
    setUser(...single_data)
 },[])

 console.log(user,99999);

 const Handlechange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}

const Edit=()=>{
  let data=JSON.parse(localStorage.getItem("Users"))
  data.splice(item,1,user)
  console.log(data)
  localStorage.setItem("Users",JSON.stringify(data))
  nav('/View')

}
  return (
    <div>
        <h1>Edit</h1>
<br/>
<TextField value={user.name} name="name" onChange={Handlechange} id="outlined-basic" label="Enter Your Name" variant="outlined" size="small"/>
<br/>
<br/>
<TextField value={user.phone} name="phone" onChange={Handlechange} id="outlined-basic" label="Enter Your Phone" variant="outlined" size="small"/>
<br/>
<br/>
<TextField value={user.email} name="email" onChange={Handlechange} id="outlined-basic" label="Enter Your Email Id" variant="outlined" size="small"/>
<br/>
<br/>
<Button onClick={Edit} variant="contained" color="success">Edit</Button>
    </div>
  )
}
