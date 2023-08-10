import React, { Component } from 'react';

// export class Form extends Component {
//   state = {
//     name: '',
//   };
//   // the method that adds the value from the form to the state. The method is looking at the name='xxx' from input
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleCreate = e => {
//     e.preventDefault();

//     console.log(this.state);

//     // since we passed on this function as a prop, we can call it here. And here we can decide what information (data!!!!!!!! from the original function) will go to the original function as data!!!
//     this.props.onSubmit(this.state);

//     // now we need to call reset (after we added data to APP)

//     this.reset();
//   };

//   // we will reset the form
//   reset = () => {
//     this.setState({ name: '' });
//   };

//   render() {
//     const { name } = this.state;
//     return (
//       <form onSubmit={this.handleCreate}>
//         <h2>Phonebook</h2>
//         <label htmlFor="name">
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

import { StyledError } from './ContactForm.styled';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().required(
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ),
  number: Yup.number().required(
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  ),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <Formik
        // it is initial value of our input
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          // all values from initialValues when we click 'submit'
          // if it is class and not just const we need to use this.props.FUNCTION() if we want to use a functioon from the main page (APP)
          this.props.onAdd({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field name="name" placeholder="Max Poirier" />
            <StyledError name="name" component="div" />
          </label>
          <label>
            Number
            <Field type="tel" name="number" placeholder="+380931074242" />
            <StyledError name="number" component="div" />
          </label>
          <button type="submit" onSubmit={this.onSubmit}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}
