import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { pickItem } from "../../redux/actions";

function ModalComponent({show, toggle, item }) {

  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();

  const pluse = () => { setNumber(number + 1) }

  const minuse = () => {
    if (number < 3) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  }

  const confirm = () => {
    dispatch(pickItem(item, number));
    toggle();
  }

    return (
        <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Izaberite količinu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl
              value = { number }
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button onClick = { pluse } variant="outline-secondary">+</Button>
              <Button onClick = { minuse } variant="outline-secondary">-</Button>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ confirm }>
            Potvrdi
          </Button>
          <Button variant="secondary" onClick={ toggle }>
            Odustani
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalComponent;