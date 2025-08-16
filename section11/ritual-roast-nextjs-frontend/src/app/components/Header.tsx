"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-lg font-semibold"
        style={{ color: "var(--brown-dark)" }}
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/recipes"
        className="text-lg font-semibold hover:text-[#4d3a33]"
        style={{ color: "var(--gold-dark)" }}
        onClick={() => setIsMenuOpen(false)}
      >
        Recipes
      </Link>
      <Link
        href="/contact"
        className="text-lg font-semibold hover:text-[#4d3a33]"
        style={{ color: "#d47a45" }}
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <>
      <header
        className="w-full bg-white relative z-50"
        style={{ fontFamily: "var(--font-montserrat-alternates)" }}
      >
        <div className="flex items-center">
          <div className="flex-1 h-3 bg-[color:var(--brown-dark)]"></div>
          <div className="flex-1 h-3 bg-[color:var(--gold)]"></div>
          <div className="flex-1 h-3 bg-[color:var(--brown-dark)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/rr-logo.png"
                  alt="Ritual Roast Logo"
                  width={180}
                  height={60}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-6">{navLinks}</nav>
              <button
                className="px-6 py-2 border rounded-lg text-lg font-semibold"
                style={{
                  borderColor: "var(--gold)",
                  color: "var(--gold-dark)",
                }}
              >
                Login
              </button>
              <div className="flex items-center space-x-2">
                <Link href="#">
                  <Image
                    src="/images/social-fb.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/social-twitter.png"
                    alt="Twitter"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/social-insta.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
              >
                <svg
                  className="h-8 w-8 text-[color:var(--brown-dark)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <nav className="flex flex-col items-center space-y-6">{navLinks}</nav>
          <button
            className="px-8 py-3 border rounded-lg text-lg font-semibold"
            style={{ borderColor: "var(--gold)", color: "var(--gold-dark)" }}
          >
            Login
          </button>
          <div className="flex items-center space-x-4">
            <Link href="#">
              <Image
                src="/images/social-fb.png"
                alt="Facebook"
                width={36}
                height={36}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/social-twitter.png"
                alt="Twitter"
                width={36}
                height={36}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/social-insta.png"
                alt="Instagram"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
