import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Create } from './From/Create'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'

const Home = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handlDalete = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    return (
        <div className='container'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add User</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((e) => {
                        return (
                            <tr >
                                <td >{e.id}</td>
                                <td>{e.email}</td>
                                <td>{e.name}</td>
                                <td><button className='btn btn-danger' onClick={()=>handlDalete(e.id)}>Delete</button></td>
                                <td>
                                    <Link to={`/edit/${e.id}`} className='btn btn-primary'>Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Create />

        </div>
    )
}

export default Home