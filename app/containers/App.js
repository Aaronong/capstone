import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import LeftIconBar from './LeftIconBar';
import LeftExplorer from './LeftExplorer';
import MainContent from './MainContent';
import RightProperties from './RightProperties';
import styles from './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: undefined,
      dragging: false,
      primaryWidth: 220,
      maxSecondaryWidth: 1000,
    };
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDragStart() {
    this.setState({
      dragging: true,
    });
  }

  handleDragEnd() {
    this.setState({
      dragging: false,
    });
    setTimeout(() => {
      this.setState({ size: undefined });
    }, 0);
  }

  handleDrag(width) {
    this.setState({ primaryWidth: width });
    this.setState({ maxSecondaryWidth: screen.width - this.state.primaryWidth - 60 });
    if (width >= 60 && width <= 140) {
      this.setState({ size: 60 });
    } else if (width > 140 && width <= 220) {
      this.setState({ size: 220 });
    } else {
      this.setState({ size: undefined });
    }
  }
  render() {
    return (
      <SplitPane
        split="vertical"
        minSize={60}
        defaultSize={220}
        maxSize={screen.width * 0.5}
        size={this.state.dragging ? undefined : this.state.size}
        onChange={this.handleDrag}
        onDragStarted={this.handleDragStart}
        onDragFinished={this.handleDragEnd}
      >
        <div className={styles.appLayout}>
          <LeftIconBar />
          <LeftExplorer />
        </div>
        <div className={styles.appLayout}>
          <SplitPane split="vertical" minSize={60} maxSize={this.state.maxSecondaryWidth}>
            <div>
              <MainContent />
            </div>
            <div>
              <RightProperties />
            </div>
          </SplitPane>
        </div>
      </SplitPane>
    );
  }
}
