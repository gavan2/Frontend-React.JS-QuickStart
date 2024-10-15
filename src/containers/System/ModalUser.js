import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleUserModal()
    }
    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className='abcClasname'
                size='lg'
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h2 className="my-4 text-center">Create a New User</h2>
                                <form action="/post-crud" method="post">
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" name="firstName" required />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" name="lastName" required />
                                        </div>
                                    </div>
                                    <div className="form-row mt-3">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name="email" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="password" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" required />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPhone">Phone</label>
                                                <input type="text" className="form-control" id="inputPhone" name="phoneNumber" required />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="inputGender">Gender</label>
                                                <select id="inputGender" className="form-control" name="gender" required>
                                                    <option selected disabled>Choose...</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="inputRole">Role</label>
                                                <select id="inputRole" className="form-control" name="role" required>
                                                    <option selected disabled>Choose...</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Doctor</option>
                                                    <option value="3">Patient</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color="primary" onClick={() => { this.toggle() }}>
                        Do Something
                    </Button>{' '}
                    <Button className='px-3' color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }


}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


