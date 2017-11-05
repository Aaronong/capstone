import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Explorers.scss';
import * as openTabActions from '../../reduxActions/openTabs';
import { tabStateType } from '../../reduxReducers/openTabs';
import { DATA_GENERATION_TAB } from '../../reduxActions/tabNavigation';

function OpenDataGeneratorTabs(openTabs, closeTab, selectTab) {
  const activeTab = openTabs.openTabs[openTabs.currentTab];
  const statsTabs = openTabs.openTabs.filter(tab => tab[1] === DATA_GENERATION_TAB);
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

class DataGeneratorExplorer extends Component {
  props: {
    addDataGenerationTab: (tabName: string) => void,
    closeTab: (tabName: string) => void,
    openTabs: tabStateType,
    selectTab: (tabName: string) => void
  };
  render() {
    const { addDataGenerationTab, closeTab, openTabs, selectTab } = this.props;
    return (
      <div className={styles.explorerContainer}>
        <div className={styles.explorerTitle}>DATA GENERATORS</div>
        <div className={styles.explorerHeader}>OPEN GENERATORS</div>
        {OpenDataGeneratorTabs(openTabs, closeTab, selectTab)}
        <div className={styles.explorerHeader}>INSTALLED GENERATORS</div>
        <a onClick={() => addDataGenerationTab('DataGenerator 1')}>
          <div className={styles.explorerItem}> DataGenerator 1 </div>
        </a>
        <a onClick={() => addDataGenerationTab('DataGenerator 2')}>
          <div className={styles.explorerItem}> DataGenerator 2 </div>
        </a>
        <a onClick={() => addDataGenerationTab('DataGenerator 3')}>
          <div className={styles.explorerItem}> DataGenerator 3 </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataGeneratorExplorer);
