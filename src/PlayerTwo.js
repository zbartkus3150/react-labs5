import React from 'react'

class PlayerTwo extends React.Component {
    render(){
        return(
            <div className="row card">
                <span><b>Player Two</b></span><br/>
                <span>Name: {this.props.name}</span><br/>
                <span>Played number of times: 
                <label>4</label></span><br/>
                <button type="button">This user is playing now</button>
            </div>
        )
    }
}

export default PlayerTwo