import { OPEN_TAB, CLOSE_TAB, SELECT_TAB, CLOSE_ALL } from '../reduxActions/openTabs';

export type actionType = {
  type: string,
  tabName: string,
  tabType: string
};

export type tabStateType = {
  // name - type
  openTabs: Array<[?string, ?string]>,
  currentTab: number
};

export default function openTabs(state = { openTabs: [], currentTab: 0 }, action) {
  switch (action.type) {
    case OPEN_TAB: {
      // if tab already exists edit current state to opening state
      if (state.openTabs.find(tab => tab[0] === action.tabName)) {
        const tabNum = state.openTabs.findIndex(tab => tab[0] === action.tabName);
        console.log(tabNum);
        return Object.assign({}, state, { currentTab: tabNum });
      }
      // if tab does not exist create the tab and set current state to it
      state.openTabs.push([action.tabName, action.tabType]);
      return { openTabs: state.openTabs, currentTab: state.openTabs.length - 1 };
    }
    case CLOSE_TAB: {
      // if index of closing tab is smaller or equal to current tab, curr tab minus 1
      const indexClosingTab = state.openTabs.findIndex(tab => tab[0] === action.tabName);
      let newCurrentTab = state.currentTab;
      if (indexClosingTab <= state.currentTab && state.currentTab > 0) {
        newCurrentTab = state.currentTab - 1;
      }
      return Object.assign({}, state, {
        openTabs: state.openTabs.filter(tab => tab[0] !== action.tabName),
        currentTab: newCurrentTab,
      });
    }
    case SELECT_TAB: {
      const indexSelectTab = state.openTabs.findIndex(tab => tab[0] === action.tabName);
      return Object.assign({}, state, { currentTab: indexSelectTab });
    }
    case CLOSE_ALL:
      return { openTabs: [], currentTab: 0 };

    default:
      return state;
  }
}
