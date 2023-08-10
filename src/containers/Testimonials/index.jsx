import React from 'react'

const Testimonials = () => {
  return (
   <section
        className='testimonial'
        id='testimonial'
      >
        <div className='container'>
          <div className='testimonial__area'>
            <div className='row d-flex align-items-start'>
              <div className='col-lg-6'>
                <div className='testimonial__left'>
                  <div
                    className='testimonial__item bg-img wow animate__animated animate__fadeInUp'
                    data-background='assets/images/testimonial/quote.png'
                  >
                    <h6>
                      <q>The best fintech app</q>
                    </h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                    <div className='testimonial__author'>
                      <img
                        src='assets/images/testimonial/john.png'
                        alt='Avatar'
                      />
                      <div className='testimonial__author__info'>
                        <h6>John Carter</h6>
                        <p>Japan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='testimonial__content'>
                  <h6 className='wow animate__animated animate__fadeInUp'>
                    Testimonials
                  </h6>
                  <h2 className='wow animate__animated animate__fadeInUp'>
                    Don't take our word for it, take theirs
                  </h2>
                  <p
                    className='wow animate__animated animate__fadeInUp'
                    data-wow-delay='0.2s'
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    adipiscing mattis ultrices pellentesque sagittis quam urna.
                  </p>
                </div>
              </div>
            </div>
            <div className='row d-flex align-items-center testimonial__down'>
              <div className='col-lg-6'>
                <div
                  className='testimonial__item wow animate__animated animate__fadeInUp bg-img'
                  data-background='assets/images/testimonial/quote.png'
                >
                  <h6>
                    <q>Got my card in less than 24 hours</q>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                  <div className='testimonial__author'>
                    <img
                      src='assets/images/testimonial/morgan.png'
                      alt='Avatar'
                    />
                    <div className='testimonial__author__info'>
                      <h6>Morgan Woods</h6>
                      <p>Belgium</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='testimonial__item  testimonial__item__secondary bg-img wow animate__animated animate__fadeInUp'
                  data-wow-delay='0.2s'
                  data-background='assets/images/testimonial/quote.png'
                >
                  <h6>
                    <q>Best online bank ever</q>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                  <div className='testimonial__author'>
                    <img
                      src='assets/images/testimonial/sophie.png'
                      alt='Avatar'
                    />
                    <div className='testimonial__author__info'>
                      <h6>Sophie Moore</h6>
                      <p>Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials