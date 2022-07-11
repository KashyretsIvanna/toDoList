import done from '../../icons/point.webp';
import todo from '../../icons/square.webp';
import styles from '../Item/index.module.css';
const { Component } = require('react');

class Item extends Component {
  render() {
    const { el, onChangeStatus } = this.props;
    return (
      <li className={styles.item}>
        <span>
          <img
            src={el.status ? done : todo}
            onClick={() => {
              onChangeStatus(el.id);
            }}
            className={styles.icon}
            alt=""
          />
        </span>
        {el.value}
        <button
          className={styles.button}
          onClick={() => {
            this.props.onDelete(el.id);
          }}
        >
          delete
        </button>
      </li>
    );
  }
}

export default Item;
