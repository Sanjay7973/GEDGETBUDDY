import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="p-2">
        <h2 className="text-center text-3xl p-4 font-extrabold font-serif">
          Feel Free To Contact Us
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27505.967311663833!2d76.77939143419479!3d30.48579026408813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc7379ef69837%3A0xa8767aa7ef3f7933!2sLalru%2C%20Punjab!5e0!3m2!1sen!2sin!4v1705624476309!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <form action="https://formspree.io/f/moqqlgpj">
        <div className="p-2 flex flex-col items-center mt-8 mb-8">
          <input
            className="p-2 w-[100%] sm:w-[95%] md:w-[75%] lg:w-[28%] rounded mb-5"
            type="text"
            placeholder="Enter name"
          />
          <input
            type="email"
            className="p-2 w-[100%] sm:w-[95%] md:w-[75%]  lg:w-[28%] rounded mb-5"
            placeholder="Email"
          />
          <textarea
            className="p-2 w-[100%] sm:w-[95%] md:w-[75%] lg:w-[28%] rounded mb-5"
            rows="3"
            type="text"
            placeholder="massage..."
          />
          <button type="submit" className="cursor-pointer mt-2 rounded w-26 p-2 text-center text-white bg-slate-500 hover:bg-blue-900">
            Send Your Quary
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
