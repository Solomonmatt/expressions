"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { getTotalQuantity } from "@/utils/cart";

const NavBar = () => {
  return (
    <header id="header" className="header-default header-style-2">
      <div className="main-header line">
        <div className="container-full px_15 lg-px_40">
          <div className="row wrapper-header align-items-center">
            {/* Left navigation */}
            <div className="col-xl-5 tf-md-hidden">
              <ul className="header-list-categories">
                <li className="categories-item active">
                  <Link href="/shop" className="text-uppercase">
                    QUALITY HAIR
                  </Link>
                </li>
                <li className="categories-item">
                  <Link href="/treatment" className="text-uppercase">
                    HAIR TREATMENT
                  </Link>
                </li>
                <li className="categories-item">
                  <Link href="/about" className="text-uppercase">
                    ABOUT US
                  </Link>
                </li>
                <li className="categories-item">
                  <a
                    href="https://maps.app.goo.gl/9MKemVSYtqSQM5DL8"
                    className="text-uppercase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find a Store
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile menu toggle */}
            <div className="col-md-4 col-3 tf-lg-hidden">
              <a
                href="#mobileMenu"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
              >
                {/* Hamburger icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={16}
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M2 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2 2.28571Z"
                    fill="currentColor"
                  />
                  {/* other paths omitted for brevity */}
                </svg>
              </a>
            </div>

            {/* Logo */}
            <div className="col-xl-2 col-md-4 col-6 text-center">
              <Link href="/" className="logo-header">
                <Image
                  src="/images/products/newlog2.png"
                  alt="logo"
                  width={120}
                  height={40}
                  className="logo"
                  priority
                />
              </Link>
            </div>

            {/* Right icons */}
            <div className="col-xl-5 col-md-4 col-3">
              <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
                <li className="nav-search">
                  <a
                    href="#canvasSearch"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-search" />
                  </a>
                </li>
                <li className="nav-cart">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-bag" />
                    <span className="count-box">{getTotalQuantity() || 0}</span>
                  </a>
                </li>
                <li className="nav-account">
                  <SignedOut>
                    <SignInButton>
                      <span className="bg-black text-white p-2 px-4 rounded-md cursor-pointer">
                        Login
                      </span>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/account" className="text-uppercase">
                      <i className="icon icon-account" />
                    </Link>
                  </SignedIn>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav for mobile */}
      <ul className="header-list-categories tf-lg-hidden">
        <li className="categories-item active">
          <Link href="/shop" className="text-uppercase">
            QUALITY HAIR
          </Link>
        </li>
        <li className="categories-item">
          <Link href="/treatment" className="text-uppercase">
            HAIR TREATMENT
          </Link>
        </li>
        <li className="categories-item">
          <Link href="/about" className="text-uppercase">
            ABOUT US
          </Link>
        </li>
        <li className="categories-item">
          <a
            href="https://maps.app.goo.gl/qqg9HWr3jSppScEG6"
            className="text-uppercase"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find a Store
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
