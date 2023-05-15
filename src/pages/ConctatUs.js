import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import "../styles/ContactUs.css"

const ContactUs = () => {
    return (
        <>
            <Navigation />
            <Container className='contact-us'>

                <div className='mx-3'>
                    <h2>Contact Us</h2>
                    <h6>
                        Phone: 0114 1465878 <br />
                        E-mail: customerservice@epibooks.com <br />
                        Address: Bailey St. 22, Sheffield, UK
                    </h6>
                    <Button href='/'>Back to Homepage</Button>
                </div>
            </Container>
        </>
    )
}

export default ContactUs