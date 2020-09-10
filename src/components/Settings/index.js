import { connect } from "react-redux";
import Settings from "./settings";
import { saveSettings } from "../../Actions/actions";

const mapStateToProps = state => {
    return {
        player1name: state.player1name,
        player2name: state.player2name,
        winningScore: state.winningScore,
        changeServe: state.changeServe,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    handleSave: (player1name, player2name, winningScore, changeServe) => 
    dispatch(saveSettings(player1name, player2name, winningScore, changeServe)),
    };
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
