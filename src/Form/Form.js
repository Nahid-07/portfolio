import React from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_htz18n8",
        "template_q8lg3oa",
        form.current,
        "QgfKRvDyGdxr1iWcp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className=" bg-slate-500 p-20">
      <h1 className="text-5xl text-center font-bold mb-10 text-orange-400">
        Contact me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="container mx-auto flex flex-col md:w-3/5 gap-5"
      >
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full my-5"
            required
          />

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Message"
          ></textarea>
          <button className="btn mt-5">Send your message</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
