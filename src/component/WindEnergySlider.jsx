import React, { useEffect } from 'react';

// Import Swiper core and required modules
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const WindEnergySlider = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.it-slider-3-active', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],

      speed: 4000,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      loopedSlides: 3, // Explicitly set loopedSlides for 3 slides

      // Navigation and Pagination are commented out as they aren't in your provided HTML structure
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },
      pagination: {
        el: '.swiper-pagination', // If you add this div to your JSX
        clickable: true,
      },

      preventInteractionOnTransition: true,
    });

    // Log to check how many slides Swiper detects
    console.log('Swiper slides found by Swiper instance:', swiper.slides ? swiper.slides.length : 'N/A');
    if (swiper.slides) {
      swiper.slides.forEach((slide, index) => {
        console.log(`Slide ${index}:`, slide);
      });
    }

    // Cleanup function
    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []); // Runs once after initial render

  return (
    <section className="it-slider-4-area fix">
      <div className="it-slider-4-wrap">
        <div className="swiper-container it-slider-3-active">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="it-slider-4-box it-slider-4-overlay p-relative">
                <div className="it-slider-4-bg">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/slider/slider-5-1.jpg`} alt="" />
                </div>
                <span className="it-hero-experience">
                  <i>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/hero/favicon.png`} alt="" />
                  </i>
                  <b className="it-hero-experience-text">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/shape/slider-5-2.png`} alt="" />
                  </b>
                </span>
                <div className="it-slider-4-social-box it-header-top-social-box">
                  <a href="#">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z" stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.41177 0H0L5.23083 6.87316L0.334618 12.6389H2.59681L6.29998 8.27809L9.58823 12.5988H14L8.6172 5.52593L8.62673 5.53813L13.2614 0.0802914H10.9992L7.55741 4.13336L4.41177 0ZM2.43522 1.20371H3.80866L11.5648 11.395H10.1913L2.43522 1.20371Z" fill="currentcolor" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.8477 4.15039H11.8577" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.2579 4.73828C11.5141 4.73828 12.7188 5.2373 13.6071 6.12555C14.4954 7.01381 14.9944 8.21854 14.9944 9.47473V15.0006H11.8367V9.47473C11.8367 9.056 11.6704 8.65442 11.3743 8.35834C11.0782 8.06225 10.6767 7.89591 10.2579 7.89591C9.8392 7.89591 9.43762 8.06225 9.14154 8.35834C8.84545 8.65442 8.67911 9.056 8.67911 9.47473V15.0006H5.52148V9.47473C5.52148 8.21854 6.0205 7.01381 6.90876 6.12555C7.79701 5.2373 9.00174 4.73828 10.2579 4.73828Z" fill="currentcolor" />
                      <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="currentcolor" />
                      <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="currentcolor" />
                    </svg>
                  </a>
                </div>
                <div className="container container-1420">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="it-slider-4-content">
                        <h1 className="it-slider-4-title">
                          Powering Tomorrow with Wind Energy
                        </h1>
                        <div className="it-slider-4-mlr">
                          <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-5">
                              <div className="it-slider-4-customer-info">
                                <h5 className="number">50k+</h5>
                                <span>Trusted Customer</span>
                                <div className="it-slider-4-customer-ratting">
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2686 7.43359L12.3848 7.72656L12.7002 7.74805L18.7324 8.14355L14.1006 12.0723L13.8623 12.2744L13.9395 12.5771L15.4561 18.5312L10.2627 15.249L9.99609 15.0801L9.72852 15.249L4.53516 18.5312L6.05273 12.5771L6.12891 12.2754L5.8916 12.0732L1.26367 8.14453L7.29199 7.74805L7.60742 7.72656L7.72363 7.43359L9.99609 1.72461L12.2686 7.43359Z" stroke="white" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-7">
                              <div className="it-slider-4-text-box d-flex justify-content-end">
                                <div>
                                  <div className="it-slider-4-text">
                                    <p className="mb-40">
                                      We deliver sustainable, reliable, and renewable wind
                                      energy <br />
                                      solutions designed to power homes, businesses, and <br />
                                      communities for a cleaner, greener future.
                                    </p>
                                  </div>
                                  <div className="it-slider-4-btn">
                                    <a href="about-us-v1.html" className="it-btn-theme mr-30">
                                      <span>
                                        <span className="text-1">Learn How It Works</span>
                                        <span className="text-2">Learn How It Works</span>
                                      </span>
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
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="it-slider-4-box it-slider-4-overlay p-relative">
                <div className="it-slider-4-bg">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/slider/slider-5-2.jpg`} alt="" />
                </div>
                <span className="it-hero-experience">
                  <i>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/hero/favicon.png`} alt="" />
                  </i>
                  <b className="it-hero-experience-text">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/shape/slider-5-2.png`} alt="" />
                  </b>
                </span>
                <div className="it-slider-4-social-box it-header-top-social-box">
                  <a href="#">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z" stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.41177 0H0L5.23083 6.87316L0.334618 12.6389H2.59681L6.29998 8.27809L9.58823 12.5988H14L8.6172 5.52593L8.62673 5.53813L13.2614 0.0802914H10.9992L7.55741 4.13336L4.41177 0ZM2.43522 1.20371H3.80866L11.5648 11.395H10.1913L2.43522 1.20371Z" fill="currentcolor" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.8477 4.15039H11.8577" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.2579 4.73828C11.5141 4.73828 12.7188 5.2373 13.6071 6.12555C14.4954 7.01381 14.9944 8.21854 14.9944 9.47473V15.0006H11.8367V9.47473C11.8367 9.056 11.6704 8.65442 11.3743 8.35834C11.0782 8.06225 10.6767 7.89591 10.2579 7.89591C9.8392 7.89591 9.43762 8.06225 9.14154 8.35834C8.84545 8.65442 8.67911 9.056 8.67911 9.47473V15.0006H5.52148V9.47473C5.52148 8.21854 6.0205 7.01381 6.90876 6.12555C7.79701 5.2373 9.00174 4.73828 10.2579 4.73828Z" fill="currentcolor" />
                      <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="currentcolor" />
                      <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="currentcolor" />
                    </svg>
                  </a>
                </div>
                <div className="container container-1420">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="it-slider-4-content">
                        <h1 className="it-slider-4-title">
                          Powering Tomorrow with Wind Energy
                        </h1>
                        <div className="it-slider-4-mlr">
                          <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-5">
                              <div className="it-slider-4-customer-info">
                                <h5 className="number">50k+</h5>
                                <span>Trusted Customer</span>
                                <div className="it-slider-4-customer-ratting">
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2686 7.43359L12.3848 7.72656L12.7002 7.74805L18.7324 8.14355L14.1006 12.0723L13.8623 12.2744L13.9395 12.5771L15.4561 18.5312L10.2627 15.249L9.99609 15.0801L9.72852 15.249L4.53516 18.5312L6.05273 12.5771L6.12891 12.2754L5.8916 12.0732L1.26367 8.14453L7.29199 7.74805L7.60742 7.72656L7.72363 7.43359L9.99609 1.72461L12.2686 7.43359Z" stroke="white" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-7">
                              <div className="it-slider-4-text-box d-flex justify-content-end">
                                <div>
                                  <div className="it-slider-4-text">
                                    <p className="mb-40">
                                      We deliver sustainable, reliable, and renewable wind
                                      energy <br />
                                      solutions designed to power homes, businesses, and <br />
                                      communities for a cleaner, greener future.
                                    </p>
                                  </div>
                                  <div className="it-slider-4-btn">
                                    <a href="about-us-v1.html" className="it-btn-theme mr-30">
                                      <span>
                                        <span className="text-1">Learn How It Works</span>
                                        <span className="text-2">Learn How It Works</span>
                                      </span>
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
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="it-slider-4-box it-slider-4-overlay p-relative">
                <div className="it-slider-4-bg">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/slider/slider-5-3.jpg`} alt="" />
                </div>
                <span className="it-hero-experience">
                  <i>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/hero/favicon.png`} alt="" />
                  </i>
                  <b className="it-hero-experience-text">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/shape/slider-5-2.png`} alt="" />
                  </b>
                </span>
                <div className="it-slider-4-social-box it-header-top-social-box">
                  <a href="#">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z" stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.41177 0H0L5.23083 6.87316L0.334618 12.6389H2.59681L6.29998 8.27809L9.58823 12.5988H14L8.6172 5.52593L8.62673 5.53813L13.2614 0.0802914H10.9992L7.55741 4.13336L4.41177 0ZM2.43522 1.20371H3.80866L11.5648 11.395H10.1913L2.43522 1.20371Z" fill="currentcolor" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.8477 4.15039H11.8577" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.2579 4.73828C11.5141 4.73828 12.7188 5.2373 13.6071 6.12555C14.4954 7.01381 14.9944 8.21854 14.9944 9.47473V15.0006H11.8367V9.47473C11.8367 9.056 11.6704 8.65442 11.3743 8.35834C11.0782 8.06225 10.6767 7.89591 10.2579 7.89591C9.8392 7.89591 9.43762 8.06225 9.14154 8.35834C8.84545 8.65442 8.67911 9.056 8.67911 9.47473V15.0006H5.52148V9.47473C5.52148 8.21854 6.0205 7.01381 6.90876 6.12555C7.79701 5.2373 9.00174 4.73828 10.2579 4.73828Z" fill="currentcolor" />
                      <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="currentcolor" />
                      <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="currentcolor" />
                    </svg>
                  </a>
                </div>
                <div className="container container-1420">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="it-slider-4-content">
                        <h1 className="it-slider-4-title">
                          Powering Tomorrow with Wind Energy
                        </h1>
                        <div className="it-slider-4-mlr">
                          <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-5">
                              <div className="it-slider-4-customer-info">
                                <h5 className="number">50k+</h5>
                                <span>Trusted Customer</span>
                                <div className="it-slider-4-customer-ratting">
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.72645L12.7329 7.24867L9.99602 0.373047L7.25918 7.24867L0 7.72645L5.56773 12.454L3.7407 19.6255L9.99602 15.6715L16.2514 19.6255L14.4243 12.454L20 7.72645Z" fill="white" />
                                  </svg>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.2686 7.43359L12.3848 7.72656L12.7002 7.74805L18.7324 8.14355L14.1006 12.0723L13.8623 12.2744L13.9395 12.5771L15.4561 18.5312L10.2627 15.249L9.99609 15.0801L9.72852 15.249L4.53516 18.5312L6.05273 12.5771L6.12891 12.2754L5.8916 12.0732L1.26367 8.14453L7.29199 7.74805L7.60742 7.72656L7.72363 7.43359L9.99609 1.72461L12.2686 7.43359Z" stroke="white" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-7">
                              <div className="it-slider-4-text-box d-flex justify-content-end">
                                <div>
                                  <div className="it-slider-4-text">
                                    <p className="mb-40">
                                      We deliver sustainable, reliable, and renewable wind
                                      energy <br />
                                      solutions designed to power homes, businesses, and <br />
                                      communities for a cleaner, greener future.
                                    </p>
                                  </div>
                                  <div className="it-slider-4-btn">
                                    <a href="about-us-v1.html" className="it-btn-theme mr-30">
                                      <span>
                                        <span className="text-1">Learn How It Works</span>
                                        <span className="text-2">Learn How It Works</span>
                                      </span>
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
                </div>
              </div>
            </div>
          </div>

          {/* Add pagination elements if needed */}
          {/* <div className="swiper-pagination"></div> */}
          {/* <div className="swiper-button-prev"></div> */}
          {/* <div className="swiper-button-next"></div> */}
        </div>
      </div>
    </section>
  );
};

export default WindEnergySlider;