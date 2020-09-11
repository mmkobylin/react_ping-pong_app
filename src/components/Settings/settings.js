import React, { Component } from 'react'; 

class Settings extends Component { 

    constructor(props){
        super(props);

         this.state = { 
            player1name: props.player1name,
            player2name: props.player2name,
            winningScore: props.winningScore,
            changeServe: props.changeServe
        };
        
        this.handlePlayer1 = this.handlePlayer1.bind(this); 
        this.handlePlayer2 = this.handlePlayer2.bind(this); 
        this.handleWinner = this.handleWinner.bind(this); 
        this.handleServing = this.handleServing.bind(this); 

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handlePlayer1(e) {
        this.setState({ player1name: e.currentTarget.value }) ; 
    }
       
    handlePlayer2(e) {
        this.setState({ player2name: e.currentTarget.value }) ; 
    }

    handleWinner(e) {
        this.setState({ winningScore: e.currentTarget.value }) ; 
    }
       
    handleServing(e) {
        this.setState({ changeServe: e.currentTarget.value }) ; 
    }

    handleSubmit(e) {
        e.preventDefault();
        let { player1name, player2name, winningScore, changeServe } = this.state;
        
        this.props.handleSave(player1name, player2name, winningScore, changeServe) 
    }

    render() {
        let { player1name, player2name, winningScore, changeServe } = this.state; 

        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Player 1 Name</label>
                    <input
                        className="form-control"
                        onChange={ this.handlePlayer1 }
                        value={ player1name }
                    />

                    <label>Player 2 Name</label>
                    <input
                        className="form-control"
                        onChange={ this.handlePlayer2 }
                        value={ player2name }
                    />

                    <label>Winning Score</label>
                    <input
                        className="form-control"
                        onChange={ this.handleWinner }
                        type= "number"
                        value={ winningScore }
                    />

                    <label>Alternate Every</label>
                    <input
                        className="form-control"
                        onChange={ this.handleServing }
                        type= "number"
                        value={ changeServe }
                    />

                </div>
                
                <button className="btn btn-primary">Start Game</button>
            </form>
            );
        }

}

export default Settings; 