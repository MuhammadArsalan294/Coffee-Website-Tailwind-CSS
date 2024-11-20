import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id="about">
      <section className="text-white body-font bg-rose-950">
        <div className="container mx-auto flex px-5 py-24 items-center flex-col lg:flex-row">
          {/* Text Content */}
          <div className="lg:flex-grow lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About Us
            </h1>
            <p className="leading-relaxed text-xl text-gray-300">
              At Coffee House in Berndorf, Germany, we pride ourselves on being
              a go-to destination for coffee lovers and conversation seekers
              alike. We are dedicated to providing an exceptional coffee
              experience in a cozy and inviting atmosphere, where guests can
              relax, unwind, and enjoy their time in comfort.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image
              className="object-cover object-center rounded-lg shadow-lg"
              alt="Coffee Experience"
              src="/images/coffee1.jpeg"
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
