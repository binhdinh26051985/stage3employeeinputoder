import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'


const Stylegroup = () => {
  const [groupstyles, setGruop] = useState([])
  const [addgrouping, setGrouping] = useState()  
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3000/employee/add_group', {addgrouping})
      .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
      })
      .catch(err=>console.log(err))
      
  }
  useEffect(()=>{
        axios.get('http://localhost:3000/employee/stylegroupsql')
        .then(result=>{
            if(result.data.Status) {
              setGruop(result.data.Result);
            } else {
                alert(result.data.Error)
            }

        }).catch(err=>console.log(err))
  },[])
  return (
    
    <div className='px-5 mt-3'>
      <div>
      <div className=''>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-warning'>

            </div>
            <h2>Add New Group</h2>
            <form onSubmit ={handleSubmit}>
                <div className='mb-3'>
                    <input type="text" name='addgrouping'   
                    placeholder='Input New Group name' 
                    onChange={(e)=> setGrouping(e.target.value)}
                    className='form-control rounded-0' />
                </div>
                
                <button type='submit' className='btn btn-success w-100 rounded-0 mb-2'>Add</button>
                
            </form>
        </div>
    </div>
      </div>
      <div className='d-flex justify-content-center'>
        <h3>Group Detail </h3>
      </div>

        <div className='mt-3'>  
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              groupstyles.map(c =>(
                <tr>
                  <td> {c.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Stylegroup