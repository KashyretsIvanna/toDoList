import { Component } from 'react';
import styles from '../Clock/index.module.css';

class Clock extends Component {
  state = {
    data: new Date().toLocaleTimeString(),
  };

  initialDate = null;
  componentDidMount() {
    this.initialDate = setInterval(() => {
      this.setState({ data: new Date().toLocaleTimeString() });
    },1000);
  }

  componentWillUnmount() {
    clearInterval(this.initialDate)
  }

  render() {
    return <div className={styles.clock}>{this.state.data}</div>;
  }
}

export default Clock;
