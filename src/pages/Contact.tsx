import emailjs from '@emailjs/browser';
import { FormEvent, useState } from 'react';

function Contact() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        (e.target as HTMLFormElement),
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
    ).then(() => {
        setMessage('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
    }).catch((error) => {
        console.error(error)
        setMessage('Failed to send message. Please try again.');
    }).finally(() => {
        setIsSubmitting(false);
    });
  }
    
  return (
    <div className="w-1/2 mx-auto">
        <form onSubmit={handleSubmit} className="w-3/4 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Name
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="name" 
                    type="text" 
                    placeholder="Name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="email" 
                    type="email" 
                    placeholder="Email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    name="message" 
                    rows={4}
                    placeholder="Message" />
            </div>
            {message && (
                <p>{message}</p>
            )}
            <div className="flex items-center justify-between">
                <button 
                    className="font-bold py-2 px-4 rounded border border-black focus:outline-none focus:shadow-outline" 
                    type="submit"
                    disabled={isSubmitting}>
                    Send message
                </button>
            </div>
        </form>
    </div>
  )
}

export default Contact