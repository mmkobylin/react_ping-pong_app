import React from "react";
import index from '../index';

const Reset = ({
    handleReset
    }) => (
        <button 
            className="btn btn-danger"
            onClick= { handleReset }> 
                Reset
        </button>
    )

export default Reset;