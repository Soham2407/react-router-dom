import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const data = [
    {
      id: "1",
      name: "User 1",
    },
    {
      id: "2",
      name: "User 2",
    },
    {
      id: "3",
      name: "User 3",
    },
  ];
  return (
    <div>
      {data.map((user) => (
        <h4>
          <Link to={`${user.id}`}>{user.name}</Link>
        </h4>
      ))}
      <Outlet />
    </div>
  );
};

export default Users;
