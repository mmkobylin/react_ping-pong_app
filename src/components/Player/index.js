import React from "react";
import Header from "./components/Header"
import Reset from "./components/Reset"
import Player from "./components/Player/Player"
import Winner from "./components/Winner"
// import Header from "./components/Header"

const Player1 = ( { player1 } ) => (
    <React.Fragment>
        <Header /> 

        {/* scores */}
        <div className="row mb-4">

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

        </div>
            {/* if i want if statement, i need curly brackets */}
       
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