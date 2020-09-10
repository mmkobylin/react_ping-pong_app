import React from "react";
import Header from "./components/Header"
import Player1 from "./components/Player/Player1"
import Player2 from "./components/Player/Player2"
import Winner from "./components/Winner"
import WinningScore from "./components/WinningScore"
import Reset from "./components/Reset"
import Settings from "./components/Settings"

const App = () => (
    <React.Fragment>
        <Header /> 
        <Settings />
        {/* scores */}
        <div className="row mb-4">

          <Player1 />
          <Player2 />
        </div>

        <Winner/>
        <hr />

        { /* reset button */}
        <Reset />
        
    </React.Fragment>
);

export default App;