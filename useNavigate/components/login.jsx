import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (name === "manivardhan" && password === "secret") {
            navigate("/")
        }
    }, [name,password])

    const handleChange = (event) => {
        event.preventDefault()
        if (event.target.name == "name") {
            setName(event.target.value)
        }
        if (event.target.name == "password") {
            setPassword(event.target.value)
        }

    }
    return (
        <div>

            Login

            <hr />

            <p>{name}</p>
            <p>{password}</p>
            <hr />
            <input type="text" name='name' onChange={handleChange} placeholder='enter the usename' /><br />
            <input type="text" name="password" onChange={handleChange} placeholder='enter the password' /><br />


        </div>
    )
}

export default Login