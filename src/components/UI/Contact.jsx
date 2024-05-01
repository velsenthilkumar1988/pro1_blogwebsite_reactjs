import React from 'react'

const Contact = () => {
  return (
    <section className="pb-16" id="contact">
      <div className="container">
        <h2 className=" text-headingColor font-[700] text-[2rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.641991828558!2d78.13840367488687!3d11.065445089101411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa32f12d8c86ed%3A0x5e6d8ebbf13b044b!2sAmazing%20Tek!5e0!3m2!1sen!2sin!4v1714139753571!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Enter Your Name?"
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Enter Your Email ID?"
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Subject"
                />
              </div>
              <button className='w-full p-3 focus:outline-none rounded-[5px] bg-green-950  text-white hover:bg-black text-center ease-linear duration-150'>Send Message</button>              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
