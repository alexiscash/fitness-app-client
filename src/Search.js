import React from 'react'

export default class Search extends React.Component {
    render() {
        return (
            <div className='sixteen wide column'>
                <div className="ui search">
                <div className="ui icon input" style={{width: '70%'}}>
                    <input className="prompt" onChange={(e) => this.props.search(e)} />
                    <i className="search icon" />
                </div>
                </div>
            </div>
          )
    }

}