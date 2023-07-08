import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
  >form {
    padding: 2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    >input {
      all: unset;
    }
    >textarea {
      resize: none;
      width: 20rem;
      height: 20rem;
      :focus {
        outline: none;
      }
    }
    >button {
      all: unset;
      cursor: pointer;
      margin-left: 17.5rem;
    }
  }
`

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceId:string = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
    const templateId:string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
    const userId:string = process.env.REACT_APP_EMAILJS_USER_ID as string;

    console.log(userId);
    // Send the email
    emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      message: message,
    }, userId)
      .then(() => {
        console.log('Email successfully sent!');
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

  };

  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default Contact;
