import React from "react";
import Header from "./components/Header"
import Player1 from "./components/Player/Player1"
import Player2 from "./components/Player/Player2"
import Winner from "./components/Winner"
import Reset from "./components/Reset"

const App = (
    {
      handleReset,
    }
  ) => (
    <React.Fragment>
        <Header /> 

        {/* scores */}
        <div className="row mb-4">

          <Player1 />
          <Player2 />
        </div>

        <Winner/>
        <hr />

        { /* reset button */}
        <Reset handleReset={ handleReset }/>
        
    </React.Fragment>
);

export default App;