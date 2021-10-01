import React from 'react'
import {Container, Col, Row} from "react-bootstrap"
import AllPosts from '../AllPosts'


function Home() {
    return (       
        <Container>
            
            <Row className="justify-content-center">
            <Col xs={6} sm={6} md={8} xl={10} >
            <AllPosts />   
            </Col>
            </Row>
            
        </Container>
                       
    )
}

export default Home
