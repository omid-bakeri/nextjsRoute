import React from "react";
import { useRouter } from "next/router";

function UserPosts() {
  const router = useRouter();
  console.log(router.query);
  return <div>User Post</div>;
}

export default UserPosts;
