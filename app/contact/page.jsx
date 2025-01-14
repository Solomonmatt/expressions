
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
      .catch((err) => console.error(err)); 
  }, []); 

  useEffect(() => { 
    const cartItems = getCart(); 
    setCartItems(cartItems); 
  }, [refireEffect]);

  useEffect(() => { 
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY); 
  }, []); 

  return ( 
    
      <div>
        {/* announcement-bar */}
        <div className="announcement-bar bg_dark">
          <div className="wrap-announcement-bar">
            <div className="box-sw-announcement-bar">
              {/* announcement text */}
            </div>
            <span className="icon-close close-announcement-bar" />
          </div>
        </div>
        {/* /announcement-bar */}
        {/* header */}
        <NavBar />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.563993632205!2d0.0206056!3d51.5212146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7e7274fd991%3A0xc7ddbca2d7e5eea5!2s326%20Barking%20Rd%2C%20London%20E13%208HL%2C%20UK!5e0!3m2!1sen!2sng!4v1736777509367!5m2!1sen!2sng" 
            width="600" 
            height="450" 
            style={{ border: "0" }} 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        {/* /map */}
        {/* form */}
        <section className="flat-spacing-21">
          <div className="container">
            <div className="tf-grid-layout gap30 lg-col-2">
              <div className="tf-content-left">
                {/* visit our studio */}
              </div>
              <div className="tf-content-right">
                <h5 className="mb_20">Get in Touch</h5>
                <div>
                  <form className="form-contact" id="contactform" action="./contact/contact-process.php" method="post">
                    <div className="d-flex gap-15 mb_15">
                      <fieldset className="w-100">
                        <input type="text" name="name" id="name" required placeholder="Name *" />
                      </fieldset>
                      <fieldset className="w-100">
                        <input type="email" name="email" id="email" required placeholder="Email *" />
                      </fieldset>
                    </div>
                    <div className="mb_15">
                      <textarea placeholder="Message" name="message" id="message" required cols={30} rows={10} defaultValue={""} />
                    </div>
                    <div className="send-wrap">
                      <button type="submit" className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
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
    


