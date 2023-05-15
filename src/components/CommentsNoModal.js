import React, { useEffect, useState, useRef } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import RatingSystem from './RatingSystem'
import { nanoid } from 'nanoid'
import { ClipLoader } from "react-spinners"
import { Container, Form, Button, FormControl } from 'react-bootstrap/'
import ConfirmCommentDeletion from './ConfirmCommentDeletion'
import "../styles/Loader.css"
import "../styles/CommentArea.css"

const CommentNoModal = ({ asin }) => {

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(" ")

  const [formData, setFormData] = useState({ comment: "", rate: "", elementId: asin });
  const formReset = useRef()

  const FormOk = () => {
    const { comment, rate } = formData
    const commentLenght = comment.length
    const rateLenght = rate.length
    if (commentLenght > 0 && rateLenght > 0) {
      return true
    }
    return false
  }

  const getSingleBookComments = async () => {
    setLoading(true)
    try {
      const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYmE1MWFhMDUwYTAwMTRmYjA5MDkiLCJpYXQiOjE2ODM5ODY0NzQsImV4cCI6MTY4NTE5NjA3NH0.WWa47fkkMEgnZXrZ8mKMJSpPRw6Cute6G0YyPylLDT0"
        }
      });
      const response = await data.json();
      setComments(response);
      setLoading(false)
    } catch (error) {
      if (error) setError("Loading error");
    }
  };

  useEffect(() => {
    getSingleBookComments();
  }, [asin]);

  const postComment = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYmE1MWFhMDUwYTAwMTRmYjA5MDkiLCJpYXQiOjE2ODM5ODY0NzQsImV4cCI6MTY4NTE5NjA3NH0.WWa47fkkMEgnZXrZ8mKMJSpPRw6Cute6G0YyPylLDT0"
          },
          body: JSON.stringify(formData),
        }
      );
      formReset.current.reset()
      alert("Comment posted successfully!")
    } catch (error) {
      if(error) setError("Loading error")
    }
  };

  return (
    <>
      <Container className='comments-area'>
        <h5 style={{ color: "black" }}>Comments on (book id): {asin}</h5>
        <ListGroup className='comment-list shadow' style={{ position: "sticky", height: "auto", maxHeight: "475px", overflowY: "auto" }}>
          {loading && <ClipLoader className='spinLoader' color='pink' />}
          {(asin.length > 0) && comments.map((comment) => (
            <ListGroup.Item key={nanoid()}>
              <div className='ms-2'>
                <div><b>{comment.comment}</b></div>
                <div>
                  Rating: <RatingSystem stars={comment.rate} />
                  <br />
                  Author: {comment.author}
                  <div className='id-delete'>
                    <div>Book ID: {comment.elementId}</div>
                    <div><ConfirmCommentDeletion comment={comment} commentID={comment._id} /></div>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Form className="add-comment" ref={formReset}
          onSubmit={postComment}>
          <FormControl
            required
            as="textarea"
            rows="2"
            name="comment"
            placeholder="Write a comment . . ."
            className="write-comment shadow"
            onChange={(event) =>
              setFormData({
                ...formData,
                comment: event.target.value,
                elementId: asin
              })
            }
          />
          <Form.Select defaultValue={"Rate"}
            required
            name="rate"
            className="rating shadow"
            onChange={(event) => {
              setFormData({
                ...formData,
                rate: event.target.value,
              });
            }}
          >
            <option hidden disabled>Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </Form.Select>

          <Button disabled={!FormOk()} type="submit" className="btn btn-primary shadow">Post comment</Button>
        </Form>
      </Container>
    </>
  );
};

export default CommentNoModal
