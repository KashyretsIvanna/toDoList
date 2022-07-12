import { Component } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import Modal from './Modal';
import Clock from './Clock';
import styles from '../components/index.module.css';
import cr from "../components/icons/pngwing.com.png"

class App extends Component {
  state = {
    todo: [
      { id: 'id-1', value: 'To do homework', status: true },
      { id: 'id-2', value: 'Spiner', status: false },
    ],
    filter: '',
    modal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ modal: !prev.modal }));
  };

  componentDidMount() {
    console.log('Component did mount');

    const parserTodos = JSON.parse(localStorage.getItem('todo'));
    if (parserTodos) {
      this.setState({ todo: parserTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('App was updated');
    if (this.state.todo !== prevState.todo) {
      console.log('Todo was updated');
      localStorage.setItem('todo', JSON.stringify(this.state.todo));
    }
  }

  handleDeleteItem = id => {
    this.setState(prev => ({
      todo: prev.todo.filter(el => el.id !== id),
    }));
  };

  handleGetFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleChangeStatus = id => {
    this.setState(prev => ({
      todo: prev.todo.map(item => {
        return item.id !== id ? item : { ...item, status: !item.status };
      }),
    }));
  };

  handleSubmit = value => {
    let nanoId = nanoid();
    this.setState(prev => ({
      todo: [...prev.todo, { id: nanoId, value: value, status: false }],
    }));
  };

  handleFilteredItems = () => {
    return this.state.todo.filter(el => {
      return el.value.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    const { todo } = this.state;
    return (
      <div className={styles.app}>
        <button
          className={styles.button}
          type="button"
          onClick={() => this.toggleModal()}
        >
          Show time
        </button>
        {this.state.modal && (
          <Modal onToggleModal={this.toggleModal}>
            <Clock />
            <button
              className={styles.cross}
              onClick={() => this.toggleModal()}
              type="button"
            >
              <img src={cr} alt="img"/>
            </button>
          </Modal>
        )}
        <Form onSubmit={this.handleSubmit} />
        <Filter onGetFilter={this.handleGetFilter} />
        <ItemList
          onFilteredItems={this.handleFilteredItems}
          onChangeStatus={this.handleChangeStatus}
          onDelete={this.handleDeleteItem}
          todo={todo}
        />
      </div>
    );
  }
}

export default App;
