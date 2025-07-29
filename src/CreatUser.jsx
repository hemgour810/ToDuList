import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const CreatUser = () => {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate()

    const HandleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/createUser",{name,email,age})
        .then(res =>{
            console.log(res,"resss")
            
            navigate("/")
        })
        .catch(err =>console.log(err))
    }

  return (
    <div className='d-flex vw-100 vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <form action="" onSubmit={HandleSubmit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input  type="text" placeholder='Enter Name' className='form-control'
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control'
                    onChange={(e)=> setemail(e.target.value)}
                    
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' className='form-control'
                    onChange={(e)=> setAge(e.target.value)}
                    
                    />
                </div>
               <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
        

    </div>
  )
}

export default CreatUser