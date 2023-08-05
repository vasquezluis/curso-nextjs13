export async function GET (request) {
  // handle GET requestq for users
  // Retrive all users from database
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Josh Doe' }
  ]

  return new Response(JSON.stringify(users))
}
