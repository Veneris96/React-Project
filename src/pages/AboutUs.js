import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import "../styles/AboutUs.css"
import "../styles/Footer.css"

const AboutUs = () => {
    return (
        <>
            <Navigation />
            <Container className='about-us'>
                <div>
                    <h2>About Us</h2>
                    <h5 >EpiBooks is a newborn project based on books made to practise with ReactJS. <br />
                        Please, feel free to browse around the app ❤. </h5>
                    <Button href='/'>Back to Homepage</Button>
                </div>
            </Container>
        </>
    )
}

export default AboutUs
