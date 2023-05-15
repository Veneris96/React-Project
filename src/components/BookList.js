import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from '../components/SingleCard';

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = jsonData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-5">
      <Form.Group>
        <Form.Label>Cerca un libro:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci il titolo"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form.Group>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredBooks.map((book) => (
          <Col key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList