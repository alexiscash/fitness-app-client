import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// import UserForm from 'UserForm.js'


export default class UserCard extends React.Component {

render(){
    return(
    <div class="ui link cards">
    <div className="card">
        <div className="image">
        <img src="/images/avatar2/large/elyse.png">
        </img>
        </div>

        <div className="content">
        <div className="header">Alexis</div>
            <div class="meta">
                <a>Coworker</a>
            </div>
        <div class="description">
        Alexis is a trainer working in Houston.
        </div>
        </div>
        <div class="extra content">
        <span class="right floated">
            Joined in 2019
        </span>
        <span>
            <i class="user icon"></i>
            billion Friends
        </span>
        </div>

    {/* <UserForm /> */}
    </div>
</div>
    
    )
    }
}


      
