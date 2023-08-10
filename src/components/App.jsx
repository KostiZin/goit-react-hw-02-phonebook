import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

// export class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   // data is something that we get from the children when the button has been clicked (submit): we need to pass it on to the chiild as a prop
//   handleSubmitSata = data => {
//     console.log(data);

//     // overwrite the excisting data
//     this.setState(data);
//   };

//   render() {
//     const { name } = this.state;

//     return (
//       <div>
//         {/* in this case onSubmit it is just a name of the prop, we can use any name we want */}
//         <Form onSubmit={this.handleSubmitSata} />
//         <div>
//           <h2>Contacts</h2>
//           <ul>
//             <li>{name}</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContact = newContact => {
    // overwrite the excisting data
    // newContact is an object (initialValues) with name, id and number
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });

    console.log('new contact:', newContact);
    console.log(this.state.contacts);
  };

  //   handleSubmitSata = data => {

  //     console.log(data);

  //     // overwrite the excisting data
  //     this.setState(data);
  //   };

  render() {
    // const { contacts } = this.state;

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.handleAddContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList />
        </div>
        {/* <Filter />
         */}
      </div>
    );
  }
}
