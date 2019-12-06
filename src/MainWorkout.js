import React from 'react'

export default class MainWorkout extends React.Component {
    render() {
        console.log(this.props.exercises[0])
        return (
            <div className='ten wide column' style={{margin: '2em'}}>
                <iframe src={this.props.exercises[0].video_url} width="560" height="315"/>
                <p>{this.props.exercises[0].description}</p>
                <p>ayy lmao</p>
            </div>
        )
    }
}