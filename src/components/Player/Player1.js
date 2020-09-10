import { connect } from "react-redux"; 
import Player from "./Player";
import { handlePlayer } from "../../Actions/handlePlayer"

const mapStateToProps = ( state ) => {
    return {
        winner: state.winner,
        serving: state.serving,
        playerScore: state.player1,
        player: 1,
    }
};

const mapDispatchToProps = dispatch => {
    return {
    handlePlayer: () => dispatch(handlePlayer( 1 )),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); 

// export default connect(mapStateToProps, mapDispatchToProps)(Player); 

// export default connect(mapStateToProps )(Player); 