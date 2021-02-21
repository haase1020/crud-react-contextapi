import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="light" light>
      <Container>
        <NavbarBrand href="/">Enter a user</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="adduser">
              Add user
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
