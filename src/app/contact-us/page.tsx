"use client";

import React from "react";
import { useState } from "react";
import { Meteors } from "@/components/ui/meteors";

type FormData = {
  email: string;
  message: string;
};

function Page() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({ email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-3xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>
      <p className="text-md md:text-lg text-center mx-32 sm:mx-16 md:mx-24  font-sans mb-8 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi
        labore perferendis aspernatur soluta consequatur minus, vel praesentium
        exercitationem repudiandae explicabo sed quibusdam ab officia eum?
        Tempora nisi placeat esse.
      </p>
      <div className="flex justify-center w-full px-4 sm:px-8 md:px-12">
        <form className="w-full max-w-md">
          <label htmlFor="email" className="text-white block mb-2">
            Your Email:
          </label>
          <input
            type="text"
            id="email"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
            value={formData.email}
            placeholder="Enter your email ..."
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {/* message here */}
          <label htmlFor="message" className="text-white block mb-2">
            Your Message:
          </label>
          <textarea
            // rows={5}
            id="message"
            className="w-full min-h-[100px] sm:min-h-[120px] md:min-h-[200px] p-3 mb-4  rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-white focus:outline-none"
            value={formData.message}
            placeholder="Enter your message here ..."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-500 cursor-pointer p-4 rounded-lg font-bold w-full"
          onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      {/* <Footer /> */}
      <Meteors number={20} />
    </div>
  );
}

export default Page;
