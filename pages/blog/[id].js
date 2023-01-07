import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

export default function Post ({post}) {
  return <>
      <main>
        <Link href="/">
          <p className={inter.className}> Revenir à l'accueil</p>
        </Link>
        <br></br>
        <h1 className={inter.className}>{post.title.toUpperCase()}</h1>
        <br></br><br></br>
        <p className={inter.className}> {post.body}</p>
      </main>
    </>
}

export async function getStaticProps ({params}) {

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(r => r.json())
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4/')
    .then(r => r.json())
  return {
    paths : posts.map(post => ({
      params: {id: post.id.toString()}
    })),
    fallback: false,
  }
}
