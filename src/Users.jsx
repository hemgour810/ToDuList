import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/")
        .then(res =>{
            console.log(res.data,"res data")
            setUsers(res.data)})    
            .catch(err => console.log(err))
    },[])

    const handleDelete=(id)=>{
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(res=> {console.log(res,'delete data')
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <>
    <div className='d-flex vw-100 vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to={"/create"} className='w-50 bg-white rounded p-3'>Add + </Link>
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>age</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return(
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                <td>
                                    <Link  to={`/update/${user._id}`} className='btn btn-success'>Update </Link>
                                    <button onClick={()=> handleDelete(user._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
    </>
  )
}

export default Users