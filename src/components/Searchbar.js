import React from 'react'
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/Searchbar.css"

const Searchbar = ({ books, setRenderBooks }) => {

    const [searchedTerm, setSearchedTerm] = useState("");
    const searchBooks = (event) => {
        event.preventDefault();

        if (searchedTerm !== "") {
            const filteredBooks = books.filter((book) =>
                book.title.toLowerCase().includes(searchedTerm.toLowerCase())
            );
            setRenderBooks(filteredBooks)
        } else {
            setRenderBooks(books)
        }
    }

    return (
        <Container className="searchbar">
            <Row>
                <Col sm={5}>
                    <Form onSubmit={searchBooks} className="d-flex">
                        <Form.Control
                            onChange={(event) => { event.target.value === "" ? setRenderBooks(books) : setSearchedTerm(event.target.value) }}
                            type="search"
                            placeholder="Search books . . ."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type='submit'>
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Searchbar