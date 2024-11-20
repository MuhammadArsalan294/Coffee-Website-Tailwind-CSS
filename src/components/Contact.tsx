import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <section className="text-gray-600 bg-rose-950 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          {/* Title */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
          </div>

          {/* Form */}
          <form>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                {/* Name Field */}
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-700 focus:bg-white focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* Email Field */}
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-700 focus:bg-white focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* Message Field */}
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-700 focus:bg-white focus:ring-2 focus:ring-yellow-300 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-yellow-700 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-800 rounded text-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

