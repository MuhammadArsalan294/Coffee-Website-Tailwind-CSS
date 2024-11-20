import React from "react";
import Image from "next/image";

export default function Menu() {
  return (
    <div id="menu">
      <section className="text-gray-600 body-font bg-rose-950">
        <div className="container mx-auto px-5 py-12 sm:py-16 lg:py-24 max-w-screen-xl">
          {/* Title Section */}
          <div className="text-center w-full mb-8">
            <h1 className="title-font text-3xl sm:text-4xl font-medium text-white">
              Menu
            </h1>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-gray-200 hover:bg-gray-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-4"
                src="/images/hot-coffee.jpg"
                alt="Hot Coffee"
                width={500}
                height={500}
              />
              <h2 className="text-lg text-gray-900 font-medium mb-2">
                Hot Coffee
              </h2>
              <p className="leading-relaxed text-base">
                Wide range of streaming hot coffee to make you fresh.
              </p>
              <p className="font-bold text-yellow-700 mt-2">$5</p>
            </div>

            {/* Item 2 */}
            <div className="bg-gray-200 hover:bg-gray-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-4"
                src="/images/black-coffee.jpeg"
                alt="Black Coffee"
                width={500}
                height={500}
              />
              <h2 className="text-lg text-gray-900 font-medium mb-2">
                Black Coffee
              </h2>
              <p className="leading-relaxed text-base">
                Wide range of streaming black coffee to make you fresh.
              </p>
              <p className="font-bold text-yellow-700 mt-2">$10</p>
            </div>

            {/* Item 3 */}
            <div className="bg-gray-200 hover:bg-gray-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-4"
                src="/images/cold-coffee.jpeg"
                alt="Cold Coffee"
                width={500}
                height={500}
              />
              <h2 className="text-lg text-gray-900 font-medium mb-2">
                Cold Coffee
              </h2>
              <p className="leading-relaxed text-base">
                Creamy and frothy cold coffee to make you cool.
              </p>
              <p className="font-bold text-yellow-700 mt-2">$15</p>
            </div>

            {/* Item 4 */}
            <div className="bg-gray-200 hover:bg-gray-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-4"
                src="/images/ice-cup.jpg"
                alt="Ice Cup"
                width={500}
                height={500}
              />
              <h2 className="text-lg text-gray-900 font-medium mb-2">
                Ice Cup
              </h2>
              <p className="leading-relaxed text-base">
                Creamy ice cup to make you cool and fresh.
              </p>
              <p className="font-bold text-yellow-700 mt-2">$20</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

