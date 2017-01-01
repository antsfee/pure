"use strict";
import  * as  actions  from '../resources/actionTypes';

export const moodLogin = () => {
  dispatch(); // dispatch action login action process
  return (dispatch, getStore) => {
    // todo: 请求数据 测试登录 验证是否登录成功
  }
};

export const chooseSex = (sex) => {
  return {
    type: actions.MoodChooseSex,
    sex
  }
}

export const choosePreferTag = (tagId ,tagName) => {
  return {
    type: actions.MoodChoosePreferTag,
    tagId,
    tagName
  };
}
export const getPreferTag = (sex) => (dispatch,getStore){
  // todo: 请求数据区分同状态 给 reducer 从而影响 store
  dispatch();
  return (dispatch,getStore) =>{
  }
}

export const createPreferTag = () => (dispatch, getStore) => {
  // todo:  view -- > action ( sumit -- status) -> action -> reducer -> store
  dispatch();
  return (dispatch, getStore) => {
  }
}

export const modifyPreferTag = () => (dispatch,getStore) => {
  dispatch();
  return (dispatch, getStore) => {
  }
}

export const MoodGetPromptName = () => (dispatch,getStore){
  // todo: get prompt name 
  dispatch(); // 
  return (dispatch, getStore) => {
  }
}

export  const MoodRegistry = (user) => (dispatch,getStore) => {
  // todo: registry
  dispatch({type:moodLogin});
  return (dispatch, getStore) => {
  };
}