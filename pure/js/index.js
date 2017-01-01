/**
 * Created by docseven on 2016/12/31.
 */
'use strict'
import  React , {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import * as Store from './store';
import MoodHome from './containers/MoodHome';
// import MoodWall from './containers/MoodWall';
// import MoodDetail from './containers/MoodDetail';
// import MyMood from './containers/MyMood';
// import HerMood from './containers/HerMood';
// import MoodRelease from './containers/MoodRelease';
// import MoodMessage from './containers/MoodMessage';
import MoodWelcome from './containers/MoodWelcome';

export default class Index extends  Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <Provider store = {Store} >
          <Scene key='root'>
            <Scene key='index' initial={false} title='首页' component={MoodHome} />
            {/*<Scene key='moodWall' initial=false title='心情墙' component={MoodWall}></Scene>*/}
            {/*<Scene key='moodDetail' initial=false title='详情' component={MoodDetail}></Scene>*/}
            {/*<Scene key='myMood' initial=false title='我的心情' component={MyMood}></Scene>*/}
            {/*<Scene key='herMood' initial=false title='他的心情' component={HerMood}></Scene>*/}
            {/*<Scene key='release' initial=false title='发布' component={MoodRelease}></Scene>*/}
            {/*<Scene key='message' initial=false title='消息' component={MoodMessage}></Scene>*/}
            <Scene key='welcome' initial={true} title='心情' component={MoodWelcome} />
          </Scene>
        </Provider>
    );
  }
}
