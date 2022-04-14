import React from "react";
import classes from './Top-bar.module.css'
import NavBar from "../Nav bar/nav bar";

export default function Topbar (props) {
    let x = parseInt(window.screen.availWidth) >= 900 ? "G-NEWS" : "G NEWS" 
    return (
        <div className={classes.container}>
            <h3>{x}</h3>
            <NavBar  name = 'test' scroll = {true} backdrop =  {true}  onlanguageclick = {props.onlanguageclick} oncategoryclick = {props.oncategoryclick} oncountryclick = {props.oncountryclick} language = {props.language} country = {props.country} category = {props.category}/>
        </div>
    )
}