import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
<<<<<<< HEAD
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
=======
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the datepicker
>>>>>>> 372d23404b3ac9ee4b3606ee5166aa255e80883a

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
<<<<<<< HEAD
    bookingDateTime: new Date(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

=======
    bookingDateTime: new Date(), // Holds both date and time
  });

>>>>>>> 372d23404b3ac9ee4b3606ee5166aa255e80883a
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
<<<<<<< HEAD
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
=======
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight tracking-wide text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <div className="flex space-x-4">
              {/* Date Picker */}
              <DatePicker
                selected={formData.bookingDateTime}
                onChange={(date) => setFormData({ ...formData, bookingDateTime: date })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-lg transition-all duration-300 ease-in-out hover:bg-blue-500/20 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholderText="Select a date"
                dateFormat="MMMM d, yyyy"
                minDate={new Date()} // Prevent past dates
              />

              {/* Time Picker */}
              <DatePicker
                selected={formData.bookingDateTime}
                onChange={(date) => setFormData({ ...formData, bookingDateTime: date })}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30} // Time intervals in minutes
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-lg transition-all duration-300 ease-in-out hover:bg-blue-500/20 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholderText="Select a time"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded font-medium transition-all duration-300 ease-in-out relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-110 group hover:bg-pink-500"
            >
              <span className="transition-transform duration-300 ease-in-out">Book a Call</span>
              <span className="inline-block ml-3 group-hover:animate-ring">
                <i className="fas fa-phone-alt"></i>
              </span>
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
>>>>>>> 372d23404b3ac9ee4b3606ee5166aa255e80883a
  );
};
