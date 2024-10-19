import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter'

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            phoneNumber: '',
            gender: '',
            role: ''
        };
        this.listenToEmitter()
    }
    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
                phoneNumber: '',
                gender: '',
                role: ''
            })
        })
    }
    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            phoneNumber: '',
            gender: '',
            role: ''
        });
    }

    handleInputChange = (event) => {
        let copyState = { ...this.state }
        const { name, value } = event.target;
        copyState[name] = value;

        this.setState({
            ...copyState
        });
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('missing parameter' + arrInput[i])
                break;
            }

        }
        return isValid;

    }
    handleAddNewUser = (event) => {
        event.preventDefault();
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
            this.toggle();
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.toggle} className='abcClasname' size='lg'>
                <ModalHeader toggle={this.toggle}>Create a New User</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h2 className="my-4 text-center">Create a New User</h2>
                                <form onSubmit={this.handleAddNewUser}>
                                    <div className="form-row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                                name="firstName"
                                                value={this.state.firstName}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last name"
                                                name="lastName"
                                                value={this.state.lastName}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row mt-3">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="inputEmail4"
                                                placeholder="Email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="inputPassword4"
                                                placeholder="Password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="1234 Main St"
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPhone">Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputPhone"
                                                    name="phoneNumber"
                                                    value={this.state.phoneNumber}
                                                    onChange={this.handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="inputGender">Gender</label>
                                                <select
                                                    id="inputGender"
                                                    className="form-control"
                                                    name="gender"
                                                    value={this.state.gender}
                                                    onChange={this.handleInputChange}
                                                    required
                                                >
                                                    <option value="" disabled>Choose...</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="inputRole">Role</label>
                                                <select
                                                    id="inputRole"
                                                    className="form-control"
                                                    name="role"
                                                    value={this.state.role}
                                                    onChange={this.handleInputChange}
                                                    required
                                                >
                                                    <option value="" disabled>Choose...</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Doctor</option>
                                                    <option value="3">Patient</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <ModalFooter>
                                        <Button className='px-3' color="primary" type="submit">
                                            Create User
                                        </Button>
                                        <Button className='px-3' color="secondary" onClick={this.toggle}>
                                            Cancel
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
