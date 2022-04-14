import React, {Component, useEffect, useState, ComponentDidMount} from "react";
import classes from './Categories.module.css'
import {languages} from '../../Utils/Languages.js'
import { countries } from "../../Utils/Country";
import {categories} from "../../Utils/Category";

export default function Categories (props) {
    const [checkedState, setCheckedState] = useState(
        new Array(languages.length).fill(false)
      );
      const [checkedStatecnt, setCheckedStatecnt] = useState(
        new Array(languages.length).fill(false)
      );
      const [checkedStatecat, setCheckedStatecat] = useState(
        new Array(languages.length).fill(false)
      );

      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => 
          index === position ? !item : false
        );
    
        setCheckedState(updatedCheckedState);
      };
      const handleOnChangecnt = (position) => {
        const updatedCheckedState = checkedStatecnt.map((item, index) => 
          index === position ? !item : false
        );
    
        setCheckedStatecnt(updatedCheckedState);
      };
     
    
      const handleOnChangecat = (position) => {
        const updatedCheckedState = checkedStatecat.map((item, index) => 
          index === position ? !item : false
        );
    
        setCheckedStatecat(updatedCheckedState);
      };
      useEffect(() =>{
        const updatedCheckedState = languages.map((item, index) => 
            (item.value === props.language ? true : false)
            
          );
          setCheckedState(updatedCheckedState);
            const updatedCheckedStatecnt = countries.map((item, index) => 
              item.value === props.country ? true : false
            );
        
            setCheckedStatecnt(updatedCheckedStatecnt);

            const updatedCheckedStatecat = categories.map((item, index) => 
              item.value === props.category ? true : false
            );
        
            setCheckedStatecat(updatedCheckedStatecat);

      }, [props.language, props.country, props.category]
      );

    return (
      <div style={{"overflow-y":"scroll"}}>
        <h3 style={{color:"white"}}>Language</h3>
          <ul className="toppings-list" style={{"listStyleType" : "none"}}>
                  {languages.map(({ value, name }, index) => {
                  return (
                      <li key={index}>
                      <div className="toppings-list-item">
                          <div className="left-section">
                          <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={value}
                              checked={checkedState[index]}
                              onChange={(e) => {handleOnChange(index);props.onlangclick(e.target.value)}}
                          />
                          <label style={{color:"white"}} htmlFor={`custom-checkbox-${index}`}>{name}</label>
                          </div>
                      </div>
                      </li>
                  );
                  })}
          </ul>
          <h3 style={{color:"white"}}>Country</h3>
          <ul className="toppings-list" style={{"listStyleType" : "none"}}>
                  {countries.map(({ value, name }, index) => {
                  return (
                      <li key={index}>
                      <div className="toppings-list-item">
                          <div className="left-section">
                          <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={value}
                              checked={checkedStatecnt[index]}
                              onChange={(e) => {handleOnChangecnt(index);props.oncntclick(e.target.value)}}
                          />
                          <label style={{color:"white", paddingLeft: "10px"}} htmlFor={`custom-checkbox-${index}`}>{name}</label>
                          </div>
                      </div>
                      </li>
                  );
                  })}
          </ul>
          <h3 style={{color:"white"}}>Category</h3>
          <ul className="toppings-list" style={{"listStyleType" : "none"}}>
                  {categories.map(({ value, name }, index) => {
                  return (
                      <li key={index}>
                      <div className="toppings-list-item">
                          <div className="left-section">
                          <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={value}
                              checked={checkedStatecat[index]}
                              onChange={(e) => {handleOnChangecat(index);props.oncatclick(e.target.value)}}
                          />
                          <label style={{color:"white", paddingLeft: "10px"}} htmlFor={`custom-checkbox-${index}`}>{name}</label>
                          </div>
                      </div>
                      </li>
                  );
                  })}
          </ul>
      </div>
      
           
            
    )
  
}