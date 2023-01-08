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

export async function getServerSideProps ({params}) {

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(r => r.json())
  return {
    props: {
      post
    }
  }
}

