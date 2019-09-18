import React from 'react';
import './modal.css';

export default Trigger => Modal =>
  class extends React.Component {
    state = {
      isOpen: false,
    };

    toggleModal = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    };

    closeModal = () => {
      this.toggleModal();
      const { onClose } = this.props;
      if (onClose) onClose.forEach(func => func());
    };

    render() {
      const { isOpen } = this.state;
      return (
        <>
          <Trigger toggleModal={this.toggleModal} />
          {isOpen && (
            <div className="modal-wrapper">
              <div
                onClick={this.closeModal}
                className="modal-cover"
              />
              <div className="modal-container">
                <div
                  onClick={this.closeModal}
                  className="modal-close-button"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M25.7634 23.3913L19.372 16.9999L25.7634 10.6085C26.0546 10.3173 26.2905 9.29066 25.4998 8.49997C24.7092 7.70928 23.6824 7.94527 23.3913 8.23639L16.9998 14.6279L10.6084 8.23643C10.3173 7.94527 9.2906 7.70928 8.49994 8.49993C7.70929 9.29059 7.94525 10.3173 8.23637 10.6085L14.6278 16.9999L8.23637 23.3914C7.94528 23.6825 7.70922 24.7092 8.49994 25.4999C9.29067 26.2907 10.3174 26.0546 10.6085 25.7635L16.9999 19.372L23.3914 25.7635C23.6825 26.0546 24.7092 26.2907 25.4999 25.4999C26.2907 24.7092 26.0545 23.6825 25.7634 23.3913Z"
                      fill="#AEAEAE"
                    />
                  </svg>
                </div>
                {Modal ? (
                  <Modal {...this.props} />
                ) : (
                  this.props.children
                )}
              </div>
            </div>
          )}
        </>
      );
    }
  };
