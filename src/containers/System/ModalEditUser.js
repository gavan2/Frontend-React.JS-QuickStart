import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            address: '',
        };
    }

    componentDidMount() {
        let user = this.props.currentUser
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent();
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            address: '',
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
        let arrInput = ['id', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('missing parameter' + arrInput[i])
                break;
            }

        }
        return isValid;

    }
    handleUpdateUser = (event) => {
        event.preventDefault();
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.updateUser(this.state);
            this.toggle();
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.toggle} className='abcClasname' size='lg'>
                <ModalHeader toggle={this.toggle}>Edit User</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h2 className="my-4 text-center">Edit User</h2>
                                <form onSubmit={this.handleUpdateUser}>
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
                                    </div>
                                    <ModalFooter>
                                        <Button className='px-3' color="primary" type="submit">
                                            Update User
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
