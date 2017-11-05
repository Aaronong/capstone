import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Explorers.scss';
import * as openTabActions from '../../reduxActions/openTabs';
import { tabStateType } from '../../reduxReducers/openTabs';
import { STATISTICS_TAB } from '../../reduxActions/tabNavigation';

function OpenStatisticsTabs(openTabs, closeTab, selectTab) {
  const activeTab = openTabs.openTabs[openTabs.currentTab];
  const statsTabs = openTabs.openTabs.filter(tab => tab[1] === STATISTICS_TAB);
  return statsTabs.map(tab => (
    <a
      key={tab[0]}
      onClick={() => selectTab(tab[0])}
      className={tab[0] === activeTab[0] ? styles.openItemActive : styles.openItem}
    >
      <i
        className={'fa fa-times'}
        style={{ fontSize: 12, paddingRight: 8 }}
        onClick={event => {
          event.stopPropagation();
          closeTab(tab[0]);
        }}
      />
      <div>{tab[0]}</div>
    </a>
  ));
}

class StatisticsExplorer extends Component {
  props: {
    addStatisticsTab: (tabName: string) => void,
    closeTab: (tabName: string) => void,
    openTabs: tabStateType,
    selectTab: (tabName: string) => void
  };
  render() {
    const { addStatisticsTab, closeTab, openTabs, selectTab } = this.props;
    return (
      <div className={styles.explorerContainer}>
        <div className={styles.explorerTitle}>STATISTICS</div>
        <div className={styles.explorerHeader}>OPEN STATS</div>
        {OpenStatisticsTabs(openTabs, closeTab, selectTab)}
        <div className={styles.explorerHeader}>INSTALLED STATS</div>
        <a onClick={() => addStatisticsTab('Statistics 1')}>
          <div className={styles.explorerItem}> Statistics 1 </div>
        </a>
        <a onClick={() => addStatisticsTab('Statistics 2')}>
          <div className={styles.explorerItem}> Statistics 2 </div>
        </a>
        <a onClick={() => addStatisticsTab('Statistics 3')}>
          <div className={styles.explorerItem}> Statistics 3 </div>
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    openTabs: state.openTabs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(openTabActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsExplorer);
