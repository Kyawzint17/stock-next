import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ products }) {

  async function deleteProduct(id) {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <table>
        <tbody>
        {
          products.map(product => {
            return (
              <tr key={product._id}>
                <td>
                  <Link href={`/products/${product._id}`}>
                    {product.name}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`)
  const products = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { products } }
}