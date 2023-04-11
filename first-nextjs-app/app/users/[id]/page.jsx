const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()

  return data.data
}

async function usersPage ({ params }) {
  const user = await getUser(params.id)

  return (
    <div>

      <h1>User details</h1>

      <div>
        <img src={user.avatar} alt={user.first_name} />

        <div>
          <h3>{user.id} {user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
        </div>
      </div>

    </div>
  )
}

export default usersPage
