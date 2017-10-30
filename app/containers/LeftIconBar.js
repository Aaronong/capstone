// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './LeftIconBar.scss';
import * as TabNavigationActions from '../reduxActions/tabNavigation';

const DIAGRAM_TAB = 'DIAGRAM_TAB';
const DATA_GENERATION_TAB = 'DATA_GENERATION_TAB';
const STATISTICS_TAB = 'STATISTICS_TAB';
const EXTENSION_STORE_TAB = 'EXTENSION_STORE_TAB';
const SETTINGS_TAB = 'SETTINGS_TAB';

class LeftIconBar extends Component {
  props: {
    toDiagram: () => void,
    toDataGeneration: () => void,
    toStatistics: () => void,
    toExtensions: () => void,
    toSettings: () => void,
    tab: string
  };
  render() {
    const { toDiagram, toDataGeneration, toStatistics, toExtensions, toSettings, tab } = this.props;
    return (
      <div className={styles.iconBar}>
        <div>
          <div className={tab === DIAGRAM_TAB ? styles.iconActive : styles.icon}>
            <i className="fa fa-database fa-2x" onClick={toDiagram} />
          </div>
          <div className={tab === DATA_GENERATION_TAB ? styles.iconActive : styles.icon}>
            <i className="fa fa-table fa-2x" onClick={toDataGeneration} />
          </div>
          <div className={tab === STATISTICS_TAB ? styles.iconActive : styles.icon}>
            <i className="fa fa-line-chart fa-2x" onClick={toStatistics} />
          </div>
          <div className={tab === EXTENSION_STORE_TAB ? styles.iconActive : styles.icon}>
            <i className="fa fa-shopping-cart fa-2x" onClick={toExtensions} />
          </div>
        </div>
        <div
          className={tab === SETTINGS_TAB ? styles.iconEndActive : styles.iconEnd}
          onClick={toSettings}
        >
          <i className="fa fa-cog fa-2x" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tab: state.tabNavigation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TabNavigationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftIconBar);
