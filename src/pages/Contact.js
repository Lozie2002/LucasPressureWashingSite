import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'LushExteriorCleaning',       // Service ID
      'template_lem29v4',          // Template ID
      form.current,
      'KwssoqJjAbQ4m6GrF'          // User ID
    )
    .then((result) => {
        console.log(result.text);
        setStatusMessage('Message sent successfully!');
        form.current.reset(); // Clear the form fields
      }, (error) => {
        console.log(error.text);
        setStatusMessage('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-customColor to-blue-200"
   
    >
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
        {statusMessage && (
          <p className="text-center text-sm text-green-500 mb-4">{statusMessage}</p>
        )}
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="user_name" className="block text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-lg transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
