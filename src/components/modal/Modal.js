/**
 * Created by Chris Ho on 8/21/2016.
 */
import React, {Component, PropTypes} from 'react';

class Modal extends Component {
  render() {
    const {children, modalTitle, onClick} = this.props;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={onClick}
                  data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title" id="gridSystemModalLabel">{modalTitle}</h4>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element,
  modalTitle:PropTypes.string,
  onClick:PropTypes.func
};

export default Modal;
