// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import tabNavigation from './tabNavigation';
import openTabs from './openTabs';

const rootReducer = combineReducers({
  counter,
  router,
  tabNavigation,
  openTabs,
});

export default rootReducer;
