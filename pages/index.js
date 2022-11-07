import Head from 'next/head'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='font-archivo'>
      <Head>
        <title>Rafiul M</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Skills/>
        <Experience/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
