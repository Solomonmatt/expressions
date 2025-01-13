"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateItemQuantity,
  getTotalQuantity,
  getTotalPrice,
  clearCart,
} from "@/utils/cart";
import Link from "next/link";

import { loadStripe } from "@stripe/stripe-js";
import { checkoutCart } from "@/lib/actions/transaction.action";
import { client, urlFor } from "@/lib/sanity/client";
import { PRODUCTS_QUERY } from "@/lib/sanity/queries";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [refireEffect, setRefireEffect] = useState(false);

  const onCheckout = async () => {
    const transaction = {
      amount: getTotalPrice(),
    };

    await checkoutCart(transaction);
    clearCart();
  };

  useEffect(() => {
    client
      .fetch(PRODUCTS_QUERY, {}, {})
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, [refireEffect]);

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  return (<>
      <div id="wrapper">
        <div id="wrapper">
          {/* announcement-bar */}
          <div className="announcement-bar bg_dark">
            <div className="wrap-announcement-bar">
              <div className="box-sw-announcement-bar">
                <div className="announcement-bar-item">
                  <p>
                    WELCOME TO UNIQUE EXPRESSIONS STUDIO CAN&apos;T FIND WHAT
                    YOU NEED? WHATSAPP US: (0) 7490442544
                  </p>
                </div>
                <div className="announcement-bar-item">
                  <p>FREE SHIPPING AND RETURNS</p>
                </div>
                <div className="announcement-bar-item">
                  <p>LIMITED TIME OFFER: HAIR SALE YOU CAN&apos;T RESIST</p>
                </div>
                <div className="announcement-bar-item">
                  <p>FREE SHIPPING AND RETURNS</p>
                </div>
                <div className="announcement-bar-item">
                  <p>
                    CAN&apos;T FIND WHAT YOU NEED? WHATSAPP US: (0) 7490442544
                  </p>
                </div>
                <div className="announcement-bar-item">
                  <p>LIMITED TIME OFFER: HAIR SALE YOU CAN&apos;T RESIST</p>
                </div>
                <div className="announcement-bar-item">
                  <p>FREE SHIPPING AND RETURNS</p>
                </div>
                <div className="announcement-bar-item">
                  <p>
                    CAN&apos;T FIND WHAT YOU NEED? WHATSAPP US: (0) 7490442544
                  </p>
                </div>
              </div>
            </div>
            <span className="icon-close close-announcement-bar" />
          </div>
          {/* /announcement-bar */}
          {/* header */}
          <NavBar />
        </div>
      </div>
      {/* /header */}

      
  {/* page-title */}
  <div className="tf-page-title style-2">
    <div className="container-full">
      <div className="heading text-center">Contact Us</div>
    </div>
  </div>
  {/* /page-title */}
  {/* map */}
  <div className="w-100">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317859.6089702069!2d-0.075949!3d51.508112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sus!4v1719221598456!5m2!1sen!2sus"
      width="100%"
      height={646}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  {/* /map */}
  {/* form */}
  <section className="flat-spacing-21">
    <div className="container">
      <div className="tf-grid-layout gap30 lg-col-2">
        <div className="tf-content-left">
          <h5 className="mb_20">Visit Our Store</h5>
          <div className="mb_20">
            <p className="mb_15">
              <strong>Address</strong>
            </p>
            <p>66 Mott St, New York, New York, Zip Code: 10006, AS</p>
          </div>
          <div className="mb_20">
            <p className="mb_15">
              <strong>Phone</strong>
            </p>
            <p>(623) 934-2400</p>
          </div>
          <div className="mb_20">
            <p className="mb_15">
              <strong>Email</strong>
            </p>
            <p>EComposer@example.com</p>
          </div>
          <div className="mb_36">
            <p className="mb_15">
              <strong>Open Time</strong>
            </p>
            <p className="mb_15">Our store has re-opened for shopping, </p>
            <p>exchange Every day 11am to 7pm</p>
          </div>
          <div>
            <ul className="tf-social-icon d-flex gap-20 style-default">
              <li>
                <a
                  href="#"
                  className="box-icon link round social-facebook border-line-black"
                >
                  <i className="icon fs-14 icon-fb" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon link round social-twiter border-line-black"
                >
                  <i className="icon fs-12 icon-Icon-x" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon link round social-instagram border-line-black"
                >
                  <i className="icon fs-14 icon-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon link round social-tiktok border-line-black"
                >
                  <i className="icon fs-14 icon-tiktok" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon link round social-pinterest border-line-black"
                >
                  <i className="icon fs-14 icon-pinterest-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tf-content-right">
          <h5 className="mb_20">Get in Touch</h5>
          <p className="mb_24">
            If you’ve got great products your making or looking to work with us
            then drop us a line.
          </p>
          <div>
            <form
              className="form-contact"
              id="contactform"
              action="./contact/contact-process.php"
              method="post"
            >
              <div className="d-flex gap-15 mb_15">
                <fieldset className="w-100">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required=""
                    placeholder="Name *"
                  />
                </fieldset>
                <fieldset className="w-100">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required=""
                    placeholder="Email *"
                  />
                </fieldset>
              </div>
              <div className="mb_15">
                <textarea
                  placeholder="Message"
                  name="message"
                  id="message"
                  required=""
                  cols={30}
                  rows={10}
                  defaultValue={""}
                />
              </div>
              <div className="send-wrap">
                <button
                  type="submit"
                  className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /form */}