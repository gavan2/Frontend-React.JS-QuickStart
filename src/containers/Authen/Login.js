import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import handleLoginAPI from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errMessage: ''
        }
    }

    handleOnchangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        try {
            this.setState({
                errMessage: ''
            })
            let data = await handleLoginAPI(this.state.email, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('login success')
            }
        } catch (error) {
            console.log(error.response.data);
            this.setState({
                errMessage: error.response.data.message
            })
        }
    }
    render() {
        return (
            <>
                <div className="login-background">
                    <div className="login-container">
                        <div className="login-content">
                            <div className='col-12 text-login'>Login</div>
                            <div className="col-12 form-group login-input">
                                <label htmlFor="">Email</label>
                                <input type="text" className='form-control' name="email" id=""
                                    placeholder='Enter your email'
                                    value={this.state.email}
                                    onChange={(event) => this.handleOnchangeEmail(event)}
                                />
                            </div>
                            <div className="col-12 form-group login-input">
                                <label htmlFor="">Password</label>
                                <input type="password" className='form-control' name="password" id=""
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnchangePassword(event)}
                                />
                            </div>
                            <div className="col-12">
                                <button type="button" className='btn-login'
                                    onClick={() => { this.handleLogin() }}
                                >Login</button>
                            </div>
                            <div className="col-12" style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className="col-12">
                                <span className='forgot-pass'>Forgot you password?</span>
                            </div>
                            <div className="col-12">
                                <span className='text-center'>Or login with:</span>
                            </div>
                            <div className="col-12 text-center ">
                                <span className='text-other-login'>Or login with:</span>
                            </div>
                            <div className="col-12 social-login">
                                <i class="fab fa-google-plus-g google"></i>
                                <i class="fab fa-facebook-square facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
