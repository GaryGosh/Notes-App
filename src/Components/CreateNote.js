import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function CreateNote() {
  const [show, setShow] = useState(false);
  const[note, setNote] = useState({title: "", text: "", id: ""});
  const[final, setFinal] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const value = e.target.value;
    const names = e.target.name;
    setNote({...note, [names]: value, id: new Date().getTime()});
  }
  /* console.log(note); */

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinal([...final, note]);
    handleClose();
  }
  /* console.log("saved", final); */

  return (
    <div>
      <Button className="createNote" onClick={handleShow}>
        <span role="img" aria-label="pencil">
          take a note ✏️
        </span>
      </Button>

      <div className="note">
        <div className="note__title">{final.map((note) => (
          <div key={note.id} className="title">{note.title}</div>
        ))}</div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header dialogClassName="modal-50h" closeButton>
          <Modal.Title>
            <input type="text" placeholder="Title" name="title" onChange={handleChange}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" placeholder="Enter your notes here.." name="text" onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
          <Button variant="success" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default CreateNote;
