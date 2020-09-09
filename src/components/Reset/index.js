import { connect } from "react-redux"; 
import Reset from "./Reset";

const mapStateToProps = ( { state } ) => {
    return {
        "Reset": state.Reset,
    }
};

export default connect(mapStateToProps)(Reset); 