import React from 'react';
import UserAvatar from '../../Assets/empty-avatar.svg';
import PostForm from './PostForm';
import AllPost from './AllPost';

export default class PostFeed extends React.Component {
    state = {
        isOpen: false
    }
    handlePost = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
    }
    render() {
        return(
            <div className="post-feed">
                <div className="post-feed-inner">
                    <div 
                        className="constructor-button"
                        onClick={this.handlePost}
                    >
                        <img
                            src={UserAvatar}
                            alt="UserAvatar"
                        />
                        <span>Поделись новостью!</span>
                    </div>
                    {this.state.isOpen && <PostForm />}
                    <AllPost />
                </div>
            </div>
        );
    }
}