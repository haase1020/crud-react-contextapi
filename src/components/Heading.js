import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="light" light>
      <Container>
        <NavbarBrand href="/">My Favorite Studio Ghibli Characters</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-info" to="/adduser">
              Add Your Favorite Character ✨
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
