import React, { Component } from 'react'

export class CreateUser extends Component {
  state = { name: '', email: '' }

  get isVaild() {
    const { name, email } = this.state
    return name && email
  }
  
  get isInvaild() {
    return !this.isVaild
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { onCreateUser } = this.props
    if (onCreateUser) onCreateUser(this.state)
    this.setState({ name: '', email: ''})
  }

  render() {
    const { name, email } = this.state
    return (
      <form className="CreateUser" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter User Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter User Email"
          value={email}
          onChange={this.handleChange}
        />
        <input type="submit" value="Create User" disabled={this.isInvaild} />
      </form>
    )
  }
}

export default CreateUser
