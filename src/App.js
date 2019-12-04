import React from 'react'
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import UserForm from './UserForm.js'
import UserCard from './UserCard.js'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      exercise: [],
      displayForm: false,

    }
  }

  changeDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    })
  }


  render(){
  return (
    <div>
      <NavBar/>
      <UserCard/>
      <UserForm />
    </div>
    )}
}

export default App
