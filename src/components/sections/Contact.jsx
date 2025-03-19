import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    bookingDateTime: new Date(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "", bookingDateTime: new Date() });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <>
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
          <div className="px-4 w-full max-w-md p-6">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-center bg-gradient-to-r from-red-800 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="Name..."
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
              <div className="flex space-x-4">
                <DatePicker
                  selected={formData.bookingDateTime}
                  onChange={(date) => setFormData({ ...formData, bookingDateTime: date })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
                  placeholderText="Select a date"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                />
                <DatePicker
                  selected={formData.bookingDateTime}
                  onChange={(date) => setFormData({ ...formData, bookingDateTime: date })}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
                  placeholderText="Select a time"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-3 px-6 rounded font-medium transition-all hover:scale-110 hover:bg-orange-500"
              >
                Book a Call
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>

      {/* GitHub Icon at the End of the Website */}
      <footer className="flex justify-center py-6">
        <a href="https://github.com/rahulsingh1397" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-white hover:text-gray-400 transition" />
        </a>
      </footer>
    </>
  );
};
