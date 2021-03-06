import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: "",
    image: "",
    likes: 0
  }

  changeHandler = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault() 
    this.props.submitHandler(this.state)
    this.setState({
      name: "",
      image: "",
      likes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.submitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" value={this.state.image} onChange={this.changeHandler} placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
