export const handlePlayer = player => {
    return { 
        type: "PLAYER_SCORES",
        player: player,
    };
}

//action is just an object

export const reset = () => {
    return { 
        type: "RESET"
    };
}

export default reset; 

export const saveSettings = (player1name, player2name, winningScore, changeServe) => {
    console.log(winningScore);
    return {
        type: "SAVE_SETTINGS",
        player1name: player1name, 
        player2name: player2name,
        winningScore: winningScore,
        changeServe: changeServe,
        
    };
};