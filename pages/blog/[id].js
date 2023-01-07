import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Post ({post}) {
  return <>
      <main>
        <h1 className={inter.className}>{post.title.toUpperCase()}</h1>
        <br></br>
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
