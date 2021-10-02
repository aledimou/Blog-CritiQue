import React,{useState} from 'react'
import { Card, Button, Container, Row} from 'react-bootstrap'
import {Blogposts} from "../assets/content.js"
import {Link} from "react-router-dom";

    const styleHF = {
        textDecoration: "none",
        fontSize: "1.2rem",
        color: "#F6F6F6",

    }

    const styleHover = {
        color: "#F0A500",
        cursor: "pointer"

    }

    

function AllPosts() {

    const [active, setActive] = useState()
    const [articles, setArticles] = useState(Blogposts)

    const hoverEffect = ()=>{
        setActive(!active)
    }

    return (
        <Container >
            {articles.map((article)=>{
               const  {title, category, image, id, content } = article;
                return (
                    <Card key={id} className= "text-center mt-3" >
                    
                    <Card.Header style={styleHF} className= "bg-dark">{category}</Card.Header>
                    <Container  className = "align-items-center justify-content-center">
                    <Card.Img src={image} alt="Card image" style={{height: "35em",width:"50%"}} />
                    </Container>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {content.slice("0","200")}<Link to={category}>...</Link>
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="bg-dark "><Link  style = {active?styleHover:styleHF} to= {category}>#{category}</Link></Card.Footer>
                    </Card>
                )
            })}
           
        </Container>
    )
}

export default AllPosts
