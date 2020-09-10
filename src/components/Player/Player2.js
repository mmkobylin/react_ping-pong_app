import { connect } from "react-redux"; 
import Player from "./Player";
import { handlePlayer } from "../../Actions/handlePlayer"

    // mapStateToProps - ask somebody to get you something
    const mapStateToProps = ( state ) => {
        return {
            winner: state.winner,
            serving: state.serving,
            playerScore: state.player2,
            player: 2
        }
    };
    //giving somebody something to put into store
    const mapDispatchToProps = dispatch => {
        return {
        handlePlayer: () => dispatch(handlePlayer( 2 )),
        };
    }

export default connect(mapStateToProps, mapDispatchToProps)(Player); 

