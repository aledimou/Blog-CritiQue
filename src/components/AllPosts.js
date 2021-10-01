import React,{useState} from 'react'
import { Card, Button, Container, Row} from 'react-bootstrap'
import {Blogposts} from "../assets/content.js"
function AllPosts() {
    const [articles, setArticles] = useState(Blogposts)
    return (
        <Container >
            {articles.map((article)=>{
               const  {title, category, image, id, content } = article;
                return (
                    <Card key={id} className= "text-center mt-3" >
                    
                    <Card.Header>{category}</Card.Header>
                   
                    <Card.Img src={image} alt="Card image"  />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {content.slice("0","200")}<a href = "#">...</a>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"><a href = "#">#{category}</a></Card.Footer>
                    </Card>
                )
            })}
           
        </Container>
    )
}

export default AllPosts
