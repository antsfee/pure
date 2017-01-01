import MoodHome from '../components/MoodHome';
import {bindActionCreators} from 'redux';
import {Connect} from 'react-redux';

const mapStateToProps = (state) =>{
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(MoodHome, dispatch);
  return {
    actions
  };
}

export default Connect(mapStateToProps, mapDispatchToProps)(MoodWelcome);
