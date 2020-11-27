import React from 'react'
import {Card, Button} from 'react-bootstrap'


const NewsItem = ({item}) => {
    

    return (
        <section className="NewsItem">
            <Card>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="light">Go somewhere</Button>
            </Card.Body>
            </Card>
        </section>
    )
}

export default NewsItem