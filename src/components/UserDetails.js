import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return <h3>The Details of User {id}</h3>;
};

export default UserDetails;
