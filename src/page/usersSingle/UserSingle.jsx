import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './UserSingle.css';
export function UserSingle() {
    const {userId}=useParams();
    const [posts, setPosts]=useState({
        isLoading: true,
        isError: false,
        data: [],
    });
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts?userId='+ userId)
      .then(res=>res.json())
      .then(data=>{
          setPosts({
              ...posts,
              isLoading: false,
             data: data,
          })
      })
      .catch(err=>console.error(err))
    }, [])
return (
  <div className="user">
        <h1>User Single</h1>
        {
           posts.data.length>0 && <ul className="user__list">
               {
                   posts.data.map(post=> (
                       <li className="user__item" key={post.id}>
                           {post.title}
                       </li>
                   ))
               }
           </ul>
        }
  </div>
)
}