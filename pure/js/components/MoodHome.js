import  React , {Component} from 'react';
import  (Connect) from 'react-redux';
class MoodHome extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    );
  }
}

const mapStateToProps = (state) =>{
  return ...state
}

export default Connect(mapStateToProps)(MoodHome);
