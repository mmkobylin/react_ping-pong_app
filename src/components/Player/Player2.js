import { connect } from "react-redux"; 
import Player from "./Player";

const mapStateToProps = ( state ) => {
    return {
        winner: state.winner,
        serving: state.serving,
        playerScore: state.player2,
        player: 2
    }
};

export default connect(mapStateToProps)(Player); 