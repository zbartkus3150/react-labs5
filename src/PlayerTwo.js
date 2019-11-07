import React from 'react'

class PlayerTwo extends React.Component {
    render(){
        return(
            <div className="row card">
                <span><b>Player Two</b></span><br/>
                <span>Name: {this.props.name}</span><br/>
                <span>Played number of times: 
                <label>4</label></span><br/>
                <button
                    type="button"
                    onClick={() => {
                        this.props.btnClick(this.props.name);
                    }}
                    disabled={this.props.playingNow ? "disabled" : ""}
                    >
                    {this.props.playingNow ? "This user is playing now" : "Play"}
                </button>
            </div>
        )
    }
}

export default PlayerTwo