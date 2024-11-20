import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white bg-rose-950 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col md:flex-row items-center">
        {/* Logo and Copyright */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center mb-4 md:mb-0">
          <Image
            src="/images/logo.jpeg"
            alt="Logo Image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="ml-3 text-xl">© 2024 Coffee Shop</span>
        </div>

        {/* Social Media Links */}
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center md:justify-end">
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100077733514114"
            className="ml-3 text-white"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-3xl hover:text-blue-900 transition duration-300" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/muhammadarslan012/"
            className="ml-3 text-white"
            aria-label="Instagram"
          >
            <FaInstagramSquare className="text-3xl hover:text-pink-500 transition duration-300" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-arsalan-623179243/"
            className="ml-3 text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl hover:text-blue-500 transition duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
