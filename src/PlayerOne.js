import React from 'react'

class PlayerOne extends React.Component {
    render(){
        return(
            <div>
                <b>Player One</b><br/>
                Name:
                <label>name form input field</label><br/>
                Played number of times: 
                <label>3</label><br/>
                <button>Play</button>

            </div>
        )
    }
}

export default PlayerOne