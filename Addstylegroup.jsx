import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addgroup = () => {
    
        const [addgrouping, setGrouping] = useState()  
        const navigate = useNavigate()
        const handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3000/employee/add_group', {addgrouping})
            .then(result=>{
                if(result.data.Status){
                    navigate('/empldashboard/groupstyle')
                } else{
                    alert(result.data.Error)
                }
            })
            .catch(err=>console.log(err))
        }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-warning'>

            </div>
            <h2>Add New Group</h2>
            <form onSubmit ={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="addgrouping"><strong>New Group</strong></label>
                    <input type="text" name='addgrouping'   
                    placeholder='Input New Group name' 
                    onChange={(e)=> setGrouping(e.target.value)}
                    className='form-control rounded-0' />
                </div>
                
                <button type='submit' className='btn btn-success w-100 rounded-0 mb-2'>Add</button>
                
            </form>
        </div>
    </div>
  )
}

export default Addgroup