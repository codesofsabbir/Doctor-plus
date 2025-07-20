'use client'
import Button from "@/components/Button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="grid md:grid-cols-2 container mx-auto gap-10 my-10">
      {/* Left Side - Form */}
      <div className="md:p-10 p-5 border border-gray-400 rounded-4xl">
        <h2 className="md:text-4xl text-2xl font-bold text-blue-900 md:mb-4">Get In Touch</h2>
        <p className="text-sm tracking-wider text-blue-950 md:mb-6 mb-3">
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-blue-950 font-semibold">Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 rounded-full focus:ring focus:ring-yellow-400 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-blue-950 font-semibold">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 rounded-full focus:ring focus:ring-yellow-400 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-blue-950 font-semibold">Comment *</label>
            <textarea
              name="comment"
              placeholder="Write your comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full resize-none p-3 bg-gray-100 rounded-2xl focus:ring focus:ring-yellow-400 outline-none h-40"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700 text-base">
              I accept all <span className="text-blue-950 font-semibold">terms & conditions.</span>
            </label>
          </div>
          <Button buttonTitle={"Submit Now"} className="text-white mt-10 mb-5" bgcolor="#20265B" type="submit"
          />
        </form>
      </div>

      {/* Right Side - Google Map */}
      <div className="rounded-4xl overflow-hidden">
        <iframe
          className="w-full md:h-full h-80 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d387190.2799194731!2d-74.25986693451626!3d40.69767006774054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1636028353746!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}