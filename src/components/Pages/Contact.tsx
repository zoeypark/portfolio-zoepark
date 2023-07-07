import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const current:string = form.current as unknown as string

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <ul>
      </ul>
    </>
  )
}

export default Contact;