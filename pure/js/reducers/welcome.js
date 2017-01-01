"use strict";
import * as actionsString from '../resources/actionTypes';

const initialState = {
  id:'',
  nickName:'',
  sex:0,
  tagId:'',
  tagName:'',
}

const welcome = (state = initialState , action) => {
  
  const {typ}= action;
  switch (type){
    case actionsString.MoodLogin:
      return {...state}
    default:
      return state;
  }
}


export default {
  welcome
};
