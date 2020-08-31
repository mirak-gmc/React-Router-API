import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";

import { Container, Row } from "reactstrap";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Component is rendring...................");
    const fetchUsers = () => {
      //fetch the users and set the state with the result
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, []);
  return (
    <Container className="my-5">
      <Row>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </Row>
    </Container>
  );
};

export default UsersList;
