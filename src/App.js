import React from 'react'
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import UserForm from './UserForm.js'
import UserCard from './UserCard.js'
import WorkoutContainer from './WorkoutContainer'
import Search from './Search'

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      workouts: [],
      displayWorkouts: [],
      exercises: [{video_url: 'https://www.youtube.com/embed/Dy28eq2PjcM', description: 'how to perform a deadlift'}],
      displayForm: false,
    }
  }

  changeDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/workouts')
    .then(res => res.json())
    .then(data => {
      console.log(data.map(thang => thang.exercises));
      this.setState({
        workouts: data,
        exercises: data.map(thang => thang.exercises)
      })
    });
  }


  render(){
  return (
    <div>
      <NavBar/>
      <Search />
      <WorkoutContainer exercises={this.state.exercises}/>
      <UserCard/>
      <UserForm />
    </div>
    )}
}

export default App
