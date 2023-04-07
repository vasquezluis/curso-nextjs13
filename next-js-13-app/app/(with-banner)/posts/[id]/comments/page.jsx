import Image from 'next/image'

const fetchComments = async (id) => {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    // cache: "no-store",
    next: {
      revalidate: 10
    }
  }).then(res => res.json())
}

async function PostComments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name} />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}

export default PostComments
