import { Component } from 'react';
import styles from '../Filter/index.module.css';

class Filter extends Component {
  render() {
    return (
      <div className={styles.filter}>
        <input
          onChange={e => this.props.onGetFilter(e)}
          type="text"
          placeholder="search..."
        />
      </div>
    );
  }
}

export default Filter;
