import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtName: '',
            txtPhone: '',
            txtEmail: ''
        };
    }
    render() {
        return (
            <div className="LoginSignup-container">
                <h2 className="LoginSignup-title">SIGN-UP</h2>
                <form>
                    <table className="LoginSignup-table">
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td><input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td><input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Link to='/login' className="LoginSignup-submit-link">Login</Link>
                                    <input type="submit" value="Register" onClick={(e) => this.btnSignupClick(e)} className="LoginSignup-submit" />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
    // event-handlers
    btnSignupClick(e) {
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        const name = this.state.txtName;
        const phone = this.state.txtPhone;
        const email = this.state.txtEmail;
        if (username && password && name && phone && email) {
            const account = { username: username, password: password, name: name, phone: phone, email: email };
            this.apiSignup(account);
        } else {
            alert('Please input username and password and name and phone and email');
        }
    }
    // apis
    apiSignup(account) {
        axios.post('/api/customer/signup', account).then((res) => {
            const result = res.data;
            alert(result.message);
        });
    }
}
export default Signup;