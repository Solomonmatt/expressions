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

  return (
    <>
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
      {/* categories */}
      <section className="flat-spacing-20">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf-categories-wrap">
                <div className="tf-categories-container">
                  <div className="collection-item-circle hover-img">
                    <Link href="/shop" className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="images/demo/D1.png"
                        src="images/demo/D1.png"
                        alt="collection-img"
                      />
                    </Link>
                    <div className="collection-content text-center">
                      <Link href="/shop" className="link title fw-6">
                        New Arrivals
                      </Link>
                    </div>
                  </div>
                  <div className="collection-item-circle hover-img">
                    <Link href="/shop" className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="images/demo/d2.png"
                        src="images/demo/d2.png"
                        alt="collection-img"
                      />
                    </Link>
                    <div className="collection-content text-center">
                      <Link href="/shop" className="link title fw-6">
                        Best Sellers
                      </Link>
                    </div>
                  </div>
                  <div className="collection-item-circle hover-img">
                    <Link href="/shop" className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="images/demo/d3.png"
                        src="images/demo/d3.png"
                        alt="collection-img"
                      />
                    </Link>
                    <div className="collection-content text-center">
                      <Link href="/shop" className="link title fw-6">
                        Top Rated
                      </Link>
                    </div>
                  </div>
                  <div className="collection-item-circle hover-img">
                    <Link href="/shop" className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="images/demo/d2.png"
                        src="images/demo/d2.png"
                        alt="collection-img"
                      />
                    </Link>
                    <div className="collection-content text-center">
                      <Link href="/shop" className="link title fw-6">
                        Brands We Love
                      </Link>
                    </div>
                  </div>
                  <div className="collection-item-circle hover-img">
                    <Link href="/shop" className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="images/demo/D1.png"
                        src="images/demo/D1.png"
                        alt="collection-img"
                      />
                    </Link>
                    <div className="collection-content text-center">
                      <Link href="/shop" className="link title fw-6">
                        Trending
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="collection-item-circle hover-img">
                  <div className="has-saleoff-wrap position-relative">
                    <Link href="/shop" className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="images/demo/d3.png"
                        src="images/demo/d3.png"
                        alt="collection-img"
                      />
                    </Link>
                    <div className="sale-off fw-5">30% off</div>
                  </div>
                  <div className="collection-content text-center">
                    <Link href="/shop" className="link title fw-6">
                      Sale
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /categories */}

      {/* slider */}

      <div className="tf-slideshow slider-home-2 slider-effect-fade position-relative">
        <div
          dir="ltr"
          className="swiper tf-sw-slideshow"
          data-preview={1}
          data-tablet={1}
          data-mobile={1}
          data-centered="false"
          data-space={0}
          data-loop="true"
          data-auto-play="true"
          data-delay={2000}
          data-speed={1000}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="wrap-slider">
                <img
                  className="lazyload"
                  data-src="images/demo/banner1.png"
                  src="images/demo/banner1.png"
                  alt="jewerly-slideshow"
                  loading="lazy"
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 text-white heading font-poppins fw-8">
                      SALON QUALITY RESULTS
                    </h1>
                    <div className="fade-item fade-item-2">
                      <a
                        href="/shop"
                        className="font-poppins tf-btn btn-outline-light rounded-0 fw-6 fs-14 link justify-content-center letter-spacing-2 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="wrap-slider">
                <img
                  className="lazyload"
                  data-src="images/demo/banner2.png"
                  src="images/demo/banner2.png"
                  alt="jewerly-slideshow"
                  loading="lazy"
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 text-white heading font-poppins fw-8">
                      BOOK YOUR ULTIMATE HAIR TRANSFORMATION
                    </h1>
                    <div className="fade-item fade-item-2">
                      <a
                        href="/shop"
                        className="font-poppins tf-btn btn-outline-light rounded-0 fw-6 fs-14 link justify-content-center letter-spacing-2 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="wrap-slider">
                <img
                  className="lazyload"
                  data-src="images/demo/banner2.png"
                  src="images/demo/banner2.png"
                  alt="jewerly-slideshow"
                  loading="lazy"
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 text-white heading font-poppins fw-8">
                      EXPLORE OUR EXCLUSIVE RANGE TOP TIER HAIR CARE TOOLS AND
                      PRODUCTS
                    </h1>
                    <div className="fade-item fade-item-2">
                      <a
                        href="/shop"
                        className="font-poppins tf-btn btn-outline-light rounded-0 fw-6 fs-14 link justify-content-center letter-spacing-2 wow fadeInUp"
                        data-wow-delay="0s"
                      >
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-pagination sw-absolute-3">
          <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center" />
        </div>
      </div>
      {/* /slider */}
      {/* Categories */}
      <section className="flat-spacing-18 wow fadeInUp" data-wow-delay="0s">
        <div className="container">
          <div className="tf-grid-layout-v2 flat-animate-tab">
            <ul className="widget-tab-4 rounded-0 scroll-snap" role="tablist">
              <li className="nav-tab-item" role="presentation">
                <div
                  data-bs-target="#dresses"
                  className="active nav-tab-link"
                  data-bs-toggle="tab"
                >
                  <span className="text fw-8 font-poppins">
                    HAIR<span className="count">5</span>
                  </span>
                  <a href="#" className="icon icon-arrow1-top-left" />
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <div
                  data-bs-target="#tops"
                  className="nav-tab-link"
                  data-bs-toggle="tab"
                >
                  <span className="text fw-8 font-poppins">
                    STYLING<span className="count">5</span>
                  </span>
                  <a href="#" className="icon icon-arrow1-top-left" />
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <div
                  data-bs-target="#shirtsBlouses"
                  className="nav-tab-link"
                  data-bs-toggle="tab"
                >
                  <span className="text fw-8 font-poppins">
                    COLOUR<span className="count">5</span>
                  </span>
                  <a href="#" className="icon icon-arrow1-top-left" />
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <div
                  data-bs-target="#pants"
                  className="nav-tab-link"
                  data-bs-toggle="tab"
                >
                  <span className="text fw-8 font-poppins">
                    EXTENSIONS<span className="count">5</span>
                  </span>
                  <a href="#" className="icon icon-arrow1-top-left" />
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <div
                  data-bs-target="#cardigans"
                  className="nav-tab-link"
                  data-bs-toggle="tab"
                >
                  <span className="text fw-8 font-poppins">
                    HAIR TREATMENT<span className="count">5</span>
                  </span>
                  <a href="#" className="icon icon-arrow1-top-left" />
                </div>
              </li>
              <li className="nav-tab-item" role="presentation">
                <div
                  data-bs-target="#blazers"
                  className="nav-tab-link"
                  data-bs-toggle="tab"
                >
                  <span className="text fw-8 font-poppins">
                    WEAVE ON<span className="count">5</span>
                  </span>
                  <a href="#" className="icon icon-arrow1-top-left" />
                </div>
              </li>
            </ul>
            <div className="scroll-process d-md-none" id="scroll-process">
              <div className="value-process" />
            </div>
            <div className="tab-content">
              <div
                className="tab-pane active show"
                id="dresses"
                role="tabpanel"
              >
                <a href="#" className="fullwidth o-hidden">
                  <img
                    className="lazyload"
                    data-src="images/demo/hair.png"
                    src="images/demo/hair.png"
                    alt="image-shop"
                  />
                </a>
              </div>
              <div className="tab-pane" id="tops" role="tabpanel">
                <a href="#" className="fullwidth o-hidden">
                  <img
                    className="lazyload"
                    data-src="images/demo/styling.png"
                    src="images/demo/styling.png"
                    alt="image-shop"
                  />
                </a>
              </div>
              <div className="tab-pane" id="shirtsBlouses" role="tabpanel">
                <a href="#" className="fullwidth o-hidden">
                  <img
                    className="lazyload"
                    data-src="images/demo/color.png"
                    src="images/demo/color.png"
                    alt="image-shop"
                  />
                </a>
              </div>
              <div className="tab-pane" id="pants" role="tabpanel">
                <a href="#" className="fullwidth o-hidden">
                  <img
                    className="lazyload"
                    data-src="images/demo/extension.png"
                    src="images/demo/extension.png"
                    alt="image-shop"
                  />
                </a>
              </div>
              <div className="tab-pane" id="cardigans" role="tabpanel">
                <a href="#" className="fullwidth o-hidden">
                  <img
                    className="lazyload"
                    data-src="images/demo/treatment.png"
                    src="images/demo/treatment.png"
                    alt="image-shop"
                  />
                </a>
              </div>
              <div className="tab-pane" id="blazers" role="tabpanel">
                <a href="#" className="fullwidth o-hidden">
                  <img
                    className="lazyload"
                    data-src="images/demo/WEAVE.png"
                    src="images/demo/WEAVE.png"
                    alt="image-shop"
                  />
                </a>
              </div>
              <div className="tab-pane" id="overalls" role="tabpanel">
                <a href="#" className="fullwidth o-hidden">
                  <img
                    className="lazyload"
                    data-src="images/collections/jewerly-7.jpg"
                    src="images/collections/jewerly-7.jpg"
                    alt="image-shop"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Categories */}


      {/* Product */}
      <section className="flat-spacing-18 bg_brown-3">
        <div className="container">
          <div
            className="flat-title wow fadeInUp title-upper"
            data-wow-delay="0s"
          >
            <span className="title fw-8 font-poppins text-white">
              SHOP
            </span>
            <div className="d-flex gap-16 align-items-center box-pagi-arr">
              <div className="nav-sw-arrow nav-next-slider type-white nav-next-product">
                <span className="icon icon-arrow1-left" />
              </div>
              <a
                href="/shop"
                className="tf-btn btn-line fs-12 fw-6 font-poppins btn-line-light"
              >
                VIEW ALL
              </a>
              <div className="nav-sw-arrow nav-prev-slider type-white nav-prev-product">
                <span className="icon icon-arrow1-right" />
              </div>
            </div>
          </div>
          <div className="hover-sw-nav hover-sw-2">
            <div
              dir="ltr"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 wrap"
            >
              {products &&
                products?.map((product) => {
                  return (
                    <div className="col-span-1 m-3" key={product._id}>
                      <div className=" rounded-0 ">
                        <a href="#" className="product-img ">
                          <img
                            className="lazyload img-product rounded-md"
                            src={urlFor(product.image).url()}
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn absolute-2">
                          <button
                            className="box-icon quick-add tf-btn-loading"
                            onClick={() => {
                              addToCart({
                                id: product._id,
                                name: product.name,
                                price: product.price,
                                image: urlFor(product.image).url(),
                                quantity: 1,
                              });
                              setRefireEffect((prev) => !prev);
                            }}
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Add to cart</span>
                          </button>
                          <a
                            href="#"
                            className="box-icon wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                           
                            <span className="icon icon-check" />
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a
                          href="#"
                          className="title link font-poppins text-white text-xl font-semibold"
                        >
                          {product?.name}
                        </a>
                        <p className="py-1 text-lg text-gray-200">
                          {product?.description}
                        </p>
                        <span className="price font-poppins text-lg text-white">
                          £{product?.price}
                        </span>
                        {
                        
                       
                           
                            }
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </section>
      {/* /Product */}



      {/* Collection */}
      <section className="flat-spacing-12 pb_0">
        <div className="container">
          <div
            className="flat-title title-upper wow fadeInUp"
            data-wow-delay="0s"
          >
            <span className="title fw-8 font-poppins">OUR SERVICES</span>
            <p className="sub-title font-poppins text_black-2">
              We specialise in ALL hair types – that includes European and Afro
              hair, and believe in maintaining the integrity of your hair as
              well as keeping it healthy.
            </p>
          </div>
          <div className="masonry-layout-v2">
            <div
              className="item-1 collection-item-v5 hover-img wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <a href="#" className="collection-image img-style">
                  <img
                    className="lazyload"
                    data-src="images/collections/hair.png"
                    src="images/collections/hair.png"
                    alt="collection-img"
                  />
                </a>
                <div className="collection-content">
                  <a href="#" className="collection-title">
                    <span>HAIR</span>
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="item-2 collection-item-v5 hover-img wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <a href="#" className="collection-image img-style">
                  <img
                    className="lazyload"
                    data-src="images/collections/wash.png"
                    src="images/collections/wash.png"
                    alt="collection-img"
                  />
                </a>
                <div className="collection-content">
                  <a href="#" className="collection-title">
                    <span>WASH &amp; SET</span>
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="item-3 collection-item-v5 hover-img wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <a href="#" className="collection-image img-style">
                  <img
                    className="lazyload"
                    data-src="images/collections/TWIST.png"
                    src="images/collections/TWIST.png"
                    alt="collection-img"
                  />
                </a>
                <div className="collection-content">
                  <a href="#" className="collection-title">
                    <span>TWIST</span>
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="item-4 collection-item-v5 hover-img wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <a href="#" className="collection-image img-style">
                  <img
                    className="lazyload"
                    data-src="images/collections/CORN.png"
                    src="images/collections/CORN.png"
                    alt="collection-img"
                  />
                </a>
                <div className="collection-content">
                  <a href="#" className="collection-title">
                    <span>CORN ROW</span>
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="item-5 collection-item-v5 hover-img wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <a href="#" className="collection-image img-style">
                  <img
                    className="lazyload"
                    data-src="images/collections/PONY.png"
                    src="images/collections/PONY.png"
                    alt="collection-img"
                  />
                </a>
                <div className="collection-content">
                  <a href="#" className="collection-title">
                    <span>PONY TAIL</span>
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="item-6 collection-item-v5 hover-img wow fadeInUp"
              data-wow-delay="0s"
            >
              <div className="collection-inner">
                <a href="#" className="collection-image img-style">
                  <img
                    className="lazyload"
                    data-src="images/collections/wigs.png"
                    src="images/collections/wigs.png"
                    alt="collection-img"
                  />
                </a>
                <div className="collection-content">
                  <a href="#" className="collection-title">
                    <span>WIGS</span>
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Collection */}
      {/* Marquee */}
      <div className="tf-marquee marquee-lg style-2 not-hover">
        <div className="wrap-marquee">
          <div className="marquee-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={43}
              viewBox="0 0 40 43"
              fill="none"
            >
              <path
                d="M39.3055 20.7282C34.9409 20.7138 30.3593 19.8216 26.911 16.9761C24.0125 14.584 22.2908 11.1888 21.4565 7.57174C20.9356 5.31468 20.7475 3.00458 20.762 0.694478C20.762 0.212202 20.3762 0 20 0C19.6238 0 19.238 0.212202 19.238 0.694478C19.2573 4.63468 18.7027 8.70991 16.8652 12.2498C15.1145 15.6209 12.2305 18.1722 8.65686 19.4695C6.10562 20.3955 3.39523 20.7234 0.694478 20.7331C0.212202 20.7331 0 21.1237 0 21.4999C0 21.8761 0.212202 22.2667 0.694478 22.2667C5.05908 22.2812 9.6407 23.1734 13.089 26.0188C15.9875 28.4109 17.7092 31.8061 18.5435 35.4232C19.0644 37.6802 19.2476 39.9904 19.238 42.3005C19.238 42.7827 19.6238 42.9949 20 42.9949C20.3762 42.9949 20.762 42.7827 20.762 42.3005C20.7427 38.3603 21.2973 34.285 23.1348 30.7451C24.8855 27.374 27.7695 24.8228 31.3431 23.5254C33.8944 22.5995 36.6048 22.2715 39.3055 22.2619C39.7878 22.2619 40 21.8712 40 21.4951C40 21.1189 39.7878 20.7282 39.3055 20.7282ZM26.0381 24.8662C22.8985 27.3885 20.9838 31.0924 20.0772 34.965C20.0482 35.0808 20.0289 35.2014 20 35.3171C19.5901 33.4555 18.9727 31.647 18.0854 29.9542C16.1659 26.2889 12.9829 23.5785 9.1102 22.1558C8.37714 21.8857 7.62479 21.6687 6.86279 21.4902C9.42368 20.8777 11.8544 19.8119 13.9571 18.1239C17.0967 15.6016 19.0113 11.8978 19.918 8.02508C19.947 7.90933 19.9662 7.78876 19.9952 7.67302C20.4051 9.5346 21.0224 11.3431 21.9098 13.0359C23.8293 16.7012 27.0123 19.4116 30.885 20.8343C31.618 21.1044 32.3704 21.3214 33.1324 21.4999C30.5715 22.1172 28.1408 23.1782 26.0381 24.8662Z"
                fill="black"
              />
            </svg>
            <p className="fw-8 font-poppins">BUY NOW</p>
          </div>
          <div className="marquee-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={43}
              viewBox="0 0 40 43"
              fill="none"
            >
              <path
                d="M39.3055 20.7282C34.9409 20.7138 30.3593 19.8216 26.911 16.9761C24.0125 14.584 22.2908 11.1888 21.4565 7.57174C20.9356 5.31468 20.7475 3.00458 20.762 0.694478C20.762 0.212202 20.3762 0 20 0C19.6238 0 19.238 0.212202 19.238 0.694478C19.2573 4.63468 18.7027 8.70991 16.8652 12.2498C15.1145 15.6209 12.2305 18.1722 8.65686 19.4695C6.10562 20.3955 3.39523 20.7234 0.694478 20.7331C0.212202 20.7331 0 21.1237 0 21.4999C0 21.8761 0.212202 22.2667 0.694478 22.2667C5.05908 22.2812 9.6407 23.1734 13.089 26.0188C15.9875 28.4109 17.7092 31.8061 18.5435 35.4232C19.0644 37.6802 19.2476 39.9904 19.238 42.3005C19.238 42.7827 19.6238 42.9949 20 42.9949C20.3762 42.9949 20.762 42.7827 20.762 42.3005C20.7427 38.3603 21.2973 34.285 23.1348 30.7451C24.8855 27.374 27.7695 24.8228 31.3431 23.5254C33.8944 22.5995 36.6048 22.2715 39.3055 22.2619C39.7878 22.2619 40 21.8712 40 21.4951C40 21.1189 39.7878 20.7282 39.3055 20.7282ZM26.0381 24.8662C22.8985 27.3885 20.9838 31.0924 20.0772 34.965C20.0482 35.0808 20.0289 35.2014 20 35.3171C19.5901 33.4555 18.9727 31.647 18.0854 29.9542C16.1659 26.2889 12.9829 23.5785 9.1102 22.1558C8.37714 21.8857 7.62479 21.6687 6.86279 21.4902C9.42368 20.8777 11.8544 19.8119 13.9571 18.1239C17.0967 15.6016 19.0113 11.8978 19.918 8.02508C19.947 7.90933 19.9662 7.78876 19.9952 7.67302C20.4051 9.5346 21.0224 11.3431 21.9098 13.0359C23.8293 16.7012 27.0123 19.4116 30.885 20.8343C31.618 21.1044 32.3704 21.3214 33.1324 21.4999C30.5715 22.1172 28.1408 23.1782 26.0381 24.8662Z"
                fill="black"
              />
            </svg>
            <p className="fw-8 text-highlight font-poppins">
              FREE UK DELIVERY AND RETURNS ON ALL ORDERS
            </p>
          </div>
          <div className="marquee-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={43}
              viewBox="0 0 40 43"
              fill="none"
            >
              <path
                d="M39.3055 20.7282C34.9409 20.7138 30.3593 19.8216 26.911 16.9761C24.0125 14.584 22.2908 11.1888 21.4565 7.57174C20.9356 5.31468 20.7475 3.00458 20.762 0.694478C20.762 0.212202 20.3762 0 20 0C19.6238 0 19.238 0.212202 19.238 0.694478C19.2573 4.63468 18.7027 8.70991 16.8652 12.2498C15.1145 15.6209 12.2305 18.1722 8.65686 19.4695C6.10562 20.3955 3.39523 20.7234 0.694478 20.7331C0.212202 20.7331 0 21.1237 0 21.4999C0 21.8761 0.212202 22.2667 0.694478 22.2667C5.05908 22.2812 9.6407 23.1734 13.089 26.0188C15.9875 28.4109 17.7092 31.8061 18.5435 35.4232C19.0644 37.6802 19.2476 39.9904 19.238 42.3005C19.238 42.7827 19.6238 42.9949 20 42.9949C20.3762 42.9949 20.762 42.7827 20.762 42.3005C20.7427 38.3603 21.2973 34.285 23.1348 30.7451C24.8855 27.374 27.7695 24.8228 31.3431 23.5254C33.8944 22.5995 36.6048 22.2715 39.3055 22.2619C39.7878 22.2619 40 21.8712 40 21.4951C40 21.1189 39.7878 20.7282 39.3055 20.7282ZM26.0381 24.8662C22.8985 27.3885 20.9838 31.0924 20.0772 34.965C20.0482 35.0808 20.0289 35.2014 20 35.3171C19.5901 33.4555 18.9727 31.647 18.0854 29.9542C16.1659 26.2889 12.9829 23.5785 9.1102 22.1558C8.37714 21.8857 7.62479 21.6687 6.86279 21.4902C9.42368 20.8777 11.8544 19.8119 13.9571 18.1239C17.0967 15.6016 19.0113 11.8978 19.918 8.02508C19.947 7.90933 19.9662 7.78876 19.9952 7.67302C20.4051 9.5346 21.0224 11.3431 21.9098 13.0359C23.8293 16.7012 27.0123 19.4116 30.885 20.8343C31.618 21.1044 32.3704 21.3214 33.1324 21.4999C30.5715 22.1172 28.1408 23.1782 26.0381 24.8662Z"
                fill="black"
              />
            </svg>
            <p className="fw-8 font-poppins">BUY NOW</p>
          </div>
        </div>
      </div>
      {/* /Marquee */}
      {/* Banner men collection */}
      <div className="tf-slideshow slider-home-2 slider-effect-fade position-relative">
        <div
          dir="ltr"
          className="swiper tf-sw-slideshow"
          data-preview={1}
          data-tablet={1}
          data-mobile={1}
          data-centered="false"
          data-space={0}
          data-loop="true"
          data-auto-play="true"
          data-delay={2000}
          data-speed={1000}
        >
          <section className="banner-collection-men-wrap">
            <a href="#" className="img-wrap">
              <img
                className="lazyload"
                data-src="https://t4.ftcdn.net/jpg/00/63/68/69/360_F_63686989_fh5cD2zSoW3cEfyQM6vtb6PsGnOR6c5c.jpg"
                src="https://t4.ftcdn.net/jpg/00/63/68/69/360_F_63686989_fh5cD2zSoW3cEfyQM6vtb6PsGnOR6c5c.jpg"
                alt="fashion-slideshow"
              />
            </a>
            <div className="box-content">
              <div className="container">
                <a href="/shop" className="card-box">
                  <h3 className="subheading font-poppins fw-7"> </h3>
                  <h3 className="heading font-poppins fw-8">SUMMER APPROVED</h3>
                  <p className="text">Lounge in style with </p>
                  <div className="wow fadeInUp" data-wow-delay="0s">
                    <button className="font-poppins fw-7 tf-btn style-2 btn-fill rounded-0 animate-hover-btn">
                      <span>SHOP COLLECTIONS</span>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </section>
          {/* /Banner men collection */}
          <section className="flat-spacing-12">
            <div className="container">
              <div className="row align-items-center flex-md-row-reverse">
                <div className="col-md-6">
                  <div className="box-video-wrap">
                    <video
                      src="images/slider/downloadd.mp4"
                      autoPlay={true}
                      muted={true}
                      playsInline={true}
                      loop={true}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <p className="sub-title font-poppins fw-7 fs-14" />
                    <span className="title fw-8 font-poppins">OUR GALLERY</span>
                  </div>
                  <div className="position-relative wrap-carousel style-2">
                    <div className="nav-sw nav-next-slider nav-next-sell-1">
                      <span className="icon icon-arrow-left" />
                    </div>
                    <div
                      dir="ltr"
                      className="swiper tf-sw-product-sell-1 wrap-sw-over"
                    >
                      <div className="flex flex-row wrap gap-3 overflow-x-auto">
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/00.png"
                                  src="images/products/00.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/00.png"
                                  src="images/products/00.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/5a.png"
                                  src="images/products/5a.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/5a.png"
                                  src="images/products/5a.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/6a.png"
                                  src="images/products/6a.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/6a.png"
                                  src="images/products/6a.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/7a.png"
                                  src="images/products/7a.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/7a.png"
                                  src="images/products/7a.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/8a.png"
                                  src="images/products/8a.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/8a.png"
                                  src="images/products/8a.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/1.png"
                                  src="images/products/1.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/1.png"
                                  src="images/products/1.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/2.png"
                                  src="images/products/2.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/2.png"
                                  src="images/products/2.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/3.png"
                                  src="images/products/3.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/3.png"
                                  src="images/products/3.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/4.png"
                                  src="images/products/4.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/4.png"
                                  src="images/products/4.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/9a.png"
                                  src="images/products/9a.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/9a.png"
                                  src="images/products/9a.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/10a.png"
                                  src="images/products/10a.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/10a.png"
                                  src="images/products/10a.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/11a.png"
                                  src="images/products/11a.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/11a.png"
                                  src="images/products/11a.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a
                                href="product-detail.html"
                                className="product-img "
                              >
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/12.png"
                                  src="images/products/12.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/12.png"
                                  src="images/products/12.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/13.png"
                                  src="images/products/13.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/13.png"
                                  src="images/products/13.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/14.png"
                                  src="images/products/14.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/14.png"
                                  src="images/products/14.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/16.png"
                                  src="images/products/16.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/16.png"
                                  src="images/products/16.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/17.png"
                                  src="images/products/17.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/17.png"
                                  src="images/products/17.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/19.png"
                                  src="images/products/19.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/19.png"
                                  src="images/products/19.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/20.png"
                                  src="images/products/20.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/20.png"
                                  src="images/products/20.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/21.png"
                                  src="images/products/21.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/21.png"
                                  src="images/products/21.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/22.png"
                                  src="images/products/22.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/22.png"
                                  src="images/products/22.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/26.png"
                                  src="images/products/26.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/26.png"
                                  src="images/products/26.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/27.png"
                                  src="images/products/27.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/27.png"
                                  src="images/products/27.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/28.png"
                                  src="images/products/28.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/28.png"
                                  src="images/products/28.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/29.png"
                                  src="images/products/29.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/29.png"
                                  src="images/products/29.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/30.png"
                                  src="images/products/30.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/30.png"
                                  src="images/products/30.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/31.png"
                                  src="images/products/31.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/31.png"
                                  src="images/products/31.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/32.png"
                                  src="images/products/32.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/32.png"
                                  src="images/products/32.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/33.png"
                                  src="images/products/33.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/33.png"
                                  src="images/products/33.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/34.png"
                                  src="images/products/34.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/34.png"
                                  src="images/products/34.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/35.png"
                                  src="images/products/35.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/35.png"
                                  src="images/products/35.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/36.png"
                                  src="images/products/36.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/36.png"
                                  src="images/products/36.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/37.png"
                                  src="images/products/37.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/37.png"
                                  src="images/products/37.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/38.png"
                                  src="images/products/38.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/38.png"
                                  src="images/products/38.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide ">
                          <div className="card-product">
                            <div className="card-product-wrapper rounded-0">
                              <a href="#" className="product-img ">
                                <img
                                  className="lazyload img-product"
                                  data-src="images/products/39.png"
                                  src="images/products/39.png"
                                  alt="image-product"
                                />
                                <img
                                  className="lazyload img-hover"
                                  data-src="images/products/39.png"
                                  src="images/products/39.png"
                                  alt="image-product"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* choose us */}
          <section className="flat-spacing-23 bg_brown-4">
            <div className="container-full">
              <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                <span className="title fw-8 font-poppins fs-28">
                  REVIEW FROM OUR CUSTOMERS
                </span>
                <p className="sub-title font-poppins fs-14 text_black-2" />
              </div>
              <div className="container">
                <div className="wrap-carousel">
                  <div dir="ltr" className="tf-sw-testimonial mb-[60px]">
                    <div className="flex flex-row wrap gap-3 overflow-x-auto">
                      <div className="w-[350px] height-auto">
                        <div
                          className="testimonial-item h-100 font-poppins style-box wow fadeInUp"
                          data-wow-delay="0s"
                        >
                          <div className="author">
                            <div className="name">Veronica</div>
                            <div className="metas">
                              <i className="icon-check" /> Verify customer
                            </div>
                          </div>
                          <div className="rating color-black">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                          </div>
                          <div className="heading" />
                          <div className="text">
                            &quot;I am beyond satisfied with my experience&quot;
                          </div>
                        </div>
                      </div>
                      <div className="w-[350px] height-auto">
                        <div
                          className="testimonial-item h-100 font-poppins style-box wow fadeInUp"
                          data-wow-delay=".1s"
                        >
                          <div className="author">
                            <div className="name">Michelle</div>
                            <div className="metas">
                              <i className="icon-check" /> Verify customer
                            </div>
                          </div>
                          <div className="rating color-black">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                          </div>
                          <div className="text">
                            &quot;The attention to detail at this salon is
                            incredible!&quot;
                          </div>
                        </div>
                      </div>
                      <div className="w-[350px] height-auto">
                        <div
                          className="testimonial-item h-100 font-poppins style-box wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          <div className="author">
                            <div className="name">Feliter</div>
                            <div className="metas">
                              <i className="icon-check" /> Verify customer
                            </div>
                          </div>
                          <div className="rating color-black">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                          </div>
                          <div className="heading" />
                          <div className="text">
                            &quot;They truly understand my hair!&quot;
                          </div>
                        </div>
                      </div>
                      <div className="w-[350px] height-auto">
                        <div
                          className="testimonial-item h-100 font-poppins style-box wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          <div className="author">
                            <div className="name">Ruth</div>
                            <div className="metas">
                              <i className="icon-check" /> Verify customer
                            </div>
                          </div>
                          <div className="rating color-black">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                          </div>
                          <div className="heading" />
                          <div className="text">
                            &quot;I always leave feeling confident and
                            beautiful.&quot;
                          </div>
                        </div>
                      </div>
                      <div className="w-[350px] height-auto">
                        <div
                          className="testimonial-item h-100 font-poppins style-box wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          <div className="author">
                            <div className="name">Michael</div>
                            <div className="metas">
                              <i className="icon-check" /> Verify customer
                            </div>
                          </div>
                          <div className="rating color-black">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                          </div>
                          <div className="heading" />
                          <div className="text">
                            &quot;I always leave feeling confident and
                            beautiful.&quot;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-dots medium  d-flex style-2 sw-pagination-testimonial justify-content-center" />
            </div>
          </section>
        </div>
      </div>
      {/* /choose us */}


      {/* Icon box */}
      <section
        className="flat-spacing-1 flat-iconbox wow fadeInUp"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="wrap-carousel wrap-mobile">
            <div
              dir="ltr"
              className="swiper tf-sw-mobile"
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper wrap-iconbox">
                <div className="swiper-slide">
                  <div className="tf-icon-box style-row">
                    <div className="icon">
                      <i className="icon-shipping" />
                    </div>
                    <div className="content font-poppins">
                      <div className="title fw-8 text-uppercase fs-14">
                        Free Shipping
                      </div>
                      <p>Free shipping over order &nbsp;£200</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-row">
                    <div className="icon">
                      <i className="icon-payment fs-22" />
                    </div>
                    <div className="content font-poppins">
                      <div className="title fw-8 text-uppercase fs-14">
                        Flexible Payment
                      </div>
                      <p>Pay with Multiple Credit Cards</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-row">
                    <div className="icon">
                      <i className="icon-return fs-20" />
                    </div>
                    <div className="content font-poppins">
                      <div className="title fw-8 text-uppercase fs-14">
                        14 Day Returns
                      </div>
                      <p>Within 30 days for an exchange</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-row">
                    <div className="icon">
                      <i className="icon-suport" />
                    </div>
                    <div className="content font-poppins">
                      <div className="title fw-8 text-uppercase fs-14">
                        Premium Support
                      </div>
                      <p>
                        Outstanding Customer Service Agent to attend to you{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sw-dots style-2 sw-pagination-mb justify-content-center" />
          </div>
        </div>
      </section>
      {/* /Icon box */}

      
      {/* Footer */}
      <footer
        id="footer"
        className="footer font-poppins border-container has-all-border has-border-full md-pb-70"
      >
        <div className="footer-wrap">
          <div className="footer-body">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer-col footer-col-1 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6 className="fs-14 text-uppercase fw-8">Help</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6 className="fs-14 text-uppercase fw-8">Help</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      <li>
                        <a href="#" className="footer-menu_item">
                          Privacy Policy
                        </a>
                      </li>
                     
                    
                      <li>
                        <a href="#" className="footer-menu_item">
                          Shipping
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-menu_item">
                          Terms &amp; Conditions
                        </a>
                      </li>
                     
                   
                     
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer-col footer-col-2 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6 className="fs-14 text-uppercase fw-8">About us</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6 className="fs-14 text-uppercase fw-8">About us</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      <li>
                        <a href="/about" className="footer-menu_item">
                          Our Company
                        </a>
                      </li>
                      <li>
                        <a href="https://maps.app.goo.gl/VrRgCF2T3eR3fGtt9" className="footer-menu_item">
                          Visit Our Store
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="footer-menu_item">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="account.jsx" className="footer-menu_item">
                          Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer-col footer-col-3 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6 className="fs-14 text-uppercase fw-8">Find us</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6 className="fs-14 text-uppercase fw-8">Find us</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      <li>
                        <div className="footer-menu_item">
                          Find a location nearestyou.
                        </div>
                      </li>
                      <li>
                        <a
                          href="https://maps.app.goo.gl/VrRgCF2T3eR3fGtt9"
                          className="footer-menu_item text-decoration-underline"
                        >
                          See Our Store
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-menu_item">
                          (07) 7490442544
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-menu_item">
                          maureen@uniquehair-studio.com
                        </a>
                      </li>
                      <li>
                        <ul className="tf-social-icon d-flex gap-20 style-default">
                          <li>
                            <a
                              href="https://www.facebook.com/share/1FHoVx1U3U/"
                              className="box-icon round social-facebook border-line-black"
                            >
                              <i className="icon fs-14 icon-fb" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://x.com/unique_exprhair"
                              className="box-icon round social-twiter border-line-black"
                            >
                              <i className="icon fs-14 icon-Icon-x" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/unique.expressions.hair?igsh=MTJzc2Y1NzJrNnh0cg=="
                              className="box-icon round social-instagram border-line-black"
                            >
                              <i className="icon fs-14 icon-instagram" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.tiktok.com/@uniqueexpressionshair?_t=ZG-8t26WfK9692&_r=1"
                              className="box-icon round social-tiktok border-line-black"
                            >
                              <i className="icon fs-14 icon-tiktok" />
                            </a>
                          </li>
                         
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer-newsletter footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6 className="fs-14 text-uppercase fw-8">
                        Sign Up for our Newsletter
                      </h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6 className="fs-14 text-uppercase fw-8">
                        Sign Up for our Newsletter
                      </h6>
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
                              defaultValue=""
                              aria-required="true"
                            />
                          </fieldset>
                          <div className="button-submit">
                            <button
                              id="subscribe-button"
                              className="tf-btn btn-sm radius-3 btn-fill btn-icon animate--hover-light_skew"
                              type="submit"
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
                            <option data-thumbnail="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png?20190917170937">
                              GBD £ | United Kingdom
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
                      © 2025 Unique Expressions Hair Studio. All Rights Reserved
                    </div>
                    <div className="tf-payment">
                      <img src="images/demo/visa.png" alt="" />
                      <img src="images/demo/img-1.png" alt="" />
                      <img src="images/demo/img-2.png" alt="" />
                      <img src="images/demo/img-3.png" alt="" />
                      <img src="images/demo/img-4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* /Footer */}


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
          <a href="#shoppingCart" data-bs-toggle="modal">
            <div className="toolbar-icon">
              <i className="icon-bag" />
              <div className="toolbar-count">{getTotalQuantity()}</div>
            </div>
            <div className="toolbar-label">Cart</div>
          </a>
        </div>

        <div className="toolbar-item">
          <div className="toolbar-icon">
            <SignedOut>
              <SignInButton>
                <div className="flex flex-col justify-center items-center mt-3 cursor-pointer">
                  <div className="toolbar-icon">
                    <i className="icon icon-account" />
                  </div>
                  <div className="toolbar-label">Account</div>
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/account">
                <div className="toolbar-icon">
                  <i className="icon icon-account" />
                </div>
                <div className="toolbar-label">Account</div>
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
      {/* /toolbar-bottom */}


      
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
                  href="/"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-one"
                >
                 
                  <span className="" />
                </a>
                <div id="dropdown-menu-one" className="collapse">
                  <ul className="sub-nav-menu">
                    <li>
                      <a href="/page" className="sub-nav-link" />
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
                  <span>Wigs</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="" className="">
                  <ul className="" id="">
                   
                    <li>
                      <a
                        href="/shop"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-one"
                      >
                        <span>HD  Colored & Closure Wigs</span>
                      </a>
                    </li>
                   
                    <li>
                      <a
                        href="/shop"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-one"
                      >
                        <span>HD Curly & Frontal Wigs</span>
                      </a>
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
                  <span>Bundles</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="" className="">
                  <ul className="" id="">
                    <li>
                      <a
                        href="/shop"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded=""
                        aria-controls="sub-product-one"
                      >
                        <span>Virgin Hairs Bundle Sets</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded=""
                        aria-controls="sub-product-one"
                      >
                        <span>Raw Hairs Bundle Sets</span>
                      </a>
                    </li>
                   
                    
                    <li>
                      <a
                        href="#"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded=""
                        aria-controls="sub-product-one"
                      >
                        <span>Frontal with Bundle Combo</span>
                      </a>
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
                  <span>Frontal &amp; Closures</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="" className="">
                  <ul className="" id="">
                    <li>
                      <a
                        href="#"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-one"
                      >
                        <span>HD Frontals & HD Closures </span>
                      </a>
                    </li>
                      </ul>
                </div>
              </li>

              <div className="mb-notice"> </div>
                                        <ul className="mb-info">
                <li>
                  Address: 326 Barking Road, Plaistow,
                  <br /> London, E13 8HL (Inside Mr. T barber shop)
                </li>
                <li>
                  Email: <b>maureen@uniquehair-studio.com</b>
                </li>
                <li>
                  Phone: <b>(0) 7490442544</b>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <div className="bottom-bar-language">
            <div className="tf-currencies">
              <select className="image-select center style-default type-currencies">
                <option data-thumbnail="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png?20190917170937">
                  GBD £ | United Kingdom
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
      {/* /mobile menu */}


      {/* canvasSearch */}
      <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
        <div className="canvas-wrapper">
          <header className="tf-search-head">
            <div className="title fw-5">
              Search for products
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
                      <a href="/shop" className="">
                        Wigs
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="/shop" className="">
                        Bundles
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="/shop" className="">
                        Hair Treatment
                      </a>
                    </li>
                  </ul>
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
                <a href="/shop" className="tf-category-link mb-menu-link">
                  <div className="image">
                    <img src="images/demo/d3.png" alt="" />
                  </div>
                  <span>Wigs</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a href="/shop" className="tf-category-link mb-menu-link">
                  <div className="image">
                    <img src="images/demo/color.png" alt="" />
                  </div>
                  <span>Bundles</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <a href="/shop" className="tf-btn fw-5 btn-line">
            View all collection
            <i className="icon icon-arrow1-top-left" />
          </a>
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
              <form className="" action="#" acceptCharset="utf-8">
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
                      href="#"
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


      {/* shoppingCart */}
      <div
        className="modal fullRight fade modal-shopping-cart"
        id="shoppingCart"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="header">
              <div className="title fw-5">Shopping cart</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="wrap">
              <div className="tf-mini-cart-threshold">
                <div className="tf-progress-bar">
                  <span style={{ width: "50%" }}>
                    <div className="progress-car">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={14}
                        viewBox="0 0 21 14"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"
                        />
                      </svg>
                    </div>
                  </span>
                </div>
                <div className="tf-progress-msg">
                  Buy <span className="price fw-6">£75.00</span> more to enjoy{" "}
                  <span className="fw-6">Free Shipping</span>
                </div>
              </div>
              <div className="tf-mini-cart-wrap">
                <div className="tf-mini-cart-main">
                  <div className="tf-mini-cart-sroll">
                    <div className="tf-mini-cart-items">
                      {cartItems.map((item) => {
                        return (
                          <div className="tf-mini-cart-item" key={item?.id}>
                            <div className="tf-mini-cart-image">
                              <img src={item?.image} alt="" />
                            </div>
                            <div className="tf-mini-cart-info">
                              {item?.name}
                              <div className="meta-variant"></div>
                              <div className="price fw-6">£{item?.price}</div>
                              <div className="tf-mini-cart-btns">
                                <div className="wg-quantity small flex items-center">
                                  <span
                                    className="btn-quantity minus-btn"
                                    onClick={() => {
                                      updateItemQuantity(item?.id, -1);

                                      setRefireEffect((prev) => !prev);
                                    }}
                                  >
                                    -
                                  </span>
                                  <span>{item?.quantity}</span>
                                  <span
                                    className="btn-quantity plus-btn"
                                    onClick={() => {
                                      updateItemQuantity(item?.id, 1);

                                      setRefireEffect((prev) => !prev);
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                                <div
                                  className="tf-mini-cart-remove cursor-pointer"
                                  onClick={() => {
                                    removeFromCart(item?.id);
                                    setRefireEffect((prev) => !prev);
                                  }}
                                >
                                  Remove
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="tf-mini-cart-bottom">
                        <div className="tf-mini-cart-tool">
                          <div className="tf-mini-cart-tool-btn btn-add-note">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={18}
                              viewBox="0 0 16 18"
                              fill="currentColor"
                            >
                              <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z" />
                              <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z" />
                            </svg>
                          </div>
                          <div className="tf-mini-cart-tool-btn btn-add-gift">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={17}
                              height={18}
                              viewBox="0 0 17 18"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.99566 2.73409C2.99566 0.55401 5.42538 -0.746668 7.23916 0.463462L8.50073 1.30516L9.7623 0.463462C11.5761 -0.746668 14.0058 0.55401 14.0058 2.73409V3.24744H14.8225C15.9633 3.24744 16.8881 4.17233 16.8881 5.31312V6.82566C16.8881 7.21396 16.5734 7.52873 16.1851 7.52873H15.8905V15.1877C15.8905 15.1905 15.8905 15.1933 15.8905 15.196C15.886 16.7454 14.6286 18 13.0782 18H3.92323C2.37003 18 1.11091 16.7409 1.11091 15.1877V7.52877H0.81636C0.42806 7.52877 0.113281 7.21399 0.113281 6.82569V5.31316C0.113281 4.17228 1.03812 3.24744 2.179 3.24744H2.99566V2.73409ZM4.40181 3.24744H7.79765V2.52647L6.45874 1.63317C5.57987 1.0468 4.40181 1.67677 4.40181 2.73409V3.24744ZM9.20381 2.52647V3.24744H12.5996V2.73409C12.5996 1.67677 11.4216 1.0468 10.5427 1.63317L9.20381 2.52647ZM2.179 4.6536C1.81472 4.6536 1.51944 4.94888 1.51944 5.31316V6.12261H5.73398L5.734 4.6536H2.179ZM5.73401 7.52877V13.9306C5.73401 14.1806 5.86682 14.4119 6.08281 14.5379C6.29879 14.6639 6.56545 14.6657 6.78312 14.5426L8.50073 13.5715L10.2183 14.5426C10.436 14.6657 10.7027 14.6639 10.9187 14.5379C11.1346 14.4119 11.2674 14.1806 11.2674 13.9306V7.52873H14.4844V15.1603C14.4844 15.1627 14.4843 15.1651 14.4843 15.1675V15.1877C14.4843 15.9643 13.8548 16.5938 13.0782 16.5938H3.92323C3.14663 16.5938 2.51707 15.9643 2.51707 15.1877V7.52877H5.73401ZM15.482 6.12258V5.31312C15.482 4.94891 15.1867 4.6536 14.8225 4.6536H11.2674V6.12258H15.482ZM9.86129 4.6536H7.14017V12.7254L8.15469 12.1518C8.36941 12.0304 8.63204 12.0304 8.84676 12.1518L9.86129 12.7254V4.6536Z"
                              />
                            </svg>
                          </div>
                          <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={26}
                              height={18}
                              viewBox="0 0 26 18"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0.811989C0 0.36354 0.36354 0 0.811989 0H15.4278C15.8763 0 16.2398 0.36354 16.2398 0.811989V3.10596H21.0144C23.6241 3.10596 25.8643 5.05894 25.8643 7.61523V14.6414C25.8643 15.0899 25.5007 15.4534 25.0523 15.4534H23.545C23.2139 16.9115 21.9098 18 20.3514 18C18.7931 18 17.4889 16.9115 17.1578 15.4534H8.69534C8.36423 16.9115 7.0601 18 5.50175 18C3.9434 18 2.63927 16.9115 2.30815 15.4534H0.811989C0.36354 15.4534 0 15.0899 0 14.6414V0.811989ZM2.35089 13.8294C2.74052 12.4562 4.00366 11.4503 5.50175 11.4503C6.99983 11.4503 8.26298 12.4562 8.6526 13.8294H14.6158V1.62398H1.62398V13.8294H2.35089ZM16.2398 4.72994V7.95749H24.2403V7.61523C24.2403 6.08759 22.8649 4.72994 21.0144 4.72994H16.2398ZM24.2403 9.58147H16.2398V13.8294H17.2006C17.5902 12.4562 18.8533 11.4503 20.3514 11.4503C21.8495 11.4503 23.1126 12.4562 23.5023 13.8294H24.2403V9.58147ZM5.50175 13.0743C4.58999 13.0743 3.85087 13.8134 3.85087 14.7251C3.85087 15.6369 4.58999 16.376 5.50175 16.376C6.41351 16.376 7.15263 15.6369 7.15263 14.7251C7.15263 13.8134 6.41351 13.0743 5.50175 13.0743ZM20.3514 13.0743C19.4397 13.0743 18.7005 13.8134 18.7005 14.7251C18.7005 15.6369 19.4397 16.376 20.3514 16.376C21.2632 16.376 22.0023 15.6369 22.0023 14.7251C22.0023 13.8134 21.2632 13.0743 20.3514 13.0743Z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="tf-mini-cart-bottom-wrap">
                          <div className="tf-cart-totals-discounts">
                            <div className="tf-cart-total">Subtotal</div>
                            <div className="tf-totals-total-value fw-6">
                              £{getTotalPrice()}
                            </div>
                          </div>
                          <div className="tf-cart-tax">
                            Taxes and <a href="#">shipping</a> calculated at
                            checkout
                          </div>
                          <div className="tf-mini-cart-line" />
                          <div className="tf-cart-checkbox">
                            <div className="tf-checkbox-wrapp">
                              <input
                                className=""
                                type="checkbox"
                                id="agreeCart"
                                name="agree_checkbox"
                              />
                              <div>
                                <i className="icon-check" />
                              </div>
                            </div>
                            <label htmlFor="agreeCart">
                              I agree with the
                              <a href="#" title="Terms of Service">
                                terms and conditions
                              </a>
                            </label>
                          </div>
                          <div className="tf-mini-cart-view-checkout">
                            <form action={onCheckout} method="POST">
                              <button
                                type="submit"
                                className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                              >
                                Check out
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>

                      {/* <div className="tf-mini-cart-tool-openable add-note">
                        <div className="overplay tf-mini-cart-tool-close" />
                        <div className="tf-mini-cart-tool-content">
                          <label
                            htmlFor="Cart-note"
                            className="tf-mini-cart-tool-text"
                          >
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={18}
                                viewBox="0 0 16 18"
                                fill="currentColor"
                              >
                                <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z" />
                                <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z" />
                              </svg>
                            </div>
                            <span>Add Order Note</span>
                          </label>
                          <textarea
                            name="note"
                            id="Cart-note"
                            placeholder="How can we help you?"
                            defaultValue={""}
                          />
                          <div className="tf-cart-tool-btns justify-content-center">
                            <div className="tf-mini-cart-tool-primary text-center w-100 fw-6 tf-mini-cart-tool-close">
                              Close
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="tf-mini-cart-tool-openable estimate-shipping">
                        <div className="overplay tf-mini-cart-tool-close" />
                        <div className="tf-mini-cart-tool-content">
                          <div className="tf-mini-cart-tool-text">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={21}
                                height={15}
                                viewBox="0 0 21 15"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.441406 1.13155C0.441406 0.782753 0.724159 0.5 1.07295 0.5H12.4408C12.7896 0.5 13.0724 0.782753 13.0724 1.13155V2.91575H16.7859C18.8157 2.91575 20.5581 4.43473 20.5581 6.42296V11.8878C20.5581 12.2366 20.2753 12.5193 19.9265 12.5193H18.7542C18.4967 13.6534 17.4823 14.5 16.2703 14.5C15.0582 14.5 14.0439 13.6534 13.7864 12.5193H7.20445C6.94692 13.6534 5.93259 14.5 4.72054 14.5C3.50849 14.5 2.49417 13.6534 2.23664 12.5193H1.07295C0.724159 12.5193 0.441406 12.2366 0.441406 11.8878V1.13155ZM2.26988 11.2562C2.57292 10.1881 3.55537 9.40578 4.72054 9.40578C5.88572 9.40578 6.86817 10.1881 7.17121 11.2562H11.8093V1.76309H1.7045V11.2562H2.26988ZM13.0724 4.17884V6.68916H19.295V6.42296C19.295 5.2348 18.2252 4.17884 16.7859 4.17884H13.0724ZM19.295 7.95226H13.0724V11.2562H13.8196C14.1227 10.1881 15.1051 9.40578 16.2703 9.40578C17.4355 9.40578 18.4179 10.1881 18.7209 11.2562H19.295V7.95226ZM4.72054 10.6689C4.0114 10.6689 3.43652 11.2437 3.43652 11.9529C3.43652 12.662 4.0114 13.2369 4.72054 13.2369C5.42969 13.2369 6.00456 12.662 6.00456 11.9529C6.00456 11.2437 5.42969 10.6689 4.72054 10.6689ZM16.2703 10.6689C15.5611 10.6689 14.9863 11.2437 14.9863 11.9529C14.9863 12.662 15.5611 13.2369 16.2703 13.2369C16.9794 13.2369 17.5543 12.662 17.5543 11.9529C17.5543 11.2437 16.9794 10.6689 16.2703 10.6689Z"
                                />
                              </svg>
                            </div>
                            <span className="fw-6">Estimate Shipping</span>
                          </div>
                          <div className="field">
                            <p>Country</p>
                            <select
                              className="tf-select w-100"
                              id="ShippingCountry_CartDrawer-Form"
                              name="address[country]"
                              data-default=""
                            >
                              <option value="---" data-provinces="[]">
                                ---
                              </option>
                              <option
                                value="Australia"
                                data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]"
                              >
                                Australia
                              </option>
                              <option value="Austria" data-provinces="[]">
                                Austria
                              </option>
                              <option value="Belgium" data-provinces="[]">
                                Belgium
                              </option>
                              <option
                                value="Canada"
                                data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]"
                              >
                                Canada
                              </option>
                              <option
                                value="Czech Republic"
                                data-provinces="[]"
                              >
                                Czechia
                              </option>
                              <option value="Denmark" data-provinces="[]">
                                Denmark
                              </option>
                              <option value="Finland" data-provinces="[]">
                                Finland
                              </option>
                              <option value="France" data-provinces="[]">
                                France
                              </option>
                              <option value="Germany" data-provinces="[]">
                                Germany
                              </option>
                              <option
                                value="Hong Kong"
                                data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]"
                              >
                                Hong Kong SAR
                              </option>
                              <option
                                value="Ireland"
                                data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]"
                              >
                                Ireland
                              </option>
                              <option value="Israel" data-provinces="[]">
                                Israel
                              </option>
                              <option
                                value="Italy"
                                data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]"
                              >
                                Italy
                              </option>
                              <option
                                value="Japan"
                                data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]"
                              >
                                Japan
                              </option>
                              <option
                                value="Malaysia"
                                data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]"
                              >
                                Malaysia
                              </option>
                              <option value="Netherlands" data-provinces="[]">
                                Netherlands
                              </option>
                              <option
                                value="New Zealand"
                                data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','Hawke’s Bay'],['Manawatu-Wanganui','Manawatū-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]"
                              >
                                New Zealand
                              </option>
                              <option value="Norway" data-provinces="[]">
                                Norway
                              </option>
                              <option value="Poland" data-provinces="[]">
                                Poland
                              </option>
                              <option
                                value="Portugal"
                                data-provinces="[['Aveiro','Aveiro'],['Açores','Azores'],['Beja','Beja'],['Braga','Braga'],['Bragança','Bragança'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['Santarém','Santarém'],['Setúbal','Setúbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Évora','Évora']]"
                              >
                                Portugal
                              </option>
                              <option value="Singapore" data-provinces="[]">
                                Singapore
                              </option>
                              <option
                                value="South Korea"
                                data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]"
                              >
                                South Korea
                              </option>
                              <option
                                value="Spain"
                                data-provinces="[['A Coruña','A Coruña'],['Albacete','Albacete'],['Alicante','Alicante'],['Almería','Almería'],['Asturias','Asturias Province'],['Badajoz','Badajoz'],['Balears','Balears Province'],['Barcelona','Barcelona'],['Burgos','Burgos'],['Cantabria','Cantabria Province'],['Castellón','Castellón'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['Cáceres','Cáceres'],['Cádiz','Cádiz'],['Córdoba','Córdoba'],['Girona','Girona'],['Granada','Granada'],['Guadalajara','Guadalajara'],['Guipúzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['Jaén','Jaén'],['La Rioja','La Rioja Province'],['Las Palmas','Las Palmas'],['León','León'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Madrid Province'],['Melilla','Melilla'],['Murcia','Murcia'],['Málaga','Málaga'],['Navarra','Navarra'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanca','Salamanca'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Segovia','Segovia'],['Sevilla','Seville'],['Soria','Soria'],['Tarragona','Tarragona'],['Teruel','Teruel'],['Toledo','Toledo'],['Valencia','Valencia'],['Valladolid','Valladolid'],['Vizcaya','Biscay'],['Zamora','Zamora'],['Zaragoza','Zaragoza'],['Álava','Álava'],['Ávila','Ávila']]"
                              >
                                Spain
                              </option>
                              <option value="Sweden" data-provinces="[]">
                                Sweden
                              </option>
                              <option value="Switzerland" data-provinces="[]">
                                Switzerland
                              </option>
                              <option
                                value="United Arab Emirates"
                                data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]"
                              >
                                United Arab Emirates
                              </option>
                              <option
                                value="United Kingdom"
                                data-provinces="[['British Forces','British Forces'],['England','England'],['Northern Ireland','Northern Ireland'],['Scotland','Scotland'],['Wales','Wales']]"
                              >
                                United Kingdom
                              </option>
                              <option
                                value="United States"
                                data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['American Samoa','American Samoa'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Armed Forces Americas','Armed Forces Americas'],['Armed Forces Europe','Armed Forces Europe'],['Armed Forces Pacific','Armed Forces Pacific'],['California','California'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District of Columbia','Washington DC'],['Federated States of Micronesia','Micronesia'],['Florida','Florida'],['Georgia','Georgia'],['Guam','Guam'],['Hawaii','Hawaii'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiana','Louisiana'],['Maine','Maine'],['Marshall Islands','Marshall Islands'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['New Mexico','New Mexico'],['New York','New York'],['North Carolina','North Carolina'],['North Dakota','North Dakota'],['Northern Mariana Islands','Northern Mariana Islands'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvania','Pennsylvania'],['Puerto Rico','Puerto Rico'],['Rhode Island','Rhode Island'],['South Carolina','South Carolina'],['South Dakota','South Dakota'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Virgin Islands','U.S. Virgin Islands'],['Virginia','Virginia'],['Washington','Washington'],['West Virginia','West Virginia'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]"
                              >
                                United States
                              </option>
                              <option value="Vietnam" data-provinces="[]">
                                Vietnam
                              </option>
                            </select>
                          </div>
                          <div className="field">
                            <p>Zip code</p>
                            <input type="text" name="text" placeholder="" />
                          </div>
                          <div className="tf-cart-tool-btns">
                            <a
                              href="#"
                              className="tf-btn fw-6 justify-content-center btn-fill w-100 animate-hover-btn radius-3"
                            >
                              <span>Estimate</span>
                            </a>
                            <div className="tf-mini-cart-tool-primary text-center fw-6 w-100 tf-mini-cart-tool-close">
                              Cancel
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /shoppingCart */}

            {/* modal ask_question */}
            <div
              className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
              id="ask_question"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="header">
                    <div className="demo-title">Ask a question</div>
                    <span
                      className="icon-close icon-close-popup"
                      data-bs-dismiss="modal"
                    />
                  </div>
                  <div className="overflow-y-auto">
                    <form className="">
                      <fieldset className="">
                        <label htmlFor="">Name *</label>
                        <input
                          type="text"
                          placeholder=""
                          className=""
                          name="text"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required={true}
                        />
                      </fieldset>
                      <fieldset className="">
                        <label htmlFor="">Email *</label>
                        <input
                          type="email"
                          placeholder=""
                          className=""
                          name="text"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                        />
                      </fieldset>
                      <fieldset className="">
                        <label htmlFor="">Phone number</label>
                        <input
                          type="number"
                          placeholder=""
                          className=""
                          name="text"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required={true}
                        />
                      </fieldset>
                      <fieldset className="">
                        <label htmlFor="">Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder=""
                          className=""
                          tabIndex={2}
                          aria-required="true"
                          required={true}
                          defaultValue={""}
                        />
                      </fieldset>
                      <button
                        type="submit"
                        className="tf-btn w-100 btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                      >
                        <span>Send</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /modal ask_question */}
            
            {/* modal delivery_return */}
            <div
              className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
              id="delivery_return"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="header">
                    <div className="demo-title">Shipping &amp; Delivery</div>
                    <span
                      className="icon-close icon-close-popup"
                      data-bs-dismiss="modal"
                    />
                  </div>
                  <div className="overflow-y-auto">
                    <div className="tf-product-popup-delivery">
                      <div className="title">Delivery</div>
                      <p className="text-paragraph">
                        All orders shipped with UPS Express.
                      </p>
                      <p className="text-paragraph">
                        Always free shipping for orders over US $250.
                      </p>
                      <p className="text-paragraph">
                        All orders are shipped with a UPS tracking number.
                      </p>
                    </div>
                    <div className="tf-product-popup-delivery">
                      <div className="title">Returns</div>
                      <p className="text-paragraph">
                        Items returned within 14 days of their original shipment
                        date in same as new condition will be eligible for a
                        full refund or store credit.
                      </p>
                      <p className="text-paragraph">
                        Refunds will be charged back to the original form of
                        payment used for purchase.
                      </p>
                      <p className="text-paragraph">
                        Customer is responsible for shipping charges when making
                        returns and shipping/handling fees of original purchase
                        is non-refundable.
                      </p>
                      <p className="text-paragraph">
                        All sale items are final purchases.
                      </p>
                    </div>
                    <div className="tf-product-popup-delivery">
                      <div className="title">Help</div>
                      <p className="text-paragraph">
                        Give us a shout if you have any other questions and/or
                        concerns.
                      </p>
                      <p className="text-paragraph">
                        Email:{" "}
                        <a
                          href="info@uniquehair-studio.com"
                          aria-describedby="a11y-external-message"
                        >
                          <span className="__cf_email__">
                            info@uniquehair-studio.com
                          </span>
                        </a>
                      </p>
                      <p className="text-paragraph mb-0">
                        Phone: (0) 7490442544
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /modal delivery_return */}
          </div>
        </div>
      </div>
    </>
  );
}
