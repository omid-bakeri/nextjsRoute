import React from 'react'
import {useRouter} from "next/router";


function Products() {
    const router = useRouter();

    console.log(router.query);
  return (
    <div>Products</div>
  )
}

export default Products