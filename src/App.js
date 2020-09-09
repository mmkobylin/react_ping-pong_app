import React from "react";
import Header from "./components/Header"
import Player1 from "./components/Player/Player1"
import Player2 from "./components/Player/Player2"
import Winner from "./components/Winner"
import Reset from "./components/Reset"

const App = (
    { 
      handlePlayer1,
      handlePlayer2,
      handleReset,
    }
  ) => (
    <React.Fragment>
        <Header /> 

        {/* scores */}
        <div className="row mb-4">

          <Player1
            handlePlayer={ handlePlayer1 } 
          />

          <Player2
            handlePlayer={ handlePlayer2 } 
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