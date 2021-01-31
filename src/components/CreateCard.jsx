import React, { Component } from 'react'

export class CreateCard extends Component {
  state = {
    title: '',
    description: '',
  }

  get isValid() {
    const { title, description } = this.state
    return title && description
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
    if (this.isInvalid) return

    const { onCreateCard } = this.props
    if (onCreateCard) onCreateCard(this.state)
    this.setState({
      title: '',
      description: '',
    })
  }

  render() {
    const { title, description } = this.state
    return (
      <form className="CreateCard" onSubmit={this.handleSubmit}>
        <input
          className="CreateCard-title"
          type="text"
          name="title"
          placeholder="Enter Card Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          className="CreateCard-description"
          type="text"
          name="description"
          placeholder="Enter Card Description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          className="CreateCard-submit"
          type="submit"
          value="Create New Card"
          disabled={this.isInvalid}
        />
      </form>
    )
  }
}

export default CreateCard
