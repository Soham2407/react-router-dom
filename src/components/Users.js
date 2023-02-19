import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const activeUsers = searchParams.get("filter") === "active";
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
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset filter</button>
      </div>
      {activeUsers ? <h2>Showing active users</h2> : <h2>Showing All users</h2>}
    </div>
  );
};

export default Users;
