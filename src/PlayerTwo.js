import React from 'react'

class PlayerTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }

    render(){
        return(
            <div className="row card">
                <span><b>Player Two</b></span><br/>
                <span>Name: {this.props.name}</span><br/>
                <span>Played number of times: {this.state.counter}</span><br/>
                <button
                    type="button"
                    onClick={() => {
                        this.props.btnClick(this.props.name);
                        this.setState(oldstate => ({
                            counter: oldstate.counter + 1
                          }));
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