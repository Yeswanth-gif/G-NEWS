import React, {useState, useEffect} from "react";
import { Card, Button, Spinner} from "react-bootstrap";
import classes from './news-cards.module.css';

export default function Newscard(props) {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)

    useEffect (() => {
        setloading(true)
        fetch(`https://gnews.io/api/v4/top-headlines?lang=${props.language}&country=${props.country}&topic=${props.category}&token=c2d03581ea39a14d9f4f722adb385d07`)
        .then(response => {return response.json()})
        .then(e => {setloading(false); setarticles(e.articles)})
    }, [props.country, props.language, props.category])

    let cmp = articles.map((value, index) => {
        const d = new Date(value.publishedAt);
        const x = d.toLocaleDateString(d);
        const t = d.toLocaleTimeString(d);
        if((value.content) || (value.description)){
            return (
                <Card  key = {index} className = {classes.card}>
                <Card.Img variant="top" src={value.image ? value.image : 'https://mykskhomes.com/assets/css/restaurant/images/default.png'}  style = {{width: '100%', height:'300px'}}/>
                <Card.Body>
                    <Card.Title title={value.title} style = {{overflow:'hidden', textOverflow: 'ellipsis', width:'100%', height:'75px'}} className={classes.title}>{value.title}</Card.Title>
                    <Card.Text title={value.description} style={{width:'100%', height : '100px', textOverflow : 'ellipsis', overflow:'hidden' }}>
                        {value.content ? value.content : value.description}
                    </Card.Text>
                    
                    <a href={value.url}><Button variant="primary">Read More</Button></a>
                    <p style= {{marginTop: '10px'}}>Source: <b>{value.source.name}</b></p>
                    <p >PublishedAt : <b>{
                    x + ' '+ t
                    }</b></p>
                </Card.Body>
                </Card>
            )
        }else{
            return null;
        }
    } )
        
    return (
        <div className={classes.container}>
           {loading ? <Spinner animation="border" variant="danger" /> : cmp}
           {(!loading && articles.length == 0) ? (<h1 style={{color : 'white'}}>Seems Like No news are avialable in your preferred Language or Country</h1>) : null}
        </div>
    )
}