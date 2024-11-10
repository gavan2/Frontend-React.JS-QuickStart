import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import { loadPreset } from '@babel/core/lib/config/files/plugins';


class HomeFooter extends Component {


    render() {

        return (
            <>
                <div className="home-footer">
                    <p>&copy; 2024 ANH NGUYEN HOANG.
                        <a target="_blank" href="https://www.youtube.com/@hoanganhnguyen-fn4ws">
                            More information, please visit my youtube chanel. &#8594; Click here &#8592;
                        </a>
                    </p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
