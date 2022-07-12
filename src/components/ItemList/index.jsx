import Item from './Item';
import styles from '../ItemList/index.module.css';
const { Component } = require('react');

class ItemList extends Component {
  render() {
    const { onDelete, onChangeStatus, onFilteredItems } = this.props;
    return (
      <ul className={styles.list}>
        {onFilteredItems().map(el => {
          return (
            <Item
              onChangeStatus={onChangeStatus}
              onDelete={onDelete}
              key={el.id}
              el={el}
            />
          );
        })}
      </ul>
    );
  }
}



export default ItemList;

