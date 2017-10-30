// @flow
export const DIAGRAM_TAB = 'DIAGRAM_TAB';
export const DATA_GENERATION_TAB = 'DATA_GENERATION_TAB';
export const STATISTICS_TAB = 'STATISTICS_TAB';
export const EXTENSION_STORE_TAB = 'EXTENSION_STORE_TAB';
export const SETTINGS_TAB = 'SETTINGS_TAB';

export function toDiagram() {
  return {
    type: DIAGRAM_TAB,
  };
}

export function toDataGeneration() {
  return {
    type: DATA_GENERATION_TAB,
  };
}

export function toStatistics() {
  return {
    type: STATISTICS_TAB,
  };
}

export function toExtensions() {
  return {
    type: EXTENSION_STORE_TAB,
  };
}

export function toSettings() {
  return {
    type: SETTINGS_TAB,
  };
}
