import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: "no-store",
    next: {
      revalidate: 10
    }
  }).then(res => res.json())
}

async function ListOfPosts () {
  const posts = await fetchPosts()

  return (

    <section>
      {posts.map(post => (
        <article key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButton />
        </article>
      ))}
    </section>
  )
}

export default ListOfPosts
