import React from "react";

const Buttons = ({
    handlePlayer1, 
    handlePlayer2,
    winner
}) => {
    return(
        <div className="card-footer">
            <button 
                onClick= { handlePlayer1 }
                disabled= { winner !== null }
                className="form-control btn btn-success">+</button>
        </div>
    )
}

export default Buttons;