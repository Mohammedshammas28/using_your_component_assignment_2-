import React from 'react'
import Likebutton from './likebutton'
import { useState } from 'react'

function Postcard({post}) {
   
   const [isliked,setisliked]=useState(post.isLiked)

   const togglelike=()=>{
      setisliked(!isliked)
   }

  return (
    <div>
       <img className='profileImage' src={post.profileImage} alt={post.username} />
       <p>{post.username}</p>
       <p>{post.content}</p>
       <Likebutton likeStyle={isliked&&"liked"} Likebutton={togglelike}/>
    </div>
  )
}

export default Postcard
