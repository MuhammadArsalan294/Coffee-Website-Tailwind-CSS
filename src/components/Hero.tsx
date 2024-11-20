import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-rose-950 h-screen">
      <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl font-serif text-yellow-700 mb-4">
            Best Coffee
          </h1>
          <h2 className="title-font sm:text-3xl text-xl font-medium text-white mb-4">
            Making your day great with our special coffee
          </h2>
          <p className="mb-8 leading-relaxed text-white text-base sm:text-lg">
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks joy.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="inline-flex text-white bg-yellow-700 border-2 py-2 px-6 focus:outline-none hover:bg-rose-950 rounded text-lg transition duration-300">
              Order Now
            </button>
            <button className="ml-4 inline-flex text-white bg-rose-950 border-2 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            src="/images/coffee.jpeg"
            alt="Hero Coffee"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
