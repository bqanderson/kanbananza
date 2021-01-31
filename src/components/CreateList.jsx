import React, { Component } from 'react'

export class CreateList extends Component {
  state = { title: '' }

  get isValid() {
    const { title } = this.state
    return !!title
  }

  get isInvalid() {
    return !this.isValid
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { onCreateList } = this.props
    if (onCreateList) onCreateList(this.state)
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state
    return (
      <form className="CreateList" onSubmit={this.handleSubmit}>
        <input
          className="CreateList-title"
          id="CreateList-title"
          name="title"
          onChange={this.handleChange}
          placeholder="New List Title"
          value={title}
        />
        <input
          className="CreateList-submit"
          type="submit"
          disabled={this.isInvalid}
        />
      </form>
    )
  }
}

export default CreateList
