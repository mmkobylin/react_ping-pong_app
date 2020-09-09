import React, { Component } from 'react'; 

class Settings extends Component { 

    constructor(props){
        super(props);

         this.state = { 
             player: props.player, 
        };
        
        this.handlePlayer1 = this.handlePlayer1.bind(this), 
        this.handlePlayer2 = this.handlePlayer2.bind(this), 
        this.handleWinner = this.handleWinner.bind(this), 
        this.handleServing = this.handleServing.bind(this), 

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handlePlayer1(e) {
        this.setState({ step: e.currentTarget.value }) ; 
    }
       
    handlePlayer2(e) {
        this.setState({ step: e.currentTarget.value }) ; 
    }

    handleWinner(e) {
        this.setState({ step: e.currentTarget.value }) ; 
    }
       
    handleServing(e) {
        this.setState({ step: e.currentTarget.value }) ; 
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        let { player1, player2, winner, serving } = this.state; 

        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Player 1 Name</label>
                    <input
                        className="form-control"
                        onChange={ this.handlePlayer1 }
                        value={ player1 }
                    />

                    <label>Player 2 Name</label>
                    <input
                        className="form-control"
                        onChange={ this.handlePlayer2 }
                        value={ player2 }
                    />

                    <label>Winning Score</label>
                    <input
                        className="form-control"
                        onChange={ this.handleWinner }
                        placeholder={ 21 }
                        type= "number"
                        value={ winner }
                    />

                    <label>Player 1 Name</label>
                    <input
                        className="form-control"
                        onChange={ this.handleServing }
                        placeholder={ 5 }
                        type= "number"
                        value={ serving }
                    />


                </div>
                
                <button className="btn btn-primary">Save</button>
            </form>
            );
        }

}

export default Settings; 