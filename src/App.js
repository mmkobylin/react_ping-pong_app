import React from "react";
import Header from "./components/Header"
import Reset from "./components/Reset"
import Player from "./components/Player"
import Winner from "./components/Winner"
import Buttons from "./components/Buttons"
// import Header from "./components/Header"

const App = (
    { 
      player1, 
      player2, 
      handlePlayer1,
      handlePlayer2,
      handleReset,
      serving,  
      winner,
    }
  ) => (
    <React.Fragment>
        <Header /> 

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">          
            {/* if i want if statement, i need curly brackets */}
              <div className={ "card text-center" + (serving === 1 ? "card text-center bg-dark text-white" : "card text-center") }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1 }</p>
                    </div>

                    {/* <Buttons />  */}
                    <div className="card-footer">
                        <button 
                          onClick= { handlePlayer1 }
                          disabled= { winner !== null }
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
                    {/* this is where i put winner logic */}
                 
                    <div className="card-footer">
                        <button 
                          onClick= { handlePlayer2 }
                          disabled= { winner !== null }
                          className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
        </div>
        <Player 
          handlePlayer={ handlePlayer1 } 
          playerScore={ player1 } 
          serving={ serving } 
          winner={ winner }
          player={ 1 }
          />
        <Player
          handlePlayer={ handlePlayer2} 
          playerScore={ player2 } 
          serving={ serving } 
          winner={ winner }
          player={ 2 }

        />
        { /* winner message */}
        <Winner />
        {/* { winner ? (
        <h2 className="alert alert-success">Player { winner } wins!</h2>
        ) : null 
      } */}
        <hr />

        { /* reset button */}
        <Reset handleReset={ handleReset }/>
        
    </React.Fragment>
);

export default App;