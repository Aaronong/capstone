// @flow
import {
  DIAGRAM_TAB,
  DATA_GENERATION_TAB,
  STATISTICS_TAB,
  EXTENSION_STORE_TAB,
  SETTINGS_TAB,
} from '../reduxActions/tabNavigation';

type actionType = {
  +type: string
};

export default function tabNavigation(state: string = DIAGRAM_TAB, action: actionType) {
  switch (action.type) {
    case DIAGRAM_TAB:
      return DIAGRAM_TAB;
    case DATA_GENERATION_TAB:
      return DATA_GENERATION_TAB;
    case STATISTICS_TAB:
      return STATISTICS_TAB;
    case EXTENSION_STORE_TAB:
      return EXTENSION_STORE_TAB;
    case SETTINGS_TAB:
      return SETTINGS_TAB;
    default:
      return state;
  }
}
