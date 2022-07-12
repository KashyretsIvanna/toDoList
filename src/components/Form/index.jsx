import styles from '../Form/index.module.css';
const { Component } = require('react');

class Form extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };



  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <form
          className={styles.form}
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <input
            className={styles.input}
            placeholder="What do you want to do?"
            onChange={e => this.handleChange(e)}
            value={this.state.value}
            type="text"
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
