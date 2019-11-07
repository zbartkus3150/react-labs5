import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {
    render() {
        return (
            <div >
                <PlayerOne />
                <br/>
                <PlayerTwo />
                <br/>
                <br/>
                Set name of Player One: 
                <input></input><br/>
                Set name of Player Two: 
                <input></input>
            </div>
        );
    }
}

export default GameAdmin