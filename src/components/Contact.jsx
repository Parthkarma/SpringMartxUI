import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg z-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          We would love to hear from you! Please fill out the form below or
          contact us directly.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your message here..."
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Contact Information
          </h2>
          <div className="flex flex-col items-center space-y-3 mt-4">
            <div className="flex items-center text-gray-700">
              <FaPhone className="text-blue-500 mr-2" />
              <span>+4889898989</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="text-blue-500 mr-2" />
              <span>SpringMartX@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaMapMarkedAlt className="text-blue-500 mr-2" />
              <span>123, Main Street, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
