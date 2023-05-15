import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { col1, col2, col3 } from "../data/footerLinks.js"
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <Row className='row'>
                <Col>
                    <ul>
                        {
                            col1.map((item) => {
                                return (
                                    <li key={item.title}>
                                        <a href={item.href}>
                                            {item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            col2.map((item) => {
                                return (
                                    <li key={item.title}><a href={item.href}>
                                        {item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            col3.map((item) => {
                                return (
                                    <li key={item.title}>
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer