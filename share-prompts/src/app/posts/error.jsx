'use client' // -> Error components must be client components

import { useEffect } from "react"

function Error({error, reset}) {


useEffect(() => {
  console.log(error)

}, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      {/* Sent the user back where they were before the error */}
      <button onClick={() => reset()}> 
        Try Again
      </button>
    </div>
  )
}

export default Error