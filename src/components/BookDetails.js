import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { Button, Card } from 'react-bootstrap'
import { ClipLoader } from "react-spinners"
import "../styles/SingleBookDetails.css"
import "../styles/Loader.css"

const BookDetails = () => {
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { asin } = useParams()
    const bookDetails = async () => {
        setLoading(true);
        try {
            const data = await fetch(`https://epibooks.onrender.com/${asin}`);
            const response = await data.json();
            setDetails(response);
            setLoading(false);
        } catch (error) {
            if (error) setError("Something, somewhere, went terribily wrong.");
        }
    }
    useEffect(() => {
        bookDetails();
    }, []);
    return (
        <>
            <Navigation />
            {loading && <ClipLoader color='pink' />}
            {!loading && error && <div style={{ color: "red" }}>Loading error</div>}
            {!loading && !error && details &&
                <Card className="card">
                    <Card.Img className="card-img" variant="top" src={details[0].img} />
                    <Card.Body>
                        <Card.Title>{details[0].title}</Card.Title>
                        <Card.Text>Genre: {details[0].category.charAt(0).toUpperCase() + details[0].category.slice(1)}</Card.Text>
                        <Card.Text>Price: £{details[0].price}</Card.Text>
                        <Card.Text>ASIN: {details[0].asin}</Card.Text>
                    </Card.Body>
                </Card >
            }
            <Button className='back-to-home' href='/' variant="primary">Back to Homepage</Button>
        </>
    )
}

export default BookDetails