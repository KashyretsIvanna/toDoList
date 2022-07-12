import { Component } from 'react';
import styles from '../Modal/index.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');
class Modal extends Component {
  componentDidMount() {
    console.log('component did mount');
    window.addEventListener("keydown",this.listen)
  }

  componentWillUnmount(){
    console.log('component will unmount');
    window.removeEventListener("keydown",this.listen)
  }

  listen=(e)=>{
    if(e.code==="Escape"){
        this.props.onToggleModal()
    }
    console.log(e.code)
  }

  
  render() {
    return createPortal(
      <div className={styles.modal_backdrop}>
        <div className={styles.modal_content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
