import React from 'react'

export default class UserForm extends React.Component {

constructor() {
    super()

    this.state = {
        name: '',
    }
}

handleData = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }




    render() {
        return (
          <div>
            <h3>Add a Workout!</h3>
            <form>
            <input type='text' placeholder="Name" name="name" onChange={this.handleData}/>
                <input type='submit' value='Add Workout'/>
            </form>
          </div>
        )
      }
}

