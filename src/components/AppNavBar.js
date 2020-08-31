import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const AppNavBar = () => {
  return (
    <Navbar className="bg-dark ">
      <NavbarBrand className="mr-auto text-white display-4">
        Users Profiles
      </NavbarBrand>
    </Navbar>
  );
};

export default AppNavBar;
