import {
  DIAGRAM_TAB,
  DATA_GENERATION_TAB,
  STATISTICS_TAB,
  EXTENSION_STORE_TAB,
  SETTINGS_TAB,
} from './tabNavigation';

export const OPEN_TAB = 'OPEN_TAB';
export const CLOSE_TAB = 'CLOSE_TAB';
export const SELECT_TAB = 'SELECT_TAB';
export const CLOSE_ALL = 'CLOSE_ALL';

export function closeAll() {
  return {
    type: CLOSE_ALL,
  };
}

export function selectTab(tabName) {
  return {
    type: SELECT_TAB,
    tabName,
  };
}

function addTab(tabName, tabType) {
  return {
    type: OPEN_TAB,
    tabName,
    tabType,
  };
}

export function closeTab(tabName) {
  return {
    type: CLOSE_TAB,
    tabName,
  };
}

export function addDiagramTab(tabName) {
  return addTab(tabName, DIAGRAM_TAB);
}

export function addDataGenerationTab(tabName) {
  return addTab(tabName, DATA_GENERATION_TAB);
}

export function addStatisticsTab(tabName) {
  return addTab(tabName, STATISTICS_TAB);
}

export function addExtensionsTab(tabName) {
  return addTab(tabName, EXTENSION_STORE_TAB);
}

export function addSettingsTab(tabName) {
  return addTab(tabName, SETTINGS_TAB);
}
