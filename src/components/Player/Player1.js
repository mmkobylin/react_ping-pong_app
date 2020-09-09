import { connect } from "react-redux"; 
import Player from "./Player";

const mapStateToProps = ( state ) => {
    return {
        winner: state.winner,
        serving: state.serving,
        playerScore: state.player1,
        player: 1
    }
};

export default connect(mapStateToProps)(Player); 