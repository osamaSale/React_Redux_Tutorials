import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../components/UserReducer"
import { useParams, useNavigate } from 'react-router-dom'
export function Edit() {
    const { id } = useParams()
    const users = useSelector((state) => state.users)
    const ex = users.filter(f => f.id == id)
    const { name, email } = ex[0]
    const [nname, setName] = useState(name)
    const [nemail, setEmail] = useState(email)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handlSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser({ id: id, name: nname, email: nemail }))
        navigate("/")
    }
    return (
        <>
                <div className="mb-3">
                    <label  className="col-form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={nname} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label  className="col-form-label">Email:</label>
                    <input type='email' className="form-control" name='email' value={nemail} onChange={(e) => setEmail(e.target.value)} />
                </div>
       
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" >Close</button>
                <button type="submit" className="btn btn-primary" onClick={handlSubmit}>Send message</button>
            </div>
        </>)
}

