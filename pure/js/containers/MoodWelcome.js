import MoodWelcome from '../components/MoodWelcome';
import {bindActionCreators} from 'redux';
import {Connect} from 'react-redux';
import * as WelcomeAction from '../actions/welcome';
const mapStateToProps = (state) =>{
  return ...state
}
const mapDispatchToProps = (dispatch) =>{
  const actions = bindActionCreators(WelcomeAction,dispatch);
  return {
    actions
  };
}
export default  Connect(mapStateToProps,mapDispatchToProps)(MoodWelcome);
