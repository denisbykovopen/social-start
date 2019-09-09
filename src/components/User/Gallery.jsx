import React from 'react';
import Edit from '../../Assets/edit.svg';
import SettingsModal from './SettingsModal';

let imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/320x240',
  'https://source.unsplash.com/01vFmYAOqQ0/320x240',
  'https://source.unsplash.com/2Bjq3A7rGn4/320x240',
  'https://source.unsplash.com/t20pc32VbrU/320x240',
  'https://source.unsplash.com/pHANr-CpbYM/320x240',
  'https://source.unsplash.com/3PmwYw2uErY/320x240',
  'https://source.unsplash.com/uOi3lg8fGl4/320x240',
  'https://source.unsplash.com/CwkiN6_qpDI/320x240',
  'https://source.unsplash.com/9O1oQ9SzQZQ/320x240',
  'https://source.unsplash.com/E4944K_4SvI/320x240',
  'https://source.unsplash.com/-hI5dX2ObAs/320x240',
  'https://source.unsplash.com/vZlTg_McCDo/320x240',
];

class GalleryImage extends React.Component {
  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

// class GalleryModal extends React.Component {
//   render() {
//     if (this.props.isOpen === false) {
//       return null;
//     }

//     return (
//       <div
//         isOpen={this.props.isOpen}
//         className="modal-overlay"
//         onClick={this.props.onClick}
//         name={this.props.name}
//       >
//         <div className="modal-body">
//           <a className="modal-close" href="#" onClick={this.props.onClick}>
//             <span className="fa fa-times" />
//           </a>

//           <img src={this.props.src} />
//         </div>
//       </div>
//     );
//   }
// }

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '',
      showSettings: false,
    };

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }
  handleSettings = () => {
    this.setState(prevState => ({
      showSettings: !prevState.showSettings
    }));
}

  render() {
    return (
      <>
        <div className="edit-heading">
          <h3>Фотогалерея</h3>
          <img 
            src={Edit} 
            alt="edit" 
            onClick={this.handleSettings} 
            className="edit-button"
          />
          {this.state.showSettings && <SettingsModal />}
        </div>

        <div
          // refs="gallery-container"
          className="gallery-container"
        >
          <div className="gallery-container-center">
            <div className="gallery-container-inner">
              <div className="gallery-container-row">
                {imgUrls.map((url, index) => {
                  return (
                    <div className="gallery-card">
                      <div className="gallery-card-inner">
                        <GalleryImage
                          className="gallery-thumbnail"
                          src={url}
                          alt={'Image'}
                        />

                        {/* <span
                    className="card-icon-open fa fa-expandw"
                    value={url}
                    onClick={e => this.openModal(url, e)}
                  /> */}
                      </div>
                    </div>
                  );
                })}
                <div className="gallery-index">
                  +{Object.keys(imgUrls).length - 3}
                </div>
              </div>

              {/* <GalleryModal
          isOpen={this.state.showModal}
          onClick={this.closeModal}
          src={this.state.url}
        /> */}
            </div>
          </div>
        </div>
      </>
    );
  }

  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      url: '',
    });
  }
}


