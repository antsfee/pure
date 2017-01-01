"use strict";
import  * as  actions  from '../resources/actionTypes';

export const fetchMoodList = () => {
  return {
    type: actions.FetchMoodList
  };
}

export const actionLike = (id)=>{
  return {
    type: actions.MoodLike,
    id
  }
}

export const moodLike = (id) => {
  return {
      type: actions.MoodLike
  }
}
