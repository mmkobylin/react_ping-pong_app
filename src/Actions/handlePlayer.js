export const handlePlayer = ( player ) => {
    return { 
        type: "PLAYER_SCORES",
        player: player,
    };
}

//action is just an object