import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";

const AppNavBar = () => {
  return (
    <Navbar className="bg-dark ">
      <Link className="text-white mr-auto  display-4" to="/">
        {" "}
        Users Profiles
      </Link>
    </Navbar>
  );
};

export default AppNavBar;
