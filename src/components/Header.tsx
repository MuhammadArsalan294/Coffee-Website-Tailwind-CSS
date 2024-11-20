import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white body-font bg-rose-950 sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <div className="flex title-font font-medium items-center text-rose-900 mb-4 md:mb-0">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="ml-3 text-xl text-white font-semibold">Coffee</span>
        </div>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 hover:text-yellow-600 transition duration-300">
            Home
          </Link>
          <Link href="#about" className="mr-5 hover:text-yellow-600 transition duration-300">
            About
          </Link>
          <Link href="#menu" className="mr-5 hover:text-yellow-600 transition duration-300">
            Menu
          </Link>
          <Link href="#contact" className="mr-5 hover:text-yellow-600 transition duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
