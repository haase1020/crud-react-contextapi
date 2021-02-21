import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name: name,
    };
    addUser(newUser);
    history.push("/home");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="name"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/home" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;