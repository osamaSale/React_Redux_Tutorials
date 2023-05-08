import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../../components/UserReducer"
import { useNavigate } from 'react-router-dom'
export const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const navigate = useNavigate()
    const handlSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id +1, name, email }))
        navigate("/")
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label  className="col-form-label">Name</label>
                            <input type="text" className="form-control" id="recipient-name" name='name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label  className="col-form-label">Email:</label>
                            <input type='email' className="form-control" id="message-text" name='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        <button type="submit" className="btn btn-primary" onClick={handlSubmit}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
