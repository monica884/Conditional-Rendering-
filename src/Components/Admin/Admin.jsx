import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function Admin() {
    const [logout,setLogout]=useState(false)
    const navigate = useNavigate();
    if(logout){
        navigate('/'); 
    }   
    return (
        <>
            <h1>h1 admin</h1>
            <Button onClick={()=>setLogout(true)}>Logout</Button>
        </>
    );
}