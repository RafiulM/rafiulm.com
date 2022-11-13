import Head from 'next/head'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='font-archivo font-normal bg-white dark:bg-black dark:text-white'>
      <Head>
        <title>Ahmad Rafiul Mahdi</title>
        <meta name="description" content="Ahmad Rafiul Mahdi - Web Developer, UI/UX Designer, Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='pt-20 flex flex-col items-center justify-center w-full'>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
