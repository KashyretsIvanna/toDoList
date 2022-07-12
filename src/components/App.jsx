import { Component } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import { nanoid } from 'nanoid';
import Filter from './Filter';

class App extends Component {
  state = {
    todo: [
      { id: 'id-1', value: 'To do homework', status: true },
      { id: 'id-2', value: 'Spiner', status: false },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filter !== prevState.filter) {
      console.log('Filter updated');
    }

    localStorage.setItem('todo', JSON.stringify(this.state.todo));
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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
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
