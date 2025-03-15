import React, { Component } from 'react'

export default class Controlled_comp extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password:"",
            mob:0
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.password)
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>

                <input type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder='name' />
                <input type="text" name="email" id="" value={this.state.email} onChange={this.handleChange} placeholder='email' />
                <input type="password" name="password" id="" onChange={this.handleChange} value={this.state.password}/>
                <input type="tel" name="mob" id=""  onChange={this.handleChange} value={this.state.mob}/>
                <button type='submit'>submit</button>
                </form>
                <h1>name:{this.state.name}</h1>
                <h1>email:{this.state.email}</h1>
                <h1>password:{this.state.password}</h1>
                <h1>mobile:{this.state.mob}</h1>

            </div>
        )
    }
}
