import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../styles/SingleCard.css"

const SingleCard = ({ asin, title, category, price, img, setSelected, selected }) => {
    return (
        <div>
            <Card className={`single-card ${selected ? "border border-danger shadow" : null}`} style={{ width: '17rem', margin: "0", }} onClick={() => setSelected(asin)}>
                <Card.Img
                    variant="top"
                    src={img}
                    alt={title}
                />
                <Card.Body key={asin}>
                    <Card.Title className="text-truncate">{title}</Card.Title>
                    <Card.Text className="mb-4">Genre: {category.charAt(0).toUpperCase() + category.slice(1)}</Card.Text>
                    <Card.Text>Price: £{price}</Card.Text>
                    <Card.Text>ASIN: {asin}</Card.Text>
                    <div className='d-flex justify-content-center'>
                        <Link to={`/book/${asin}`}>
                            <Button className="details mx-1 my-1 px-1 py-1">Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleCard