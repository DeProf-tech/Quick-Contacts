import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  // constructor() {
  //   super();
  // this.state = {
  //   contacts: [
  //     {
  //       id: '1',
  //       name: 'John Snow',
  //       email: 'jsdt@gmail.com',
  //       phone: '555-555-5555',
  //     },
  //     {
  //       id: '2',
  //       name: 'Dre Peters',
  //       email: 'drep@gmail.com',
  //       phone: '542-786-0965',
  //     },
  //     {
  //       id: '3',
  //       name: 'Ella Waters',
  //       email: 'wella@gmail.com',
  //       phone: '934-584-0422',
  //     },
  //   ],
  // };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
