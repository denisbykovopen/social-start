import React from 'react';
import Edit from '../../../assets/edit.svg';
import SettingsModal from '../SettingsModal';
import './Contacts.css';
import Email from '../../../assets/Email.svg';
import Phone from '../../../assets/Phone.svg';
import Whatsapp from '../../../assets/Whatsapp.svg';
import Messanger from '../../../assets/Messenger.svg';
import Viber from '../../../assets/Viber.svg';
import AddButton from '../../../assets/AddButton.svg';

class Contacts extends React.Component {
  state = {
    showSettings: false,
  };
  handleSettings = () => {
    this.setState(prevState => ({
      showSettings: !prevState.showSettings,
    }));
  };
  render() {
    return (
      <>
        <div className="edit-heading">
          <h3>Контакты</h3>
          <img
            src={Edit}
            alt="edit"
            onClick={this.handleSettings}
            className="edit-button"
          />
          {this.state.showSettings && <SettingsModal />}
        </div>
        <div className="contacts">
          <div className="contacts-inner">
            <img
              src={Email}
              alt="Email"
              className="contacts-inner-img"
            />
            <span>Email</span>
          </div>
          <div className="contacts-inner">
            <img
              src={Phone}
              alt="Phone"
              className="contacts-inner-img"
            />
            <span>Телефон</span>
          </div>
          <div className="contacts-inner">
            <img
              src={Whatsapp}
              alt="Whatsapp"
              className="contacts-inner-img"
            />
            <span>Whatsapp</span>
          </div>
          <div className="contacts-inner">
            <img
              src={Messanger}
              alt="Messanger"
              className="contacts-inner-img"
            />
            <span>Messanger</span>
          </div>
          <div className="contacts-inner">
            <img
              src={Viber}
              alt="Viber"
              className="contacts-inner-img"
            />
            <span>Viber</span>
          </div>
          <div className="contacts-inner">
            <img
              src={AddButton}
              alt="AddButton"
              className="contacts-inner-img"
            />
            <span>Добавить</span>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
