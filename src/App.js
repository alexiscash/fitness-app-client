import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      workouts: [{loading: 'loading'}]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users/1', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 1,
        user_name: 'swag boiiiii'
      })
    })
    .then(res => res.json())
    .then(console.log);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        ayy lmao
      </div>
    )
   
  }
}

export default App;
