import React from 'react'

class PlayerTwo extends React.Component {
    render(){
        return(
            <div>
                <b>Player Two</b><br/>
                Name: 
                <label>name form input field</label><br/>
                Played number of times: 
                <label>4</label><br/>
                <button>This user is playing now</button>
            </div>
        )
    }
}

export default PlayerTwo