"use client";

import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import NavBar from '@/components/NavBar';
import AccountSideBar from '@/components/AccountSideBar';

const AccountEditPage = () => {
  return (
    <>
      <div id="wrapper">
        {/* header */}
        <NavBar />
        {/* /header */}
        {/* page-title */}
        <div className="tf-page-title">
          <div className="container-full">
            <div className="heading text-center">Account Details</div>
          </div>
        </div>
        {/* /page-title */}
        {/* page-cart */}
        <section className="flat-spacing-11">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <AccountSideBar />
              </div>
              <div className="col-lg-9">
                <div className="my-account-content account-edit">
                  <div className="">
                    <form className="" id="form-password-change" action="#">
                      <div className="tf-field style-1 mb_15">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=" "
                          type="text"
                          id="property1"
                          name="first name"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property1"
                        >
                          First name
                        </label>
                      </div>
                      <div className="tf-field style-1 mb_15">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=" "
                          type="text"
                          id="property2"
                          name="last name"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property2"
                        >
                          Last name
                        </label>
                      </div>
                      <div className="tf-field style-1 mb_15">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=" "
                          type="email"
                          id="property3"
                          name="email"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property3"
                        >
                          Email
                        </label>
                      </div>
                      <h6 className="mb_20">Password Change</h6>
                      <div className="tf-field style-1 mb_30">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=" "
                          type="password"
                          id="property4"
                          name="password"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property4"
                        >
                          Current password
                        </label>
                      </div>
                      <div className="tf-field style-1 mb_30">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=" "
                          type="password"
                          id="property5"
                          name="password"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property5"
                        >
                          New password
                        </label>
                      </div>
                      <div className="tf-field style-1 mb_30">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=" "
                          type="password"
                          id="property6"
                          name="password"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property6"
                        >
                          Confirm password
                        </label>
                      </div>
                      <div className="mb_20">
                        <button
                          type="submit"
                          className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* page-cart */}
        <div className="btn-sidebar-account">
          <button
            data-bs-toggle="offcanvas"
            data-bs-target="#mbAccount"
            aria-controls="offcanvas"
          >
            <i className="icon icon-sidebar-2" />
          </button>
        </div>
        {/* footer */}
        <footer id="footer" className="footer">
          <div className="footer-wrap">
            <div className="footer-body">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="footer-infor">
                      <div className="footer-logo">
                        <a href="index.html">
                          <img src="images/logo/logo.svg" alt="" />
                        </a>
                      </div>
                      <ul>
                        <li>
                          <p>
                            Address: 1234 Fashion Street, Suite 567, <br /> New
                            York, NY 10001
                          </p>
                        </li>
                        <li>
                          <p>
                            Email: <a href="#">info@fashionshop.com</a>
                          </p>
                        </li>
                        <li>
                          <p>
                            Phone: <a href="#">(212) 555-1234</a>
                          </p>
                        </li>
                      </ul>
                      <a href="contact-1.html" className="tf-btn btn-line">
                        Get direction
                        <i className="icon icon-arrow1-top-left" />
                      </a>
                      <ul className="tf-social-icon d-flex gap-10">
                        <li>
                          <a
                            href="#"
                            className="box-icon w_34 round social-facebook border-line-black"
                          >
                            <i className="icon fs-14 icon-fb" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="box-icon w_34 round social-twiter border-line-black"
                          >
                            <i className="icon fs-12 icon-Icon-x" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="box-icon w_34 round social-instagram border-line-black"
                          >
                            <i className="icon fs-14 icon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="box-icon w_34 round social-tiktok border-line-black"
                          >
                            <i className="icon fs-14 icon-tiktok" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="box-icon w_34 round social-pinterest border-line-black"
                          >
                            <i className="icon fs-14 icon-pinterest-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6>Help</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6>Help</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      <li>
                        <a
                          href="privacy-policy.html"
                          className="footer-menu_item"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="delivery-return.html"
                          className="footer-menu_item"
                        >
                          {" "}
                          Returns + Exchanges{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="shipping-delivery.html"
                          className="footer-menu_item"
                        >
                          Shipping
                        </a>
                      </li>
                      <li>
                        <a
                          href="terms-conditions.html"
                          className="footer-menu_item"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a href="faq-1.html" className="footer-menu_item">
                          FAQ’s
                        </a>
                      </li>
                      <li>
                        <a href="compare.html" className="footer-menu_item">
                          Compare
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html" className="footer-menu_item">
                          My Wishlist
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6>About us</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6>About us</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      <li>
                        <a href="about-us.html" className="footer-menu_item">
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a href="our-store.html" className="footer-menu_item">
                          Visit Our Store
                        </a>
                      </li>
                      <li>
                        <a href="contact-1.html" className="footer-menu_item">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="login.html" className="footer-menu_item">
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="footer-newsletter footer-col-block">
                      <div className="footer-heading footer-heading-desktop">
                        <h6>Sign Up for Email</h6>
                      </div>
                      <div className="footer-heading footer-heading-moblie">
                        <h6>Sign Up for Email</h6>
                      </div>
                      <div className="tf-collapse-content">
                        <div className="footer-menu_item">
                          Sign up to get first dibs on new arrivals, sales,
                          exclusive content, events and more!
                        </div>
                        <form
                          className="form-newsletter"
                          id="subscribe-form"
                          action="#"
                          method="post"
                          acceptCharset="utf-8"
                          data-mailchimp="true"
                        >
                          <div id="subscribe-content">
                            <fieldset className="email">
                              <input
                                type="email"
                                name="email-form"
                                id="subscribe-email"
                                placeholder="Enter your email...."
                                tabIndex={0}
                                aria-required="true"
                              />
                            </fieldset>
                            <div className="button-submit">
                              <button
                                id="subscribe-button"
                                className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                                type="button"
                              >
                                Subscribe
                                <i className="icon icon-arrow1-top-left" />
                              </button>
                            </div>
                          </div>
                          <div id="subscribe-msg" />
                        </form>
                        <div className="tf-cur">
                          <div className="tf-currencies">
                            <select className="image-select center style-default type-currencies">
                              <option data-thumbnail="images/country/fr.svg">
                                EUR € | France
                              </option>
                              <option data-thumbnail="images/country/de.svg">
                                EUR € | Germany
                              </option>
                              <option data-thumbnail="images/country/us.svg">
                                USD $ | United States
                              </option>
                              <option data-thumbnail="images/country/vn.svg">
                                VND ₫ | Vietnam
                              </option>
                            </select>
                          </div>
                          <div className="tf-languages">
                            <select className="image-select center style-default type-languages">
                              <option>English</option>
                              <option>العربية</option>
                              <option>简体中文</option>
                              <option>اردو</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                      <div className="footer-menu_item">
                        © 2024 Ecomus Store. All Rights Reserved
                      </div>
                      <div className="tf-payment">
                        <img src="images/payments/visa.png" alt="" />
                        <img src="images/payments/img-1.png" alt="" />
                        <img src="images/payments/img-2.png" alt="" />
                        <img src="images/payments/img-3.png" alt="" />
                        <img src="images/payments/img-4.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* /footer */}
      </div>
      {/* gotop */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "286.138",
            }}
          />
        </svg>
      </div>
      {/* /gotop */}
      {/* sidebar account*/}
      <div
        className="offcanvas offcanvas-start canvas-filter canvas-sidebar canvas-sidebar-account"
        id="mbAccount"
      >
        <div className="canvas-wrapper">
          <header className="p-3">
            <ul className="flex flex-col gap-y-4">
              <li className="border-b-2 border-gray-600">
                <Link
                  href="/account/"
                  className="cursor-pointer w-full text-lg"
                >
                  Dashboard
                </Link>
              </li>
              <li className="border-b-2 border-gray-600">
                <Link
                  href="/account/orders"
                  className="cursor-pointer w-full text-lg"
                >
                  Orders
                </Link>
              </li>
              <li className="border-b-2 border-gray-600">
                <Link
                  href="/account/address"
                  className="cursor-pointer w-full text-lg"
                >
                  Address
                </Link>
              </li>
              <li className="border-b-2 border-gray-600">
                <Link
                  href="/account/edit"
                  className="cursor-pointer w-full text-lg"
                >
                  Account Details
                </Link>
              </li>
              <li className="border-b-2 border-gray-600">
                <SignOutButton>
                  <span className="cursor-pointer w-full text-lg">Logout</span>
                </SignOutButton>
              </li>
            </ul>
          </header>
          <div className="canvas-body sidebar-mobile-append"></div>
        </div>
      </div>
      {/* End sidebar account */}
      {/* toolbar-bottom */}
      <div className="tf-toolbar-bottom type-1150">
        <div className="toolbar-item">
          <a
            href="#toolbarShopmb"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
          >
            <div className="toolbar-icon">
              <i className="icon-shop" />
            </div>
            <div className="toolbar-label">Shop</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a
            href="#canvasSearch"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
          >
            <div className="toolbar-icon">
              <i className="icon-search" />
            </div>
            <div className="toolbar-label">Search</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="#login" data-bs-toggle="modal">
            <div className="toolbar-icon">
              <i className="icon-account" />
            </div>
            <div className="toolbar-label">Account</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="wishlist.html">
            <div className="toolbar-icon">
              <i className="icon-heart" />
              <div className="toolbar-count">0</div>
            </div>
            <div className="toolbar-label">Wishlist</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="#shoppingCart" data-bs-toggle="modal">
            <div className="toolbar-icon">
              <i className="icon-bag" />
              <div className="toolbar-count">1</div>
            </div>
            <div className="toolbar-label">Cart</div>
          </a>
        </div>
      </div>
      {/* /toolbar-bottom */}
      {/* modalDemo */}
      <div className="modal fade modalDemo" id="modalDemo">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <h5 className="demo-title">Ultimate HTML Theme</h5>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="mega-menu">
              <div className="row-demo">
                <div className="demo-item">
                  <a href="index.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-01.jpg"
                        src="images/demo/home-01.jpg"
                        alt="home-01"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                        <span>Trend</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Fashion 01</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-multi-brand.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-multi-brand.jpg"
                        src="images/demo/home-multi-brand.jpg"
                        alt="home-multi-brand"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                        <span className="demo-hot">Hot</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Multi Brand</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-02.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-02.jpg"
                        src="images/demo/home-02.jpg"
                        alt="home-02"
                      />
                      <div className="demo-label">
                        <span className="demo-hot">Hot</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Fashion 02</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-03.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-03.jpg"
                        src="images/demo/home-03.jpg"
                        alt="home-03"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 03</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-04.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-04.jpg"
                        src="images/demo/home-04.jpg"
                        alt="home-04"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 04</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-05.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-05.jpg"
                        src="images/demo/home-05.jpg"
                        alt="home-05"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 05</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-06.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-06.jpg"
                        src="images/demo/home-06.jpg"
                        alt="home-06"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Fashion 06</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-07.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-07.jpg"
                        src="images/demo/home-07.jpg"
                        alt="home-07"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 07</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-08.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-08.jpg"
                        src="images/demo/home-08.jpg"
                        alt="home-08"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 08</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-skincare.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-skincare.jpg"
                        src="images/demo/home-skincare.jpg"
                        alt="home-skincare"
                      />
                    </div>
                    <span className="demo-name">Home Skincare</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-headphone.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-headphone.jpg"
                        src="images/demo/home-headphone.jpg"
                        alt="home-headphone"
                      />
                    </div>
                    <span className="demo-name">Home Headphone</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-giftcard.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-giftcard.jpg"
                        src="images/demo/home-giftcard.jpg"
                        alt="home-gift-card"
                      />
                    </div>
                    <span className="demo-name">Home Gift Card</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-furniture.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-furniture.jpg"
                        src="images/demo/home-furniture.jpg"
                        alt="home-furniture"
                      />
                    </div>
                    <span className="demo-name">Home Furniture</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-furniture-02.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-furniture2.jpg"
                        src="images/demo/home-furniture2.jpg"
                        alt="home-furniture-2"
                      />
                    </div>
                    <span className="demo-name">Home Furniture 2</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-skateboard.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-skateboard.jpg"
                        src="images/demo/home-skateboard.jpg"
                        alt="home-skateboard"
                      />
                    </div>
                    <span className="demo-name">Home Skateboard</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-stroller.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-stroller.jpg"
                        src="images/demo/home-stroller.jpg"
                        alt="home-stroller"
                      />
                    </div>
                    <span className="demo-name">Home Stroller</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-decor.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-decor.jpg"
                        src="images/demo/home-decor.jpg"
                        alt="home-decor"
                      />
                    </div>
                    <span className="demo-name">Home Decor</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-electronic.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-electronic.jpg"
                        src="images/demo/home-electronic.jpg"
                        alt="home-electronic"
                      />
                    </div>
                    <span className="demo-name">Home Electronic</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-setup-gear.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-setup-gear.jpg"
                        src="images/demo/home-setup-gear.jpg"
                        alt="home-setup-gear"
                      />
                    </div>
                    <span className="demo-name">Home Setup Gear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-dog-accessories.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-dog-accessories.jpg"
                        src="images/demo/home-dog-accessories.jpg"
                        alt="home-dog-accessories"
                      />
                    </div>
                    <span className="demo-name">Home Dog Accessories</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-kitchen-wear.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-kitchen.jpg"
                        src="images/demo/home-kitchen.jpg"
                        alt="home-kitchen-wear"
                      />
                    </div>
                    <span className="demo-name">Home Kitchen Wear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-phonecase.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-phonecase.jpg"
                        src="images/demo/home-phonecase.jpg"
                        alt="home-phonecase"
                      />
                    </div>
                    <span className="demo-name">Home Phonecase</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-paddle-boards.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home_paddle_board.jpg"
                        src="images/demo/home_paddle_board.jpg"
                        alt="home-paddle_board"
                      />
                    </div>
                    <span className="demo-name">Home Paddle Boards</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-glasses.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-glasses.jpg"
                        src="images/demo/home-glasses.jpg"
                        alt="home-glasses"
                      />
                    </div>
                    <span className="demo-name">Home Glasses</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-pod-store.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-pod-store.jpg"
                        src="images/demo/home-pod-store.jpg"
                        alt="home-pod-store"
                      />
                    </div>
                    <span className="demo-name">Home POD Store</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-activewear.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-activewear.jpg"
                        src="images/demo/home-activewear.jpg"
                        alt="home-activewear"
                      />
                    </div>
                    <span className="demo-name">Activewear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-handbag.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-handbag.jpg"
                        src="images/demo/home-handbag.jpg"
                        alt="home-handbag"
                      />
                    </div>
                    <span className="demo-name">Home Handbag</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-tee.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-tee.jpg"
                        src="images/demo/home-tee.jpg"
                        alt="home-tee"
                      />
                    </div>
                    <span className="demo-name">Home Tee</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-sock.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-socks.jpg"
                        src="images/demo/home-socks.jpg"
                        alt="home-sock"
                      />
                    </div>
                    <span className="demo-name">Home Sock</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-jewerly.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-jewelry.jpg"
                        src="images/demo/home-jewelry.jpg"
                        alt="home-jewelry"
                      />
                    </div>
                    <span className="demo-name">Home Jewelry</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-sneaker.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-sneaker.jpg"
                        src="images/demo/home-sneaker.jpg"
                        alt="home-sneaker"
                      />
                    </div>
                    <span className="demo-name">Home Sneaker</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-accessories.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-accessories.jpg"
                        src="images/demo/home-accessories.jpg"
                        alt="home-accessories"
                      />
                    </div>
                    <span className="demo-name">Home Accessories</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-grocery.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-gocery.jpg"
                        src="images/demo/home-gocery.jpg"
                        alt="home-grocery"
                      />
                    </div>
                    <span className="demo-name">Home Grocery</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-baby.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="images/demo/home-baby.jpg"
                        src="images/demo/home-baby.jpg"
                        alt="home-baby"
                      />
                    </div>
                    <span className="demo-name">Home Baby</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modalDemo */}
      {/* mobile menu */}
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-one"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-one"
                >
                  <span>Home</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-one" className="collapse">
                  <ul className="sub-nav-menu">
                    <li>
                      <a href="index.html" className="sub-nav-link">
                        Home Fashion 01
                      </a>
                    </li>
                    <li>
                      <a href="home-02.html" className="sub-nav-link">
                        Home Fashion 02
                      </a>
                    </li>
                    <li>
                      <a href="home-03.html" className="sub-nav-link">
                        Home Fashion 03
                      </a>
                    </li>
                    <li>
                      <a href="home-04.html" className="sub-nav-link">
                        Home Fashion 04
                      </a>
                    </li>
                    <li>
                      <a href="home-05.html" className="sub-nav-link">
                        Home Fashion 05
                      </a>
                    </li>
                    <li>
                      <a href="home-06.html" className="sub-nav-link">
                        Home Fashion 06
                      </a>
                    </li>
                    <li>
                      <a href="home-07.html" className="sub-nav-link">
                        Home Fashion 07
                      </a>
                    </li>
                    <li>
                      <a href="home-08.html" className="sub-nav-link">
                        Home Fashion 08
                      </a>
                    </li>
                    <li>
                      <a href="home-giftcard.html" className="sub-nav-link">
                        Home Gift Card
                      </a>
                    </li>
                    <li>
                      <a href="home-headphone.html" className="sub-nav-link">
                        Home Headphone
                      </a>
                    </li>
                    <li>
                      <a href="home-multi-brand.html" className="sub-nav-link">
                        Home Multi Brand
                      </a>
                    </li>
                    <li>
                      <a href="home-skincare.html" className="sub-nav-link">
                        Home skincare
                      </a>
                    </li>
                    <li>
                      <a href="home-headphone.html" className="sub-nav-link">
                        Home Headphone
                      </a>
                    </li>
                    <li>
                      <a href="home-giftcard.html" className="sub-nav-link">
                        Home Gift Card
                      </a>
                    </li>
                    <li>
                      <a href="home-furniture.html" className="sub-nav-link">
                        Home Furniture
                      </a>
                    </li>
                    <li>
                      <a href="home-furniture-02.html" className="sub-nav-link">
                        Home Furniture 2
                      </a>
                    </li>
                    <li>
                      <a href="home-skateboard.html" className="sub-nav-link">
                        Home Skateboard
                      </a>
                    </li>
                    <li>
                      <a href="home-stroller.html" className="sub-nav-link">
                        Home Stroller
                      </a>
                    </li>
                    <li>
                      <a href="home-decor.html" className="sub-nav-link">
                        Home Decor
                      </a>
                    </li>
                    <li>
                      <a href="home-electronic.html" className="sub-nav-link">
                        Home Electronic
                      </a>
                    </li>
                    <li>
                      <a href="home-setup-gear.html" className="sub-nav-link">
                        Home Setup Gear
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-dog-accessories.html"
                        className="sub-nav-link"
                      >
                        Home Dog Accessories
                      </a>
                    </li>
                    <li>
                      <a href="home-kitchen-wear.html" className="sub-nav-link">
                        Home Kitchen Wear
                      </a>
                    </li>
                    <li>
                      <a href="home-phonecase.html" className="sub-nav-link">
                        Home Phonecase
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-paddle-boards.html"
                        className="sub-nav-link"
                      >
                        Home Paddle Boards
                      </a>
                    </li>
                    <li>
                      <a href="home-glasses.html" className="sub-nav-link">
                        Home Glasses
                      </a>
                    </li>
                    <li>
                      <a href="home-pod-store.html" className="sub-nav-link">
                        Home POD Store
                      </a>
                    </li>
                    <li>
                      <a href="home-activewear.html" className="sub-nav-link">
                        Home Activewear
                      </a>
                    </li>
                    <li>
                      <a href="home-handbag.html" className="sub-nav-link">
                        Home Handbag
                      </a>
                    </li>
                    <li>
                      <a href="home-tee.html" className="sub-nav-link">
                        Home Tee
                      </a>
                    </li>
                    <li>
                      <a href="home-sock.html" className="sub-nav-link">
                        Home Sock
                      </a>
                    </li>
                    <li>
                      <a href="home-jewerly.html" className="sub-nav-link">
                        Home Jewelry
                      </a>
                    </li>
                    <li>
                      <a href="home-sneaker.html" className="sub-nav-link">
                        Home Sneaker
                      </a>
                    </li>
                    <li>
                      <a href="home-accessories.html" className="sub-nav-link">
                        Home Accessories
                      </a>
                    </li>
                    <li>
                      <a href="home-grocery.html" className="sub-nav-link">
                        Home Grocery
                      </a>
                    </li>
                    <li>
                      <a href="home-baby.html" className="sub-nav-link">
                        Home Baby
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-two"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-two"
                >
                  <span>Shop</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-two" className="collapse">
                  <ul className="sub-nav-menu" id="sub-menu-navigation">
                    <li>
                      <a
                        href="#sub-shop-one"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-one"
                      >
                        <span>Shop layouts</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="shop-default.html"
                              className="sub-nav-link"
                            >
                              Default
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-left-sidebar.html"
                              className="sub-nav-link"
                            >
                              Left sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-right-sidebar.html"
                              className="sub-nav-link"
                            >
                              Right sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-fullwidth.html"
                              className="sub-nav-link"
                            >
                              Fullwidth
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-collection-sub.html"
                              className="sub-nav-link"
                            >
                              Sub collection
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-collection-list.html"
                              className="sub-nav-link"
                            >
                              Collections list
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-shop-two"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-two"
                      >
                        <span>Features</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a href="shop-link.html" className="sub-nav-link">
                              Pagination links
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-loadmore.html"
                              className="sub-nav-link"
                            >
                              Pagination loadmore
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-infinite-scrolling.html"
                              className="sub-nav-link"
                            >
                              Pagination infinite scrolling
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-filter-sidebar.html"
                              className="sub-nav-link"
                            >
                              Filter sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-filter-hidden.html"
                              className="sub-nav-link"
                            >
                              Filter hidden
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-shop-three"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-three"
                      >
                        <span>Product styles</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-three" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-style-list.html"
                              className="sub-nav-link"
                            >
                              Product style list
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-01.html"
                              className="sub-nav-link"
                            >
                              Product style 01
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-02.html"
                              className="sub-nav-link"
                            >
                              Product style 02
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-03.html"
                              className="sub-nav-link"
                            >
                              Product style 03
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-04.html"
                              className="sub-nav-link"
                            >
                              Product style 04
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-05.html"
                              className="sub-nav-link"
                            >
                              Product style 05
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-06.html"
                              className="sub-nav-link"
                            >
                              Product style 06
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-07.html"
                              className="sub-nav-link"
                            >
                              Product style 07
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-three"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-three"
                >
                  <span>Products</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-three" className="collapse">
                  <ul className="sub-nav-menu" id="sub-menu-navigation">
                    <li>
                      <a
                        href="#sub-product-one"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-one"
                      >
                        <span>Product layouts</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-detail.html"
                              className="sub-nav-link"
                            >
                              Product default
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-grid-1.html"
                              className="sub-nav-link"
                            >
                              Product grid 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-grid-2.html"
                              className="sub-nav-link"
                            >
                              Product grid 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-stacked.html"
                              className="sub-nav-link"
                            >
                              Product stacked
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-right-thumbnails.html"
                              className="sub-nav-link"
                            >
                              Product right thumbnails
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-bottom-thumbnails.html"
                              className="sub-nav-link"
                            >
                              Product bottom thumbnails
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-drawer-sidebar.html"
                              className="sub-nav-link"
                            >
                              Product drawer sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-description-accordion.html"
                              className="sub-nav-link"
                            >
                              Product description accordion
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-description-list.html"
                              className="sub-nav-link"
                            >
                              Product description list
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-description-vertical.html"
                              className="sub-nav-link"
                            >
                              Product description vertical
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-two"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-two"
                      >
                        <span>Product details</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-inner-zoom.html"
                              className="sub-nav-link"
                            >
                              Product inner zoom
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-zoom-magnifier.html"
                              className="sub-nav-link"
                            >
                              Product zoom magnifier
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-no-zoom.html"
                              className="sub-nav-link"
                            >
                              Product no zoom
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-photoswipe-popup.html"
                              className="sub-nav-link"
                            >
                              Product photoswipe popup
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-zoom-popup.html"
                              className="sub-nav-link"
                            >
                              Product external zoom and photoswipe popup
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-video.html"
                              className="sub-nav-link"
                            >
                              Product video
                            </a>
                          </li>
                          <li>
                            <a href="product-3d.html" className="sub-nav-link">
                              Product 3D, AR models
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-options-customizer.html"
                              className="sub-nav-link"
                            >
                              Product options &amp; customizer
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-advanced-types.html"
                              className="sub-nav-link"
                            >
                              Advanced product types
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-giftcard.html"
                              className="sub-nav-link"
                            >
                              Recipient information form for gift card products
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-three"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-three"
                      >
                        <span>Product swatchs</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-three" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-color-swatch.html"
                              className="sub-nav-link"
                            >
                              Product color swatch
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-rectangle.html"
                              className="sub-nav-link"
                            >
                              Product rectangle
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-rectangle-color.html"
                              className="sub-nav-link"
                            >
                              Product rectangle color
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-image.html"
                              className="sub-nav-link"
                            >
                              Product swatch image
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-image-rounded.html"
                              className="sub-nav-link"
                            >
                              Product swatch image rounded
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-dropdown.html"
                              className="sub-nav-link"
                            >
                              Product swatch dropdown
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-dropdown-color.html"
                              className="sub-nav-link"
                            >
                              Product swatch dropdown color
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-four"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-four"
                      >
                        <span>Product features</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-four" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-frequently-bought-together.html"
                              className="sub-nav-link"
                            >
                              Frequently bought together
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-frequently-bought-together-2.html"
                              className="sub-nav-link"
                            >
                              Frequently bought together 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-upsell-features.html"
                              className="sub-nav-link"
                            >
                              Product upsell features
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-pre-orders.html"
                              className="sub-nav-link"
                            >
                              Product pre-orders
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-notification.html"
                              className="sub-nav-link"
                            >
                              Back in stock notification
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-pickup.html"
                              className="sub-nav-link"
                            >
                              Product pickup
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-images-grouped.html"
                              className="sub-nav-link"
                            >
                              Variant images grouped
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-complimentary.html"
                              className="sub-nav-link"
                            >
                              Complimentary products
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-quick-order-list.html"
                              className="sub-nav-link line-clamp"
                            >
                              Quick order list
                              <div className="demo-label">
                                <span className="demo-new">New</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-four"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-four"
                >
                  <span>Pages</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-four" className="collapse">
                  <ul className="sub-nav-menu" id="sub-menu-navigation">
                    <li>
                      <a href="about-us.html" className="sub-nav-link">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="brands.html" className="sub-nav-link line-clamp">
                        Brands
                        <div className="demo-label">
                          <span className="demo-new">New</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="brands-v2.html" className="sub-nav-link">
                        Brands V2
                      </a>
                    </li>
                    <li>
                      <a href="contact-1.html" className="sub-nav-link">
                        Contact 1
                      </a>
                    </li>
                    <li>
                      <a href="contact-2.html" className="sub-nav-link">
                        Contact 2
                      </a>
                    </li>
                    <li>
                      <a href="faq-1.html" className="sub-nav-link">
                        FAQ 01
                      </a>
                    </li>
                    <li>
                      <a href="faq-2.html" className="sub-nav-link">
                        FAQ 02
                      </a>
                    </li>
                    <li>
                      <a href="our-store.html" className="sub-nav-link">
                        Our store
                      </a>
                    </li>
                    <li>
                      <a href="store-locations.html" className="sub-nav-link">
                        Store locator
                      </a>
                    </li>
                    <li>
                      <a
                        href="timeline.html"
                        className="sub-nav-link line-clamp"
                      >
                        Timeline
                        <div className="demo-label">
                          <span className="demo-new">New</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="view-cart.html"
                        className="sub-nav-link line-clamp"
                      >
                        View cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="checkout.html"
                        className="sub-nav-link line-clamp"
                      >
                        Check out
                      </a>
                    </li>
                    <li>
                      <a
                        href="payment-confirmation.html"
                        className="sub-nav-link line-clamp"
                      >
                        Payment Confirmation
                      </a>
                    </li>
                    <li>
                      <a
                        href="payment-failure.html"
                        className="sub-nav-link line-clamp"
                      >
                        Payment Failure
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sub-account"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-account"
                      >
                        <span>My Account</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-account" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a href="my-account.html" className="sub-nav-link">
                              My account
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-orders.html"
                              className="sub-nav-link"
                            >
                              My order
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-orders-details.html"
                              className="sub-nav-link"
                            >
                              My order details
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-address.html"
                              className="sub-nav-link"
                            >
                              My address
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-edit.html"
                              className="sub-nav-link"
                            >
                              My account details
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-wishlist.html"
                              className="sub-nav-link"
                            >
                              My wishlist
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="invoice.html"
                        className="sub-nav-link line-clamp"
                      >
                        Invoice
                      </a>
                    </li>
                    <li>
                      <a href="404.html" className="sub-nav-link line-clamp">
                        404
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-five"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-five"
                >
                  <span>Blog</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-five" className="collapse">
                  <ul className="sub-nav-menu">
                    <li>
                      <a href="blog-grid.html" className="sub-nav-link">
                        Grid layout
                      </a>
                    </li>
                    <li>
                      <a href="blog-sidebar-left.html" className="sub-nav-link">
                        Left sidebar
                      </a>
                    </li>
                    <li>
                      <a
                        href="blog-sidebar-right.html"
                        className="sub-nav-link"
                      >
                        Right sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-list.html" className="sub-nav-link">
                        Blog list
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" className="sub-nav-link">
                        Single Post
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3"
                  className="mb-menu-link"
                >
                  Buy now
                </a>
              </li>
            </ul>
            <div className="mb-other-content">
              <div className="d-flex group-icon">
                <a href="wishlist.html" className="site-nav-icon">
                  <i className="icon icon-heart" />
                  Wishlist
                </a>
                <a href="home-search.html" className="site-nav-icon">
                  <i className="icon icon-search" />
                  Search
                </a>
              </div>
              <div className="mb-notice">
                <a href="contact-1.html" className="text-need">
                  Need help ?
                </a>
              </div>
              <ul className="mb-info">
                <li>
                  Address: 1234 Fashion Street, Suite 567, <br /> New York, NY
                  10001
                </li>
                <li>
                  Email: <b>info@fashionshop.com</b>
                </li>
                <li>
                  Phone: <b>(212) 555-1234</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-bottom">
            <a href="login.html" className="site-nav-icon">
              <i className="icon icon-account" />
              Login
            </a>
            <div className="bottom-bar-language">
              <div className="tf-currencies">
                <select className="image-select center style-default type-currencies">
                  <option data-thumbnail="images/country/fr.svg">
                    EUR € | France
                  </option>
                  <option data-thumbnail="images/country/de.svg">
                    EUR € | Germany
                  </option>
                  <option data-thumbnail="images/country/us.svg">
                    USD $ | United States
                  </option>
                  <option data-thumbnail="images/country/vn.svg">
                    VND ₫ | Vietnam
                  </option>
                </select>
              </div>
              <div className="tf-languages">
                <select className="image-select center style-default type-languages">
                  <option>English</option>
                  <option>العربية</option>
                  <option>简体中文</option>
                  <option>اردو</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /mobile menu */}
      {/* canvasSearch */}
      <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
        <div className="canvas-wrapper">
          <header className="tf-search-head">
            <div className="title fw-5">
              Search our site
              <div className="close">
                <span
                  className="icon-close icon-close-popup"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="tf-search-sticky">
              <form className="tf-mini-search-frm">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Search"
                    className=""
                    name="text"
                    tabIndex={0}
                    defaultValue=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <button className="" type="submit">
                  <i className="icon-search" />
                </button>
              </form>
            </div>
          </header>
          <div className="canvas-body p-0">
            <div className="tf-search-content">
              <div className="tf-cart-hide-has-results">
                <div className="tf-col-quicklink">
                  <div className="tf-search-content-title fw-5">Quick link</div>
                  <ul className="tf-quicklink-list">
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className="">
                        Fashion
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className="">
                        Men
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className="">
                        Women
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className="">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tf-col-content">
                  <div className="tf-search-content-title fw-5">
                    Need some inspiration?
                  </div>
                  <div className="tf-search-hidden-inner">
                    <div className="tf-loop-item">
                      <div className="image">
                        <a href="product-detail.html">
                          <img src="images/products/white-3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <a href="product-detail.html">Cotton jersey top</a>
                        <div className="tf-product-info-price">
                          <div className="compare-at-price">$10.00</div>
                          <div className="price-on-sale fw-6">$8.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-loop-item">
                      <div className="image">
                        <a href="product-detail.html">
                          <img src="images/products/white-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <a href="product-detail.html">Mini crossbody bag</a>
                        <div className="tf-product-info-price">
                          <div className="price fw-6">$18.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-loop-item">
                      <div className="image">
                        <a href="product-detail.html">
                          <img src="images/products/white-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="content">
                        <a href="product-detail.html">
                          Oversized Printed T-shirt
                        </a>
                        <div className="tf-product-info-price">
                          <div className="price fw-6">$18.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /canvasSearch */}
      {/* toolbarShopmb */}
      <div
        className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile"
        id="toolbarShopmb"
      >
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate1.jpg" alt="" />
                  </div>
                  <span>Accessories</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate2.jpg" alt="" />
                  </div>
                  <span>Dog</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate3.jpg" alt="" />
                  </div>
                  <span>Grocery</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate4.png" alt="" />
                  </div>
                  <span>Handbag</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#cate-menu-one"
                  className="tf-category-link has-children collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-menu-one"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate5.jpg" alt="" />
                  </div>
                  <span>Fashion</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="cate-menu-one" className="collapse list-cate">
                  <ul className="sub-nav-menu" id="cate-menu-navigation">
                    <li>
                      <a
                        href="#cate-shop-one"
                        className="tf-category-link has-children sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="cate-shop-one"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate6.jpg" alt="" />
                        </div>
                        <span>Mens</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="cate-shop-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img src="images/shop/cate/cate1.jpg" alt="" />
                              </div>
                              <span>Accessories</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img src="images/shop/cate/cate8.jpg" alt="" />
                              </div>
                              <span>Shoes</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#cate-shop-two"
                        className="tf-category-link has-children sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="cate-shop-two"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate9.jpg" alt="" />
                        </div>
                        <span>Womens</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="cate-shop-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img src="images/shop/cate/cate4.png" alt="" />
                              </div>
                              <span>Handbag</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img src="images/shop/cate/cate7.jpg" alt="" />
                              </div>
                              <span>Tee</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#cate-menu-two"
                  className="tf-category-link has-children collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-menu-two"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate6.jpg" alt="" />
                  </div>
                  <span>Men</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="cate-menu-two" className="collapse list-cate">
                  <ul className="sub-nav-menu" id="cate-menu-navigation1">
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate1.jpg" alt="" />
                        </div>
                        <span>Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate8.jpg" alt="" />
                        </div>
                        <span>Shoes</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate7.jpg" alt="" />
                  </div>
                  <span>Tee</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate8.jpg" alt="" />
                  </div>
                  <span>Shoes</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#cate-menu-three"
                  className="tf-category-link has-children collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-menu-three"
                >
                  <div className="image">
                    <img src="images/shop/cate/cate9.jpg" alt="" />
                  </div>
                  <span>Women</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="cate-menu-three" className="collapse list-cate">
                  <ul className="sub-nav-menu" id="cate-menu-navigation2">
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate4.png" alt="" />
                        </div>
                        <span>Handbag</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="images/shop/cate/cate7.jpg" alt="" />
                        </div>
                        <span>Tee</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-bottom">
            <a href="shop-default.html" className="tf-btn fw-5 btn-line">
              View all collection
              <i className="icon icon-arrow1-top-left" />
            </a>
          </div>
        </div>
      </div>
      {/* /toolbarShopmb */}
      {/* modal login */}
      <div
        className="modal modalCentered fade form-sign-in modal-part-content"
        id="login"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Log in</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-login-form">
              <form className="" action="my-account.html" acceptCharset="utf-8">
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="email"
                    name=""
                  />
                  <label className="tf-field-label" htmlFor="">
                    Email *
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="password"
                    name=""
                  />
                  <label className="tf-field-label" htmlFor="">
                    Password *
                  </label>
                </div>
                <div>
                  <a
                    href="#forgotPassword"
                    data-bs-toggle="modal"
                    className="btn-link link"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="bottom">
                  <div className="w-100">
                    <button
                      type="submit"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    >
                      <span>Log in</span>
                    </button>
                  </div>
                  <div className="w-100">
                    <a
                      href="#register"
                      data-bs-toggle="modal"
                      className="btn-link fw-6 w-100 link"
                    >
                      New customer? Create your account
                      <i className="icon icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal modalCentered fade form-sign-in modal-part-content"
        id="forgotPassword"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Reset your password</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-login-form">
              <form className="">
                <div>
                  <p>
                    Sign up for early Sale access plus tailored new arrivals,
                    trends and promotions. To opt out, click unsubscribe in our
                    emails
                  </p>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="email"
                    name=""
                  />
                  <label className="tf-field-label" htmlFor="">
                    Email *
                  </label>
                </div>
                <div>
                  <a
                    href="#login"
                    data-bs-toggle="modal"
                    className="btn-link link"
                  >
                    Cancel
                  </a>
                </div>
                <div className="bottom">
                  <div className="w-100">
                    <button
                      type="submit"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    >
                      <span>Reset password</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal modalCentered fade form-sign-in modal-part-content"
        id="register"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Register</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-login-form">
              <form className="">
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    name=""
                  />
                  <label className="tf-field-label" htmlFor="">
                    First name
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    name=""
                  />
                  <label className="tf-field-label" htmlFor="">
                    Last name
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="email"
                    name=""
                  />
                  <label className="tf-field-label" htmlFor="">
                    Email *
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="password"
                    name=""
                  />
                  <label className="tf-field-label" htmlFor="">
                    Password *
                  </label>
                </div>
                <div className="bottom">
                  <div className="w-100">
                    <a
                      href="register.html"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    >
                      <span>Register</span>
                    </a>
                  </div>
                  <div className="w-100">
                    <a
                      href="#login"
                      data-bs-toggle="modal"
                      className="btn-link fw-6 w-100 link"
                    >
                      Already have an account? Log in here
                      <i className="icon icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /modal login */}
      {/* modal compare */}
      <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
        <div className="canvas-wrapper">
          <header className="canvas-header">
            <div className="close-popup">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </header>
          <div className="canvas-body">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tf-compare-list">
                    <div className="tf-compare-head">
                      <div className="title">Compare Products</div>
                    </div>
                    <div className="tf-compare-offcanvas">
                      <div className="tf-compare-item">
                        <div className="position-relative">
                          <div className="icon">
                            <i className="icon-close" />
                          </div>
                          <a href="product-detail.html">
                            <img
                              className="radius-3"
                              src="images/products/orange-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="tf-compare-item">
                        <div className="position-relative">
                          <div className="icon">
                            <i className="icon-close" />
                          </div>
                          <a href="product-detail.html">
                            <img
                              className="radius-3"
                              src="images/products/pink-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tf-compare-buttons">
                      <div className="tf-compare-buttons-wrap">
                        <a
                          href="compare.html"
                          className="tf-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn "
                        >
                          Compare
                        </a>
                        <div className="tf-compapre-button-clear-all link">
                          Clear All
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal compare */}
      {/* modal quick_add */}
      <div className="modal fade modalDemo" id="quick_add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="wrap">
              <div className="tf-product-info-item">
                <div className="image">
                  <img src="images/products/orange-1.jpg" alt="" />
                </div>
                <div className="content">
                  <a href="product-detail.html">Ribbed Tank Top</a>
                  <div className="tf-product-info-price">
                    {/* <div class="price-on-sale">$8.00</div>
                          <div class="compare-at-price">$10.00</div>
                          <div class="badges-on-sale"><span>20</span>% OFF</div> */}
                    <div className="price">$18.00</div>
                  </div>
                </div>
              </div>
              <div className="tf-product-info-variant-picker mb_15">
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Color:{" "}
                    <span className="fw-6 variant-picker-label-value">
                      Orange
                    </span>
                  </div>
                  <div className="variant-picker-values">
                    <input
                      id="values-orange"
                      type="radio"
                      name="color"
                      defaultChecked=""
                    />
                    <label
                      className="hover-tooltip radius-60"
                      htmlFor="values-orange"
                      data-value="Orange"
                    >
                      <span className="btn-checkbox bg-color-orange" />
                      <span className="tooltip">Orange</span>
                    </label>
                    <input id="values-black" type="radio" name="color" />
                    <label
                      className=" hover-tooltip radius-60"
                      htmlFor="values-black"
                      data-value="Black"
                    >
                      <span className="btn-checkbox bg-color-black" />
                      <span className="tooltip">Black</span>
                    </label>
                    <input id="values-white" type="radio" name="color" />
                    <label
                      className="hover-tooltip radius-60"
                      htmlFor="values-white"
                      data-value="White"
                    >
                      <span className="btn-checkbox bg-color-white" />
                      <span className="tooltip">White</span>
                    </label>
                  </div>
                </div>
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Size:{" "}
                    <span className="fw-6 variant-picker-label-value">S</span>
                  </div>
                  <div className="variant-picker-values">
                    <input
                      type="radio"
                      name="size"
                      id="values-s"
                      defaultChecked=""
                    />
                    <label
                      className="style-text"
                      htmlFor="values-s"
                      data-value="S"
                    >
                      <p>S</p>
                    </label>
                    <input type="radio" name="size" id="values-m" />
                    <label
                      className="style-text"
                      htmlFor="values-m"
                      data-value="M"
                    >
                      <p>M</p>
                    </label>
                    <input type="radio" name="size" id="values-l" />
                    <label
                      className="style-text"
                      htmlFor="values-l"
                      data-value="L"
                    >
                      <p>L</p>
                    </label>
                    <input type="radio" name="size" id="values-xl" />
                    <label
                      className="style-text"
                      htmlFor="values-xl"
                      data-value="XL"
                    >
                      <p>XL</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="tf-product-info-quantity mb_15">
                <div className="quantity-title fw-6">Quantity</div>
                <div className="wg-quantity">
                  <span className="btn-quantity minus-btn">-</span>
                  <input type="text" name="number" defaultValue={1} />
                  <span className="btn-quantity plus-btn">+</span>
                </div>
              </div>
              <div className="tf-product-info-buy-button">
                <form className="">
                  <a
                    href="javascript:void(0);"
                    className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                  >
                    <span>Add to cart -&nbsp;</span>
                    <span className="tf-qty-price">$18.00</span>
                  </a>
                  <div className="tf-product-btn-wishlist btn-icon-action">
                    <i className="icon-heart" />
                    <i className="icon-delete" />
                  </div>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="icon icon-check" />
                  </a>
                  <div className="w-100">
                    <a href="#" className="btns-full">
                      Buy with <img src="images/payments/paypal.png" alt="" />
                    </a>
                    <a href="#" className="payment-more-option">
                      More payment options
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal quick_add */}
      {/* modal quick_view */}
      <div className="modal fade modalDemo" id="quick_view">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="wrap">
              <div className="tf-product-media-wrap">
                <div dir="ltr" className="swiper tf-single-slide">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item">
                        <img src="images/products/orange-1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img src="images/products/pink-1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next button-style-arrow single-slide-prev" />
                  <div className="swiper-button-prev button-style-arrow single-slide-next" />
                </div>
              </div>
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-product-info-list">
                  <div className="tf-product-info-title">
                    <h5>
                      <a className="link" href="product-detail.html">
                        Ribbed Tank Top
                      </a>
                    </h5>
                  </div>
                  <div className="tf-product-info-badges">
                    <div className="badges text-uppercase">Best seller</div>
                    <div className="product-status-content">
                      <i className="icon-lightning" />
                      <p className="fw-6">
                        Selling fast! 48 people have this in their carts.
                      </p>
                    </div>
                  </div>
                  <div className="tf-product-info-price">
                    <div className="price">$18.00</div>
                  </div>
                  <div className="tf-product-description">
                    <p>
                      Nunc arcu faucibus a et lorem eu a mauris adipiscing
                      conubia ac aptent ligula facilisis a auctor habitant
                      parturient a a.Interdum fermentum.
                    </p>
                  </div>
                  <div className="tf-product-info-variant-picker">
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Color:{" "}
                        <span className="fw-6 variant-picker-label-value">
                          Orange
                        </span>
                      </div>
                      <div className="variant-picker-values">
                        <input
                          id="values-orange-1"
                          type="radio"
                          name="color-1"
                          defaultChecked=""
                        />
                        <label
                          className="hover-tooltip radius-60"
                          htmlFor="values-orange-1"
                          data-value="Orange"
                        >
                          <span className="btn-checkbox bg-color-orange" />
                          <span className="tooltip">Orange</span>
                        </label>
                        <input
                          id="values-black-1"
                          type="radio"
                          name="color-1"
                        />
                        <label
                          className=" hover-tooltip radius-60"
                          htmlFor="values-black-1"
                          data-value="Black"
                        >
                          <span className="btn-checkbox bg-color-black" />
                          <span className="tooltip">Black</span>
                        </label>
                        <input
                          id="values-white-1"
                          type="radio"
                          name="color-1"
                        />
                        <label
                          className="hover-tooltip radius-60"
                          htmlFor="values-white-1"
                          data-value="White"
                        >
                          <span className="btn-checkbox bg-color-white" />
                          <span className="tooltip">White</span>
                        </label>
                      </div>
                    </div>
                    <div className="variant-picker-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="variant-picker-label">
                          Size:{" "}
                          <span className="fw-6 variant-picker-label-value">
                            S
                          </span>
                        </div>
                        <div className="find-size btn-choose-size fw-6">
                          Find your size
                        </div>
                      </div>
                      <div className="variant-picker-values">
                        <input
                          type="radio"
                          name="size-1"
                          id="values-s-1"
                          defaultChecked=""
                        />
                        <label
                          className="style-text"
                          htmlFor="values-s-1"
                          data-value="S"
                        >
                          <p>S</p>
                        </label>
                        <input type="radio" name="size-1" id="values-m-1" />
                        <label
                          className="style-text"
                          htmlFor="values-m-1"
                          data-value="M"
                        >
                          <p>M</p>
                        </label>
                        <input type="radio" name="size-1" id="values-l-1" />
                        <label
                          className="style-text"
                          htmlFor="values-l-1"
                          data-value="L"
                        >
                          <p>L</p>
                        </label>
                        <input type="radio" name="size-1" id="values-xl-1" />
                        <label
                          className="style-text"
                          htmlFor="values-xl-1"
                          data-value="XL"
                        >
                          <p>XL</p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-quantity">
                    <div className="quantity-title fw-6">Quantity</div>
                    <div className="wg-quantity">
                      <span className="btn-quantity minus-btn">-</span>
                      <input type="text" name="number" defaultValue={1} />
                      <span className="btn-quantity plus-btn">+</span>
                    </div>
                  </div>
                  <div className="tf-product-info-buy-button">
                    <form className="">
                      <a
                        href="javascript:void(0);"
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                      >
                        <span>Add to cart -&nbsp;</span>
                        <span className="tf-qty-price">$8.00</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <div className="w-100">
                        <a href="#" className="btns-full">
                          Buy with{" "}
                          <img src="images/payments/paypal.png" alt="" />
                        </a>
                        <a href="#" className="payment-more-option">
                          More payment options
                        </a>
                      </div>
                    </form>
                  </div>
                  <div>
                    <a
                      href="product-detail.html"
                      className="tf-btn fw-6 btn-line"
                    >
                      View full details
                      <i className="icon icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal quick_view */}
      {/* modal find_size */}
      <div className="modal fade modalDemo tf-product-modal" id="find_size">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Size chart</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-rte">
              <div className="tf-table-res-df">
                <h6>Size guide</h6>
                <table className="tf-sizeguide-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>US</th>
                      <th>Bust</th>
                      <th>Waist</th>
                      <th>Low Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>2</td>
                      <td>32</td>
                      <td>24 - 25</td>
                      <td>33 - 34</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>4</td>
                      <td>34 - 35</td>
                      <td>26 - 27</td>
                      <td>35 - 26</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>6</td>
                      <td>36 - 37</td>
                      <td>28 - 29</td>
                      <td>38 - 40</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>8</td>
                      <td>38 - 29</td>
                      <td>30 - 31</td>
                      <td>42 - 44</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>10</td>
                      <td>40 - 41</td>
                      <td>32 - 33</td>
                      <td>45 - 47</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>12</td>
                      <td>42 - 43</td>
                      <td>34 - 35</td>
                      <td>48 - 50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tf-page-size-chart-content">
                <div>
                  <h6>Measuring Tips</h6>
                  <div className="title">Bust</div>
                  <p>Measure around the fullest part of your bust.</p>
                  <div className="title">Waist</div>
                  <p>Measure around the narrowest part of your torso.</p>
                  <div className="title">Low Hip</div>
                  <p className="mb-0">
                    With your feet together measure around the fullest part of
                    your hips/rear.
                  </p>
                </div>
                <div>
                  <img
                    className="sizechart lazyload"
                    data-src="images/shop/products/size_chart2.jpg"
                    src="images/shop/products/size_chart2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountEditPage;
