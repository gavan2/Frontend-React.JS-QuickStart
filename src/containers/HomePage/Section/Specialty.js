import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loadPreset } from '@babel/core/lib/config/files/plugins';
class Specialty extends Component {


    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <>
                <Slider {...settings}>
                    <div className='img_customize' >
                        <h3>1</h3>
                    </div>
                    <div className='img_customize'>
                        <h3>2</h3>
                    </div>
                    <div className='img_customize'>
                        <h3>3</h3>
                    </div>
                    <div className='img_customize'>
                        <h3>4</h3>
                    </div>
                    <div className='img_customize'>
                        <h3>5</h3>
                    </div>
                    <div className='img_customize'>
                        <h3>6</h3>
                    </div>
                </Slider>
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
