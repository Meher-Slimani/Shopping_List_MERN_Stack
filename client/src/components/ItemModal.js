import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { addItem } from "../actions/itemActions";

const ItemModal = () => {
  const [modalstate, setModalState] = useState({ modal: false, name: "" });
  const dispatch = useDispatch();
  const toggler = () => {
    setModalState({ ...modalstate, modal: !modalstate.modal });
  };

  const onChange = (e) => {
    setModalState({ ...modalstate, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: modalstate.name,
    };
    // Add item via addItem action
    dispatch(addItem(newItem));
    // Close modal
    toggler();
  };
  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggler}>
        Add Item
      </Button>
      <Modal isOpen={modalstate.modal} toggle={toggler}>
        <ModalHeader toggle={toggler}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={onChange}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
