import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home(props) {
  const {products} = props;
  if (!products) return (<div>Loading...</div>)
  
  function deleteProduct(id) {
    fetch(`${process.env.APIURL}products/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  const list = products.map((product) => (
    <li key={product.id}>
      <Link href={`/products/${product.id}`}>
        {product.name}
      </Link>
    </li>
  ))

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <table>
        <tbody>
        <td>
            {list}
        </td>
        <td>
            <button onClick={() => deleteProduct(list._id)}>Delete</button>
        </td>
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.APIURL}products`)
  const products = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { products } }
}