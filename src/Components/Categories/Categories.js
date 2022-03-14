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
                    <span>Language</span>
                    <Form.Select style={{width: '150px'}}  onClick={(e) => {return props.onlanguageclick(e.target.value)}}>
                        <option  value = 'hi'>Hindi</option>
                        <option  value = 'en'>English</option>
                        <option  value = 'te'>Telugu</option>
                        <option  value = 'fr'>French</option>
                        <option  value = 'it'>Italian</option>
                        <option  value = 'ru'>Russian</option>
                        <option  value = 'de'>German</option>
                    </Form.Select>
                </div>
                <div className={classes.selection}>
                    <span>Category</span>
                    <Form.Select style={{width: '150px'}}  onClick={(e) => {return props.oncategoryclick(e.target.value)}}>
                        <option  value = 'world'>World</option>
                        <option  value = 'technology'>Technology</option>
                        <option  value = 'breaking-news'>Breaking-News</option>
                        <option  value = 'sports'>Sports</option>
                        <option  value = 'science'>Science</option>
                        <option  value = 'health'>Health</option>
                        <option  value = 'nation'>National</option>
                        <option  value = 'business'>Business</option>
                        <option  value = 'entertainment'>Entertainment</option>
                    </Form.Select>
                </div>
            </div>
    )
}