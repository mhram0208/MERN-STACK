import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserShow = (props) =>{
    const {id} = props.match.params
    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const result = response.data
            setUser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    
    return(
        <div>
            <h1>Show - {id}</h1>
            <p>{user.name} - {user.email} - {user.address && user.address.city}</p>
            <Link to="/users">Back</Link>
        </div>
    )
}

export default UserShow