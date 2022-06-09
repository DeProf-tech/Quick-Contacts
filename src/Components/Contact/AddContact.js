import React, { Component } from 'react';
import { Consumer } from '../../context';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card mb-3">
                <div className="card-header">Add New Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        placeholder="Please input new name"
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        placeholder="Please input new email"
                        type="text"
                        name="email"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number </label>
                      <input
                        placeholder="Please input new phone number"
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        value={phone}
                        onChange={this.onChange}
                      />
                    </div>
                    <input
                      className="btn btn-light btn-block"
                      value="Add Contact"
                      type="submit"
                      style={{ display: 'flex', margin: 'auto' }}
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
