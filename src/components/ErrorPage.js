import React from 'react'
import { Button } from 'react-bootstrap'
import Navigation from "./Navigation"
import '../styles/ErrorPage.css'

const ErrorPage = () => {
    return (
        <>
        <Navigation />
            <div className='error-dialog'>
                <h1 className='error-title my-3'>404: PAGE NOT FOUND</h1>
                <h4 className='error-text mt-2' >The page you're looking for does not exists (anymore?) 💔):</h4>
                <Button href="/">Back to Homepage</Button>
            </div>
        </>
    )
}

export default ErrorPage