'use client'
import { useState } from 'react'

function LikeButton () {
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
  }

  return (
    <button onClick={handleClick}>
      {liked ? '💖' : '💜'}
    </button>
  )
}

export default LikeButton
