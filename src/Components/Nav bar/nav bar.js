import React, {useState} from "react";
import {Button, Offcanvas} from 'react-bootstrap'
import Categories from  "../Categories/preferences";

export default function NavBar({name, ...props}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2" style = {{backgroundColor : "black", border : '0px', padding : '0px'}}>
            <img src = 'https://icon-library.com/images/icon-bars/icon-bars-2.jpg' style = {{width : '40px', padding : '0px', height : '30px'}}/>
        </Button>
        <Offcanvas show={show}onHide={handleClose} {...props}  style = {{width : '200px', backgroundColor :'black'}}>
          <Offcanvas.Header   style={{color :'white'}}>
            <Offcanvas.Title style={{color:'white'}}>Select Your Preferences
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Categories onlangclick = {props.onlanguageclick} oncatclick = {props.oncategoryclick} oncntclick = {props.oncountryclick} language = {props.language} country = {props.country} category = {props.category} />
        </Offcanvas>
      </>
    );
  }
  