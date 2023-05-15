import { Container, Row, Col, Button } from "react-bootstrap"
import SingleCard from "./SingleCard"
import Searchbar from "./Searchbar"
import React, { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import CommentsNoModal from "./CommentsNoModal"
import "../styles/Main.css"
import '../styles/Loader.css'

const Main = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const [renderBooks, setRenderBooks] = useState([]);
  const [selected, setSelected] = useState("");

  const getBooks = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://epibooks.onrender.com/");
      const response = await data.json();
      setBooks(response);
      setRenderBooks(response);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError("Couldn't load data");
      }
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div>
        {error && <h1 style={{ textAlign: "center", marginTop: "2%", marginBottom: "2%" }} className="text-danger">{error}</h1>}
        {loading && !error && <ClipLoader color="pink" className="spinLoader" />}
        {!loading && !error && (
          <div>
            <Searchbar
              books={books}
              setBooks={setBooks}
              setRenderBooks={setRenderBooks}
            />{" "}
            <Container>
              <Row>
                <Col className="d-flex flex-wrap gap-3" lg={8} >
                  {renderBooks &&
                    renderBooks.map((book) => (
                      <SingleCard className="single-card"
                        key={book.asin}
                        title={book.title}
                        img={book.img}
                        author={book.author}
                        price={book.price}
                        asin={book.asin}
                        category={book.category}
                        setSelected={setSelected}
                        selected={selected === book.asin}
                      />
                    ))}
                </Col>
                <Col>
                  <CommentsNoModal asin={selected} />
                </Col>
              </Row>
            </Container>
            <Button href="#navbar" className="back-to-top" variant="success">Back <br />
              to ↑<br />
              top
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Main