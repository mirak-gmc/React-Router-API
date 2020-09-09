import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

const AppNavBar = () => {
  return (
    <Navbar className="bg-dark ">
      <NavbarBrand className="mr-auto  display-4">
        <Link className="text-white" to="/">
          {" "}
          Users Profiles
        </Link>
      </NavbarBrand>
    </Navbar>
  );
};

export default AppNavBar;
