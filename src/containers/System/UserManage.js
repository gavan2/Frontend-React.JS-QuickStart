import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUserAPI } from '../../services/userService'
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,

        };
    }

    async componentDidMount() {
        let res = await getAllUserAPI('ALL');
        console.log(res)
        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.user
            });

        }
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    handleAddNewUser = (user) => {
        this.setState({
            isOpenModalUser: true
        })
    };
    handleEditUser = (user) => {
        // Logic to handle edit action
    };

    handleDeleteUser = (user) => {
        // Logic to handle delete action
    };

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <>
                <div className="user-container">
                    <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        toggleFromParent={this.toggleUserModal}
                    />
                    <div className="title text-center">Manage user with Eric</div>
                    <div className="mx-1">
                        <button className='btn btn-primary px-3' onClick={() => this.handleAddNewUser()}>
                            <i className='fas fa-plus'></i>
                            Add new User
                        </button>
                    </div>
                    <div className="users-table mt-3 mx-1">
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => this.handleEditUser(item)}>
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => this.handleDeleteUser(item)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>

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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
