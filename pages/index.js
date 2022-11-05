import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafiul M</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-archivo'>
        <Navbar />
        <Hero />
      </main>

      <footer>
      </footer>
    </div>
  )
}
