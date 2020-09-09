import { connect } from "react-redux"; 
import Player from "./Player";
import { handlePlayer } from "../../Actions/handlePlayer";

const mapDispatchToProps = dispatch => {
    return {
    handlePlayer: () => dispatch(handlePlayer()),
    };
}

export default connect(null, mapDispatchToProps)(Player); 
