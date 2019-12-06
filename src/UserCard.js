import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import UserForm from 'UserForm.js'


export default class UserCard extends React.Component {

render(){
    return(
    <div className="ui link cards" style={{margin: '1em'}}>
    <div className="card">
        <div className="image">
        <img src={require('./lil-nas-x-cowboy.jpg')} alt='dope'></img>
        </div>

        <div className="content">
        <div className="header">Alexis</div>
            <div className="meta">
                <a href='deez nuts'>Coworker</a>
            </div>
        <div className="description">
        Alexis is a trainer working in Houston.
        </div>
        </div>
        <div className="extra content">
        <span className="right floated">
            Joined in 2019
        </span>
        <span>
            <i className="user icon"></i>
            billion Friends
        </span>
        </div>

    {/* <UserForm /> */}
    </div>
</div>
    
    )
    }
}


      
