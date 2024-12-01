import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section
      className="contact-section shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
      id="contact"
    >
      <h2 className="contact-title text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3">
        <FaEnvelope /> Contact Information
      </h2>
      <div className="contact-container pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]">
        {/* Email */}
        <div className="contact-info w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
          <div className="flex gap-3 items-center">
            <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">Email</p>
            <p><FaEnvelope /></p>
          </div>
          <p className="text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]">your.email@example.com</p>
        </div>
        
        {/* Phone */}
        <div className="contact-info w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
          <div className="flex gap-3 items-center">
            <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">Phone</p>
            <p><FaPhoneAlt /></p>
          </div>
          <p className="text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]">+123 456 7890</p>
        </div>

        {/* Address */}
        <div className="contact-info w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2">
          <div className="flex gap-3 items-center">
            <p className="text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]">Address</p>
            <p><FaMapMarkerAlt /></p>
          </div>
          <p className="text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]">123 Main Street, City, Country</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
