import Users from '@/components/Users'

const fecthUsers = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()

  return data.data
}

async function IndexPage () {
  const users = await fecthUsers()

  return (
    <Users users={users} />
  )
}

export default IndexPage
