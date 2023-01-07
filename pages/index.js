import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount(n => n+ 1), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])


  return (
    <>
      <Head>
        <title> Mon premier projet Next</title>
      </Head>
      <h1 className={inter.className}>Bravo ! Vous êtes ici depuis {count} secondes :)</h1>
      <br></br>
      <ul>
        {posts.map(post => <li>
          <p className={inter.className}>{post.title}</p>
        </li>)}
      </ul>
    </>
  )
}

export async function getStaticProps () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4/')
    .then(r => r.json())
  return {
    props: {
      posts
    }
  }
}
