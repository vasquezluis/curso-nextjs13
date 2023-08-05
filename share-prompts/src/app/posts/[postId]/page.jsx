// dynamic metadata
export async function generateMetadata ({ params, searchParams }) {
  const product = await getProduct(params.postId)
  return { title: product.title }
}

// output of metadata above
// <title>Product 1</title>
// <meta name="description" content="Product 1 description" />
// <meta name="keywords" content="product, 1" />

function page () {
  return (
    <div>{postId}</div>
  )
}

export default page
