import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextEffect1 from "./Text-Indie";

export const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm === null) throw new Error("current form is null");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        currentForm,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    currentForm.reset();
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 ">
        <TextEffect1 />
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        For all inquiries please send me a message
      </p>
      <form ref={form} onSubmit={sendEmail} className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block p-3 w-full text-sm text-white bg-gradient-135 from-slate-900 to-gray-800 rounded-lg border border-gray-600  focus:ring-primary-500 focus:border-primary-500"
            placeholder="example@mail.com"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm text-white bg-gradient-135 from-slate-900 to-gray-800 rounded-lg border border-gray-600  focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let me know how I can help you"
            required
          ></input>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block p-3 w-full text-sm text-whites bg-gradient-135 from-slate-900 to-gray-800 rounded-lg border border-gray-600  focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a message or a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </div>
  );
};
