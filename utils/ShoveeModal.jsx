"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ShoveeModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div
      className='w-screen h-screen bg-[#74737357] flex justify-center items-center fixed top-0 left-0 z-30'
      style={showModal ? {} : { display: "none" }}
    >
      <div className='p-5 bg-black rounded'>
        <p>Create your personal portfolio website in 30 seconds with </p>
        <div className='mt-2 flex justify-center'>
          <Link
            className='lg:w-[20%] flex items-center gap-2'
            href='https://shovee.com'
            target='_blank'
          >
            <Image
              alt='logo'
              height={40}
              src='https://res.cloudinary.com/dhcc4rnbc/image/upload/v1696225956/logo_etsxfz.png'
              width={40}
            />
            <p>
              <span className='text-[#17c1ff] font-semibold'>SHOVEE</span>
            </p>
          </Link>
        </div>
        <div className='mt-5 flex justify-between'>
          <button
            className='px-3 py-2 bg-gray-800 rounded'
            onClick={() => setShowModal(false)}
          >
            Ask Me Later
          </button>
          <Link
            className='px-3 py-2 bg-blue-600 rounded'
            href='https://shovee.com'
            target='_blank'
          >
            Go To Shovee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoveeModal;
