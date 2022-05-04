import React, { useEffect } from "react"
import { Loader } from "../../companents";
import { Link } from "react-router-dom";
import './Users.css';
export const Users = ()=>{
const [users, setUsers]=React.useState({
    isLoading: true.valueOf,
    isError: false,
    data: [],
})
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        setUsers({
            ...users,
            isLoading: false,
            data: data, 
        })
    })
    .catch(err=>{
        setUsers({
            ...users,
            isError: true,
        })
    })
}, [])
   
   
    return <div className="user">
        <h1>Users</h1>
       {users.isLoading && !users.isError && <Loader />}
       {users.isError && <strong>Error...</strong>}
       {
           users.data.length>0 && ( <ul className="user__list">
               {users.data.map((user)=>(<li className="user__item" key={user.id}>
                  <Link className="user__link" to= {`/users/${user.id}`}> {user.name}</Link>
               </li>))}
           </ul>)
       }
    </div>
};