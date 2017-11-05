import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as openTabActions from '../reduxActions/openTabs';
import styles from './MainContent.scss';

function TabExplorer(openTabs, closeTab, selectTab) {
  const activeTab = openTabs.openTabs[openTabs.currentTab];
  return openTabs.openTabs.map(tab => (
    <div
      key={tab[0]}
      onClick={() => selectTab(tab[0])}
      className={tab[0] === activeTab[0] ? styles.tabActive : styles.tab}
    >
      <div>{tab[0]}</div>
      <i
        className={'fa fa-times'}
        style={{ fontSize: 12, paddingLeft: 8 }}
        onClick={event => {
          event.stopPropagation();
          closeTab(tab[0]);
        }}
      />
    </div>
  ));
}

class MainContent extends Component {
  props: {
    openTabs: tabStateType,
    closeTab: (tabName: string) => void,
    selectTab: (tabName: string) => void,
    closeAll: () => void
  };
  render() {
    const { openTabs, closeTab, selectTab, closeAll } = this.props;

    return (
      <div className={styles.mainContainer}>
        <div className={styles.topRow}>
          <div className={styles.tabBar}>{TabExplorer(openTabs, closeTab, selectTab)}</div>
          <i
            className={['fa fa-times', styles.closeAll].join(' ')}
            style={{ fontSize: 12, paddingRight: 8 }}
            onClick={event => {
              event.stopPropagation();
              closeAll();
            }}
          />
        </div>
        <div className={styles.mainCanvas} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
