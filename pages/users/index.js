import Link from "next/link";
import React from "react";

function UserPage() {
  const users = [
    { id: 1, username: "Masood" },
    { id: 2, username: "Admin" },
  ];
  return (
    <>
      <h1>UserPage</h1>
      <ul>
        {users.map((item) => (
          // <li key={item.id}>
          //   <Link href={`/users/${item.id}`}>{item.username}</Link>
          // </li>

          <li key={item.id}>
            <Link href={{ pathname: "/users/[id]", query: { id: item.id } }}>
              {item.username}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPage;
