import React, { useState, } from 'react'
import { Modal, Button } from "react-bootstrap"
import { ClipLoader } from 'react-spinners';

const ConfirmCommentDeletion = ({ comment, commentID }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(" ")

    const deleteComment = async () => {
        setLoading(true)
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentID}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYmE1MWFhMDUwYTAwMTRmYjA5MDkiLCJpYXQiOjE2ODM5ODY0NzQsImV4cCI6MTY4NTE5NjA3NH0.WWa47fkkMEgnZXrZ8mKMJSpPRw6Cute6G0YyPylLDT0"
                },
            });
            const comments = await data.json()
            setComments(comments)
            setLoading(false)
            alert("Comment deleted successfully!")
        } catch (error) {
            if (error) setError("Loading Error")
        }
    }

    return (
        <>
            <Button style={{ background: "red", border: "red", padding: "3px" }} className='delete-comment' type='submit' onClick={handleShow}>
                Delete comment 🗑
            </Button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm comment deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <h2 style={{ textAlign: "center", color: "red", marginTop: "2%" }}>{error}</h2>}
                    {loading && !error && <ClipLoader className='spinLoader' color="#efb8ea" />}
                    Do you want do delete the comment?
                    <br />
                    <b>"{comment.comment}"</b>
                    <br />
                    Comment id: {commentID}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => [deleteComment(comment.commentID), handleClose()]} variant="primary"
                        type='submit'
                        style={{ background: "red", border: "red" }}>
                        Delete 🗑
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close ❌
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmCommentDeletion