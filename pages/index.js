import Head from 'next/head'
import Contact from '../components/Contact'
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
        <meta name="description" content="Web Developer, UI/UX Designer, Graphic Designer. Bachelor of Engineering with a GPA of 3.48 majoring in Computer Engineering from the University of Indonesia. More than 2 years of work experience as a designer and developer. Very high english profiency (IELTS Band 8.0)" />
        <meta property='og:title' content='Ahmad Rafiul Mahdi' />
        <meta property='og:description' content='Web Developer, UI/UX Designer, Graphic Designer. Bachelor of Engineering with a GPA of 3.48 majoring in Computer Engineering from the University of Indonesia. More than 2 years of work experience as a designer and developer. Very high english profiency (IELTS Band 8.0)' />
        <meta property='og:image' content='/rafiul.webp' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.rafiulm.com/' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='pt-20 flex flex-col items-center justify-center w-full'>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
