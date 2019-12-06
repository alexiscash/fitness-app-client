import React from 'react'
import WorkoutCard from './WorkoutCard'

export default class WorkoutList extends React.Component {

render() {
    console.log(this.props.exercises);
    return (
        <div className='three wide column'>
            {this.props.exercises.map(thang => <WorkoutCard exercise={thang} />)}
        </div>
        )
    }
}
