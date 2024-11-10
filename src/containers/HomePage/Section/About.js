import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import { loadPreset } from '@babel/core/lib/config/files/plugins';


class About extends Component {


    render() {

        return (
            <>
                <div className="section-share section-about">
                    <div className="section-about-header">
                        Truyền thông nói về tôi
                    </div>
                    <div className="section-about-content">
                        <div className="content-left">
                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/2Qcv1qD4Q4E"
                                title="slot 12-iot -LED 7 thanh" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen></iframe>
                        </div>
                        <div className="content-right">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ratione voluptate
                                praesentium quibusdam illo non fugit nobis voluptatem, labore, adipisci esse ab obcaecati
                                quasi, sequi iusto voluptas exercitationem temporibus deserunt.
                            </p>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
