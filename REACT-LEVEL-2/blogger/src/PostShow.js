import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PostShow = (props) =>{
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const result = response.data
            setPost(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
 
    useEffect(()=>{
        if(Object.keys(post).length > 0){
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const result = response.data
                setUser(result)
            })
            .catch((err)=>{
                alert('userdata',err.message)
            })
        }
        
    },[post])

    useEffect(()=>{
        if(Object.keys(post).length > 0){
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then((response)=>{
                const result = response.data
                setComments(result)
            })
            .catch((err)=>{
                alert('comment data',err.message)
            })
        }
        
    },[post])

    return(
        <div>
            <h1>Username : {user.name}</h1>
            <h1>Title : {post.title}</h1>
            <h1>Body : {post.body} </h1>
            <hr/>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment)=>{
                    return(
                        <li key={comment.id}>{comment.body}</li>
                    )
                })}
            </ul>
            <p><Link to={`/users/${user.id}`}>More post of author : {user.name}</Link></p>
        </div>
    )
}

export default PostShow