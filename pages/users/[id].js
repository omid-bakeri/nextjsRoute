import React from 'react'
import {useRouter} from "next/router";


function UserID() {

  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  
  return (
    <h1>UserID</h1>
  )
}

export default UserID