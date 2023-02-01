import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>KyawZinThein Page</title>
    </Head>
    <h1>KyawZinThein Page</h1>
    <p>
      This is a sample page for KyawZinThein.
    </p>
    <Link href="/about}">About</Link>
    </>
  )
}
