import React, { Component } from 'react';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  showClick = () => {
    // const showContactInfo = false;
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteContact = (id, dispatch) => {
    // this.props.deleteClickHandler();
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props;
    const { showContactInfo } = this.state;
    // const { deleteClickHandler } = this.props;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h1>
                {name}{' '}
                <i
                  onClick={this.showClick}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                ></i>
                <i
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                ></i>
              </h1>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
