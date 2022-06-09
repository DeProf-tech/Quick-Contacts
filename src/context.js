import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'John Snow',
        email: 'jsdt@gmail.com',
        phone: '555-555-5555',
      },
      {
        id: '2',
        name: 'Dre Peters',
        email: 'drep@gmail.com',
        phone: '542-786-0965',
      },
      {
        id: '3',
        name: 'Ella Waters',
        email: 'wella@gmail.com',
        phone: '934-584-0422',
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
