import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUserAPI, createUserAPI, deleteUserAPI, updateUserAPI } from '../../services/userService'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter'

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        };
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async () => {
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
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    };
    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    };

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserAPI(user.id)
            if (res && res.errCode !== 0) {
                alert(res.message)
            } else {
                await this.getAllUsers()
            }
        } catch (error) {
            console.log(error)
        }
    };

    createNewUser = async (data) => {
        try {
            let response = await createUserAPI(data)
            if (response && response.errCode !== 0) {
                alert(response.message)
            } else {
                await this.getAllUsers()
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': data.id })
            }
        } catch (error) {
            console.log(error)
        }
    }

    updateUser = async (data) => {
        try {
            let response = await updateUserAPI(data)
            if (response && response.errCode !== 0) {
                alert(response.message)
            } else {
                await this.getAllUsers()
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <>
                <div className="user-container">
                    <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        toggleFromParent={this.toggleUserModal}
                        createNewUser={this.createNewUser}
                    />
                    {
                        this.state.isOpenModalEditUser &&
                        <ModalEditUser
                            isOpen={this.state.isOpenModalEditUser}
                            toggleFromParent={this.toggleUserEditModal}
                            currentUser={this.state.userEdit}
                            updateUser={this.updateUser}
                        />
                    }
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
