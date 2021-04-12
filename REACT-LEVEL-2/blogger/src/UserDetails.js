import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserDetails = (props) =>{
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const result = response.data
            setUser(result)
        })
    },[])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response)=>{
            const result = response.data
            setPosts(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])

    return(
        <div>
            <h1>Username : {user.name}</h1>
            <h1>Posts Written by User</h1>
            <ul>
                {posts.map((post)=>{
                    return(
                        <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserDetails