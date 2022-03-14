import React from "react";
import classes from './Categories.module.css'

import { Form} from "react-bootstrap";

export default function Categories (props) {
    return (
            <div className={classes.container}>
                <div className={classes.selection}>
                    <span>Country</span>
                    <Form.Select style={{width: '150px'}} onClick = {(e) => {return props.oncountryclick(e.target.value)}}>
                        <option  value = 'in'>India</option>
                        <option  value = 'fr'>France</option>
                        <option  value = 'ru'>Russia</option>
                        <option  value = 'de'>Germany</option>
                        <option  value = 'au'>Australia</option>
                        <option  value = 'it'>Italy</option>
                        
                    </Form.Select>
                </div>
                <div className={classes.selection}>
                    <span>Category</span>
                    <Form.Select style={{width: '150px'}}  onClick={(e) => {return props.oncategoryclick(e.target.value)}}>
                        <option  value = 'technology'>Technology</option>
                        <option  value = 'business'>Business</option>
                        <option  value = 'health'>Health</option>
                        <option  value = 'science'>Science</option>
                        <option  value = 'entertainment'>Entertainment</option>
                        <option  value = 'sports'>Sports</option>

                    </Form.Select>
                </div>
            </div>
    )
}