import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem key={user.id} className="d-flex">
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link
                  className="btn btn-outline-info mr-1"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h2 className="text-center">There are no users...</h2>
      )}
    </ListGroup>
  );
};

export default UserList;
