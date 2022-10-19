import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const productsData = [
    {
      img: "https://dummyimage.com/420x260", // imgName.png
      category: "Fire Hydrant System",
      title: "Fire Hydrant System",
    },
    {
      img: "https://dummyimage.com/420x260",
      category: "Fire Hydrant System",
      title: "Fire Hydrant System",
    },
  ];
  return (
    <>
      <div id="default-carousel" className="relative" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item=""
          >
            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            {/* <img src="./fire.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            <img
              src="hero2.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item=""
          >
            {/* <img src="./fire2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            <img
              src="hero1.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
            data-carousel-item=""
          >
            {/* <img src="./fire3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
            <img
              src="hero.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        <div className="max-w-2xl mx-auto"></div>
      </div>
      <main id="main">
        <section id="about" className="me">
          <div className="about">
            <div className="aboutLeft">
              <p>About</p>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-6" />
              <h3 className="text-xl"> The Management:</h3>
              <span>
                Fire Experts is entrusted to highly qualified and experienced,
                enthusiastic, trained technical professionals from the aforesaid
                industries. The management of the group comprises personalities
                from different fields including Engineering, Business Management
                and Cost Accountancy having hands on experience in renowned
                Indian companies. The nature of business is exporter, importer,
                supplier &amp; installer. We cover domestic and international
                markets with the annual turnover of INR 45,000,000+.
              </span>
              <h3 className="mt-6 text-xl">Our Motto:</h3>
              <span>
                Our mission is to give our customers safety with peace of mind,
                which is delivered through in-depth knowledge of customer
                applications and best of world class services through
                association with different experienced experts.
              </span>
              <h3 className="mt-6 text-xl">Our Vision</h3>
              <span>
                To become an internationally acclaimed Fire Safety services
                provider Company giving Total Engineering Solutions to the
                entire Satisfaction of the Customers.
              </span>
              <div className="mt-10">
                <Link to="/explore">
                  <a>Explore More &gt;</a>
                </Link>
              </div>
            </div>
            <div className="aboutRight flex flex-col">
              <img src="aboutImg.jpg" />
              <p className="text-gray-100 flex justify-center mt-2">
                {" "}
                <strong> Mr. Anilkumar Gadhavi </strong>{" "}
              </p>
              <p className="text-gray-100 flex justify-center mt-2">
                {" "}
                <em> Properietor </em>{" "}
              </p>
            </div>
          </div>
        </section>
        <hr />
        {/* Products Section*/}
        <section id="products" className="text-gray-600 body-font ">
          <p className=" text-3xl  mt-4 ml-16 -mb-10 text-[#1CD997]">
            Products
          </p>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {productsData.map((product, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.img}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-100 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testomonial */}
        <section id="testimonials">
          <link
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />
          <h1 className="text-6xl flex justify-center md:text-7xl font-bold mb-5 text-[#C0CCCC] -mb-8">
            Testimonials{" "}
          </h1>
          <section className="">
            <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
              <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
                <div className="max-w-xl text-center sm:text-left">
                  <h2 className="text-3xl text-[#CCCCCC] font-bold tracking-tight sm:text-4xl">
                    Still don't believe it?
                    <br className="hidden sm:block lg:hidden text-[#CCCCCC]" />
                    Read reviews from our customers
                  </h2>
                  {/* <p class="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                    veritatis illo placeat harum porro optio fugit a culpa sunt id!
                </p> */}
                  <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                    <button
                      aria-label="Previous slide"
                      className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white"
                    >
                      <svg
                        className="h-5 w-5 -rotate-180 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </button>
                    <button
                      aria-label="Next slide"
                      className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="-mx-6 lg:col-span-2 lg:mx-0">
                  <div className="swiper-container !overflow-hidden">
                    <ul className="swiper-wrapper">
                      <li className="swiper-slide">
                        <blockquote className="flex h-full flex-col justify-between bg-[#CCCCCC] p-12">
                          <div>
                            <div className="flex gap-0.5 text-green-500">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                            <div className="mt-4">
                              <p className="text-2xl font-bold text-[#363E8E] text-pink-600 sm:text-3xl">
                                Bhaikaka University
                              </p>
                              <p className="mt-4 leading-relaxed ">
                                We certify that Fire Experts is a supplier &amp;
                                service provider such as System installation,
                                providing AMC &amp; ARC services, consulting
                                reputed organizations, providing training &amp;
                                mock-drills etc.
                              </p>
                            </div>
                          </div>
                          <footer className="mt-8 text-sm">
                            — Educational Organization
                          </footer>
                        </blockquote>
                      </li>
                      <li className="swiper-slide">
                        <blockquote className="flex h-full flex-col justify-between bg-[#CCCCCC] p-12">
                          <div>
                            <div className="flex gap-0.5 text-green-500">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                            <div className="mt-4">
                              <p className="text-2xl text-[#363E8E] font-bold text-pink-600 sm:text-3xl">
                                Berger Paints
                              </p>
                              <p className="mt-4 leading-relaxed">
                                Fire Experts is presently engaged with us &amp;
                                are providing expert service &amp; maintenance
                                jobs in our company. This firm is always easy to
                                work with &amp; they are available &amp; willing
                                to take the time to discuss areas of
                                improvement.
                              </p>
                            </div>
                          </div>
                          <footer className="mt-8 text-sm">
                            — Business Company
                          </footer>
                        </blockquote>
                      </li>
                      <li className="swiper-slide">
                        <blockquote className="flex h-full flex-col justify-between bg-[#CCCCCC] p-12">
                          <div>
                            <div className="flex gap-0.5 text-green-500">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                            <div className="mt-4">
                              <p className="text-2xl text-[#363E8E] font-bold text-pink-600 sm:text-3xl">
                                Madhuban Resort &amp; Spa{" "}
                              </p>
                              <p className="mt-4 leading-relaxed ">
                                We have always been pleased with the service we
                                received from the company. The team's
                                professionalism &amp; enthusiasm to get to the
                                root of the issue promptly exceeded our
                                expectations.
                              </p>
                            </div>
                          </div>
                          <footer className="mt-8 text-sm">
                            — Business in Hotel
                          </footer>
                        </blockquote>
                      </li>
                      {/* Beegee */}
                      <li className="swiper-slide">
                        <blockquote className="flex h-full flex-col justify-between bg-[#CCCCCC] p-12">
                          <div>
                            <div className="flex gap-0.5 text-green-500">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                            <div className="mt-4">
                              <p className="text-2xl text-[#363E8E] font-bold text-pink-600 sm:text-3xl">
                                Beepee Coatings Pvt. Limited{" "}
                              </p>
                              <p className="mt-4 leading-relaxed ">
                                The firm is associated with us since last many
                                years. The scope of this firm is to regularly
                                maintain and upkeep our Fire Fighting Systems
                                i.e., Hydrant system, portable fire
                                extinguishers, etc.
                              </p>
                            </div>
                          </div>
                          <footer className="mt-8 text-sm">
                            — Industrial Sector
                          </footer>
                        </blockquote>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-4 lg:hidden">
                <button
                  aria-label="Previous slide"
                  className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <svg
                    className="h-5 w-5 -rotate-180 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next slide"
                  className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </section>
        {/* end */}
        {/* Contact */}
        <div id="contact" className="flex flex-row justify-center items-start">
          <div className="contactForm">
            <section className="text-gray-600 body-font relative">
              {/* <h2 class="flex justify-center align-center">Contact</h2> */}
              <p className=" text-3xl flex justify-center  mt-4  -mb-10 text-[#1CD997]">
                Contact Us
              </p>
              <div className="container px-5 py-24 flex">
                <div className=" bg-white rounded-lg p-8  mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                  {/* <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2> */}
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      placeholder="Eg. Sumit Arora"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="xyz@gmail.com"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="contact"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Contact Number
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      placeholder="+91 xxxxxxxxxxx"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                  {/* <select class="appearance-none w-full py-1 px-2 bg-indigo-100 mb-4" name="whatever" id="frm-whatever">
                    <option value="">Please choose&hellip;</option>
                  <option value="1">Item 1</option>
                  <option value="2">Item 2</option>
                  <option value="3">Item 3</option>
                </select> */}
                  <select className="bg-gray-300 text-gray-400 mb-4 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
                    <option className="pt-6 font-bold">GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                  </select>
                  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Send
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="interviewForm">
            {/* Apply for interview */}
            <section className="text-gray-600 body-font relative">
              {/* <h2 class="flex justify-center align-center">Contact</h2> */}
              <p className=" text-3xl ml-16  mt-4  -mb-10 text-[#1CD997]">
                Apply for interview
              </p>
              <div className="container px-5 py-24 flex">
                <div className=" bg-white rounded-lg p-8 w-full mt-10 md:mt-0 relative z-10 shadow-md">
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>{" "}
                    <br />
                    <input
                      type="name"
                      id="name"
                      name="name"
                      placeholder="Eg. Sumit Arora"
                      className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>{" "}
                    <br />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="xyz@gmail.com"
                      className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="contact"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Contact Number
                    </label>{" "}
                    <br />
                    <input
                      type="contact"
                      id="contact"
                      name="contact"
                      placeholder="+91 xxxxxxxxxxx"
                      className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <label className="w-full block text-base mb-2 text-gray-900">
                    Country
                  </label>
                  <select className="bg-gray-300 text-gray-400 mb-4 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
                    <option className="pt-6 font-bold">Country</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                  </select>
                  <div className="relative mb-4">
                    <label
                      htmlFor="text"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Post to apply for
                    </label>{" "}
                    <br />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Eg. Accountant"
                      className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="contact"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Resume
                    </label>{" "}
                    <br />
                    <input
                      type="file"
                      id="myfile"
                      name="myfile"
                      className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  {/* <select class="appearance-none w-full py-1 px-2 bg-indigo-100 mb-4" name="whatever" id="frm-whatever">
                            <option value="">Please choose&hellip;</option>
                            <option value="1">Item 1</option>
                            <option value="2">Item 2</option>
                            <option value="3">Item 3</option>
                        </select> */}
                  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit Details
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* footer  */}
      <footer className="text-center lg:text-left text-gray-600">
        {/* <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
  <div class="mr-12 hidden lg:block">
<span>Connect with us on social networks:</span>
  </div>
  <div class="flex justify-center">
<a href="#!" class="mr-6 text-gray-600">
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
  class="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 320 512">
  <path fill="currentColor"
    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
  </path>
</svg>
</a>
<a href="#!" class="mr-6 text-gray-600">
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
  class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="currentColor"
    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
  </path>
</svg>
</a>
<a href="#!" class="mr-6 text-gray-600">
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
  class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
  <path fill="currentColor"
    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
  </path>
</svg>
</a>
<a href="#!" class="mr-6 text-gray-600">
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
  class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path fill="currentColor"
    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
  </path>
</svg>
</a>
<a href="#!" class="mr-6 text-gray-600">
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
  class="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path fill="currentColor"
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
  </path>
</svg>
</a>
<a href="#!" class="text-gray-600">
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
  class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
  <path fill="currentColor"
    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
  </path>
</svg>
</a>
  </div>
</div> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Angular
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  React
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Laravel
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Settings
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Help
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                231, Gadhavi Faliyu, At. Ramodadi, <br /> Ta. Petlad, Anand,
                Gujarat, India - 388150
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                firexpertservices@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                +91-9879688235
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="print"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                  ></path>
                </svg>
                (02692) - 296588
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-gray-200">
          <span>© 2022 Copyright:</span>
        </div>
      </footer>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      {/* <script>
      document.addEventListener('DOMContentLoaded', function (){" "}
      {
        new Swiper(".swiper-container", {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 32,
          autoplay: {
            delay: 8000,
          },
          breakpoints: {
            640: {
              centeredSlides: true,
              slidesPerView: 1.25,
            },
            1024: {
              centeredSlides: false,
              slidesPerView: 1.5,
            },
          },
          navigation: {
            nextEl: ".next-button",
            prevEl: ".prev-button",
          },
        })
      }
      )
    </script> */}
    </>
  );
}

export default HomePage;
