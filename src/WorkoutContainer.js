import React from 'react'
import WorkoutList from './WorkoutList'
import MainWorkout from './MainWorkout'

export default class WorkoutContainer extends React.Component {

render() {
    return (
        <div className='ui grid' style={{margin: '1em'}}>
            <MainWorkout exercises={this.props.exercises}/>
            <WorkoutList exercises={this.props.exercises}/>
        </div>
        )
    }
}
