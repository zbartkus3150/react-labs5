import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameOne: "",
            nameTwo: "",
        };
    }

    render() {
        return (
            <div className="ml-5">
                <PlayerOne name={this.state.nameOne}/>
                <br/>
                <PlayerTwo name={this.state.nameTwo}/>
                <br/>
                <br/>
                <form>
                    <div className="form-group row">
                        <label htmlFor="One" className="col-sm-2">
                        {" "}
                        Set name of Player One:{" "}
                        </label>
                        <div className="col-sm-8">
                        <input
                            className="form-control"
                            id="One"
                            value={this.state.nameOne}
                            type="text"
                            onChange={e => this.setState({ nameOne: e.target.value })}
                        />
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="Two" className="col-sm-2">
                        {" "}
                        Set name of Player Two:{" "}
                        </label>
                        <div className="col-sm-8">
                        <input
                            className="form-control"
                            id="Two"
                            value={this.state.nameTwo}
                            type="text"
                            onChange={e => this.setState({ nameTwo: e.target.value })}
                        />
                        </div>
                    </div>
                    </form>
            </div>
        );
    }
}

export default GameAdmin