import React from 'react'


export default class WorkoutCard extends React.Component {
    render() {
        return (
            <div>
                <iframe src={this.props.exercise.video_url} height="100"/>
                <p>{this.props.exercise.description}</p>
            </div>
        )
    }
}