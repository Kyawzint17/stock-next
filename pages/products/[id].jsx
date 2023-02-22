import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Product({ product }) {
  console.log('product 2', product)
  if (!product) return (
    <div>
      <p>Product not found</p>
      <Link href="/products">Back</Link>
      </div>
  );
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <Link href="/products">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps(context) {
    console.log(`Fetching Product ID: ${context.params['id']}`)
    console.debug(`Fetching ${process.env.APIURL}products/${context.params['id']}`)
    const ret = await fetch(`${process.env.APIURL}products/${context.params['id']}`)
    const product = await ret.json()
    console.log(product)
    return {
      props: {
        product
      }
    }
  
  }