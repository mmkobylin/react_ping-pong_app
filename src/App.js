import React from "react";

const App = (
    { 
      player1, 
      player2, 
      handlePlayer1,
      handlePlayer2,
      handleReset,
      serving,  
      winning,  
      winner  

    }
  ) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>
    { console.log(player1) } 

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">          
            {/* if i want if statement, i need curly brackets */}
              <div className={ "card text-center" + (serving === 1 ? "card text-center bg-dark text-white" : "card text-center") }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1 }</p>
                    </div>
                    <div className="card-footer">
                        <button 
                          onClick= { handlePlayer1 }
                          disabled= { player1 === 21 || player2 === 21 }
                          className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
              {/* if i want if statement, i need curly brackets */}
                <div className={ (serving === 2 ? "card text-center bg-dark text-white" : "card text-center") } >
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player2 }</p>
                    </div>
                    <div className="card-footer">
                        <button 
                          onClick= { handlePlayer2 }
                          disabled= { player2 === 21 || player1 === 21 }
                          className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */}
        <h2 className="alert alert-success">Player { winner } wins!</h2>

        <hr />

        { /* reset button */}
        <button 
          className="btn btn-danger"
          onClick= { handleReset }>Reset</button>
        
    </React.Fragment>
);

export default App;