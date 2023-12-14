import React from 'react'
import '../External.css';
import { useNavigate } from 'react-router-dom'
export default function Home() {
    let navigate = useNavigate()

    const handleAdmin = () => {
        console.log('Admin Clicked')
        navigate('/Adminlanding')


    }
    const handleUser = () => {
        console.log('User Clicked')
        navigate('/Home')
    }

    return (
        <>
       
            <div className="Home-container">
                <div className="inside-home-container">
                    <div onClick={handleAdmin} className="admin">
                        <div className="avtar">
                            <div>
                                <img style={{ width: '300px' }} src="https://img.freepik.com/premium-vector/3d-avatar_665280-46961.jpg?size=626&ext=jpg&ga=GA1.2.2085414695.1694409554&semt=ais" alt="" />
                            </div>
                        </div>
                        <h1 style={{color:"blue",fontWeight:"bolder",fontFamily:"initial"}}>Admin </h1>
                    </div>
                    <div onClick={handleUser} className="user">
                        <div className="avtar">
                            <div>
                                <img style={{ width: '300px' }} src="https://img.freepik.com/premium-vector/3d-avatar_665280-46959.jpg?size=626&ext=jpg&ga=GA1.1.2085414695.1694409554&semt=ais" alt="" />
                            </div>
                        </div>
                        <h1 style={{color:"blue",fontWeight:"bolder",fontFamily:"initial"}}>User</h1>
                    </div>

                </div>

            </div>
            
        </>
    )
}
