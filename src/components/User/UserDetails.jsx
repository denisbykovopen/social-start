import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Mistake from '../../Assets/mistake.svg';
import RatingGray from '../../Assets/TrueStarGray.svg';
import RatingActive from '../../Assets/TrueStarActive.svg';

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating_custom_icon: 3,
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  onStarClickCustomIcon(nextValue, prevValue, name) {
    this.setState({ rating_custom_icon: nextValue });
  }
  render() {
    const { rating_custom_icon } = this.state;
    return (
      <div className="user-details">
        <h2 className="user-name">User Name</h2>
        <div className="user-verification">
          <img src={Mistake} alt="!" />
          <span>верифицируйте свой аккаунт</span>
        </div>
        <div className="user-rating">
          <StarRatingComponent
            className={'stars'}
            // editing={false}
            name="stars"
            value={rating_custom_icon}
            onStarClick={this.onStarClickCustomIcon.bind(this)}
            renderStarIcon={() => <img src={RatingGray} />}
            starColor="#f00"
            renderStarIcon={(index, value) => {
              if (index <= value) {
                return <img src={RatingActive} />;
              }
              return <img src={RatingGray} />;
            }}
          />
          <span>{rating_custom_icon} отзывов</span>
        </div>
      </div>
    );
  }
}
