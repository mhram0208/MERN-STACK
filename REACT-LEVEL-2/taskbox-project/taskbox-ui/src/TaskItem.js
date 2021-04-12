import React, { useState } from 'react'
import axios from 'axios'
import EditItem from './EditItem'
const TaskItem = (props)=>{
    const {id, title, status, removeItem, editItem} = props
    const [toggle, setToggle] = useState(false)

    const handleRemove = ()=>{
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response)=>{
                const result = response.data
                removeItem(result.id)
            }) //success
            .catch((err)=>{
                alert(err.message)
            }) //error
        }
    }

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    return(
        <div>
            {toggle ? (
                <div>
                    <EditItem id={id} title={title} status={status} editItem={editItem} handleToggle={handleToggle}/>
                    <button onClick={handleToggle}>Cancel</button>
                </div>
                
                ) : (
                <div>
                    <h2>{title}</h2>
                    <button onClick={handleToggle}>edit</button>
                    <button onClick={handleRemove}>remove</button>
                </div>
            )}
            
        </div>
    )
}

export default TaskItem