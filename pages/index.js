import Head from 'next/head'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

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
        <Skills/>
        <Experience/>
      </main>

      <footer>
      </footer>
    </div>
  )
}
