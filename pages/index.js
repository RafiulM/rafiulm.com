import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafiul M</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-4xl font-lexend '>Hello, My name is Rafiul</h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}
