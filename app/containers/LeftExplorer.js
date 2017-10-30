// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataGeneratorExplorer from '../components/LeftExplorers/DataGeneratorExplorer';
import DiagramExplorer from '../components/LeftExplorers/DiagramExplorer';
import ExtensionsExplorer from '../components/LeftExplorers/ExtensionsExplorer';
import SettingExplorer from '../components/LeftExplorers/SettingExplorer';
import StatisticsExplorer from '../components/LeftExplorers/StatisticsExplorer';
import {
  DIAGRAM_TAB,
  DATA_GENERATION_TAB,
  STATISTICS_TAB,
  EXTENSION_STORE_TAB,
  SETTINGS_TAB,
} from '../reduxActions/tabNavigation';

class LeftExplorer extends Component {
  props: {
    tab: string
  };
  render() {
    const { tab } = this.props;
    switch (tab) {
      case DIAGRAM_TAB:
        return <DiagramExplorer />;
      case DATA_GENERATION_TAB:
        return <DataGeneratorExplorer />;
      case STATISTICS_TAB:
        return <StatisticsExplorer />;
      case EXTENSION_STORE_TAB:
        return <ExtensionsExplorer />;
      case SETTINGS_TAB:
        return <SettingExplorer />;
      default:
        return <DiagramExplorer />;
    }
  }
}

function mapStateToProps(state) {
  return {
    tab: state.tabNavigation,
  };
}

export default connect(mapStateToProps)(LeftExplorer);
