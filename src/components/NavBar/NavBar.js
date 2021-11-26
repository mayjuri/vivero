import React from 'react'
import './NavBar.css'
//import logo from './logo.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

export default function NavBar() {
    return ( <
        AppBar position = "static" >
        <
        nav >
        <
        div className = "container-logo" >
        <
        img src = { process.env.PUBLIC_URL + "./logo.png" }
        alt = "Logo vivero" / >
        <
        /div> <
        ul >
        <
        li > < Button variant = "container" > Inicio < /Button></li >
        <
        li > < Button variant = "container" > Productos < /Button></li >
        <
        li > < Button variant = "container" > Servicios < /Button></li >
        <
        li > < Button variant = "container" > Contacto < /Button></li >
        <
        /ul>  <
        /nav> <
        /AppBar>
    )
}