import axios from 'axios'
import React from 'react'
import TaskForm from './TaskForm'

const EditItem = (props)=>{
    const {id, title, status, editItem, handleToggle} = props

    const formSubmit = (task) =>{
        axios.put(`http://localhost:3033/api/tasks/${task.id}`,task)
        .then((response)=>{
            const result = response.data
            editItem(result)
            handleToggle()
        }) //success
        .catch((err)=>{
            alert(err.message)
        }) //error
    }

    return(
        <div>
            <h2>Edit Item</h2>
            <TaskForm id={id} title={title} status={status} formSubmit={formSubmit}/>
        </div>
    )
    
}

export default EditItem