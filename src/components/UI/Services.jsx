import React from "react";
import frontImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import UIImg from "../../assets/images/design.png";
import appImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="#service">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className=" text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help ?
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[400] text-[15px] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm text-semibold">
              {/** Vertical line running throught middle Start */}
              <div className="hidden absolute w-1 sm:block bg-indigo-400 h-full left-1/2 transform-translate-x-1/2"></div>
              {/** Vertical line running throught middle End */}
              {/** Left Card Start */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div 
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor 
                      cursor-pointer ease-in duration-150"
                      data-aos="fade-right"
                      data-aos-delay="30"
                      data-aos-duration="1300"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Front-end Development
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/** Left Card End */}

              {/** Right Card Start */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor 
                      cursor-pointer ease-in duration-150"
                      data-aos="fade-left"
                      data-aos-delay="50"
                      data-aos-duration="1500"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Back-End Developer
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/** Right Card End */}


              {/** Left Card Start */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="bg-white p-4 rounded shadow group
                       hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="1800"
                       >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          UI / UX Developer
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={UIImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/** Left Card End */}

              {/** Right Card Start */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="bg-white p-4 rounded shadow group
                       hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        data-aos="fade-left"
                        data-aos-delay="90"
                        data-aos-duration="1900"
                       >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          MERN Stack Developer
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/** Right Card End */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
