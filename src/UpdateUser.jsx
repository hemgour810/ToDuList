import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {

    const {id}= useParams();
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3001/getUser/"+id)
        .then(res =>{
                 console.log(res,"res data")
                 setName(res.data.name)
                 setemail(res.data.email)
                 setAge(res.data.age)
            // setUsers(res.data)
            // navigate('/')
        })
            .catch(err => console.log(err))
    },[])

    const UpdateUser=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{name,email,age})
        .then(res =>{
            console.log(res,'data--')
            navigate("/")
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='d-flex vw-100 vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <form action="" onSubmit={UpdateUser}>
            <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input  value={name} type="text" placeholder='Enter Name' className='form-control'
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input value={email} type="email" placeholder='Enter Email' className='form-control'
                    onChange={(e)=> setemail(e.target.value)}
                    
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input value={age} type="text" placeholder='Enter Age' className='form-control'
                    onChange={(e)=> setAge(e.target.value)}
                    
                    />
                </div>
               <button type='submit' className='btn btn-success'>Update</button>
            </form>
        </div>
        

    </div>
  )
}

export default UpdateUser