import React from 'react';
import Edit from '../../../Assets/edit.svg';
import SettingsModal from '../SettingsModal';
import './About.css';

const User = [
  {
    id: 1,
    name: 'User Name',
    about: 'люблю котов',
    showEmail: true,
    birth: '2018-05-18T04:00:00.000Z',
    place: ['Ukraine', 'Dnepr'],
    interests: ['британцы'],
  },
];
class About extends React.Component {
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
          <h3>О себе</h3>
          <img
            src={Edit}
            alt="edit"
            onClick={this.handleSettings}
            className="edit-button"
          />
          {this.state.showSettings && <SettingsModal />}
        </div>
        <div className="about">
          {User.map(element => {
            return (
              <div key={element.id} className="about-inner">
                {/* {element.showEmail && <li>{element.email}</li>} */}
                <div className="about-row">
                  <li className="about-definitions">Дата рождения</li>
                  <li className="about-data">
                    {
                      (element.birth = new Date().toLocaleDateString(
                        'ru',
                        {
                          day: 'numeric',
                          month: 'numeric',
                          year: 'numeric',
                        },
                      ))
                    }
                  </li>
                </div>
                <div className="about-row">
                  <li className="about-definitions">О себе</li>
                  <li className="about-data">{element.about}</li>
                </div>
                <div className="about-row">
                  <li className="about-definitions">
                    Местоположение
                  </li>
                  <li className="about-data">
                    {element.place.join(', ')}
                  </li>
                </div>
                <div className="about-row">
                  <li className="about-definitions">Интересы</li>
                  <li className="about-data about-data-hash">
                    {' '}
                    {'\u0023'.concat(element.interests)}{' '}
                  </li>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default About;
