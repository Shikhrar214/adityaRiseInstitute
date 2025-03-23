import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage("");

    try {
      const serviceId = "YOUR_EMAILJS_SERVICE_ID";
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
      const userId = "YOUR_EMAILJS_USER_ID"; // Optional if already using public key

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        userId
      );

      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-4">
  {/* Contact Information Section */}
  <div className="bg-orange-50 rounded-xl p-8 py-12 m-4 w-full md:w-3/4 lg:w-2/5">
    <div className="bg-orange-100 rounded-xl mb-6">
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-orange-700 text-center">
        Get in touch:
      </h1>
    </div>
    <div className="text-lg sm:text-xl">
      <div className="py-4">
        <span className="font-medium">Local Address: </span>
        <span>Babhnan, Basti, UP</span>
      </div>
      <div className="py-4">
        <span className="font-medium">PIN CODE: </span>
        <span>272163</span>
      </div>
      <div className="py-4">
        <span className="font-medium">Phone: </span>
        <span>
          <a href="tel:8467957047" className="text-orange-600 underline">
            8467957047
          </a>
        </span>
      </div>
      <div className="py-4">
        <span className="font-medium">Email: </span>
        <span>
          <a
            href="mailto:1432arci@gmail.com"
            className="text-orange-600 underline"
          >
            Mail your Query
          </a>
        </span>
      </div>
    </div>
  </div>

  {/* Contact Form Section */}
  <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-2/5 m-4">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
      Contact Us
    </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:ring-2 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className={`w-full bg-orange-900 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 transition ${
          isSending ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
      {responseMessage && (
        <p
          className={`text-center mt-4 ${
            responseMessage.includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {responseMessage}
        </p>
      )}
    </form>
  </div>
</div>

  );
};

export default Contect;
