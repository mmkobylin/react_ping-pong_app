import { connect } from "react-redux";
import Settings from "./settings";

const mapStateToProps = state => {
    return {
        player: state.player,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    handleSave: value => dispatch(saveSettings(value)),
    };
};
    
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
