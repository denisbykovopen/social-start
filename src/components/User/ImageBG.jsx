import React from 'react';
import DownLoad from '../../Assets/download.svg';
import Camera from '../../Assets/camera.svg';
import UserGray from '../../Assets/user_gray.svg';

export default class ImageBG extends React.Component {
    state = {
        img: ''
    }
    handleNewImage = e => {
        let file = e.target.files[0];
        // console.log(file);
        this.setState({ img: file });
        // this.setState({ img: e.target.files[0] });
    }
    // onImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //       this.setState({
    //         img: URL.createObjectURL(event.target.files[0])
    //       },
    //       console.log('console', this.state.img));
    //       console.log('console', this.state.img);
    //     }
    // }
    // componentDidMount() {
    //     this.onImageChange();
    // }
    render() {
        return(
            <div 
                className="image-bg"
                style={{
                    backgroundImage:  `url(${this.state.img})`
                }}
            >
                {/* <img src={this.state.img} alt="img" /> */}
                <span>Привет, загрузите свою обложку</span>
                <img
                    src={DownLoad}
                    alt="Here"
                />
                <div className="image-bg-upload">
                    <label htmlFor="image-bg-input">
                        <img
                            src={Camera}
                            alt="New avatar"
                        />
                    </label>
                    <input
                        id="image-bg-input"
                        type="file" 
                        onChange={this.handleNewImage} 
                        onChange={this.onImageChange}
                        capture style={{display: 'none'}}  
                    />
                </div>
            </div>
        );
    }
}