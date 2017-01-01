import {createStore, applyMiddleware,compose} form 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from '../reducers'
const middlewares = [];

middlewares.push(thunk);
middlewares.push(promise);

if(process.env.NODE_ENV === 'development'){
  const logger = createLogger();
  middlewares.push(logger);
}



/*  export default function configureStore() {
  const store = compose(
  applyMiddleware(...middlewares)
  )(createStore)(reducers);
  return store;
};
*/

const store = compose(
    applyMiddleware(...middlewares)
  )(createStore)(reducers);


export default const store;






