import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup"
{/**37:26 */}

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/** HERO Left Content Start */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className=" text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" text-headingColor font-[800] text-[1rem] sm:text-[40px] leading-[35px] sm:leading-[45px] mt-5"
            >
              I'm K.Senthilkumar MCA.,
              <br /> Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className=" bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[20px]">
                  <i class="ri-mail-send-line"></i>Hire Me!
                </button>
              </a>
              <a
                className=" text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                href="#portfolio"
              >
                See Portfolio
              </a>
            </div>

            <p 
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex gap-3 text-justify text-smallTextColor mt-6 font-[500] text-[15px]">
                <span><i class="ri-apps-line text-red-800 font-[800]"></i></span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                <div className="flex gap-9 items-center mt-7">
                    <span className=" text-smallTextColor text-[15px] font-[600]">
                        Follow me:
                    </span>
                    <span className="flex gap-2">
                        <a href="#youtube" className=" text-red-500 text-[25px] font-[600] hover:text-blue-600"><i class="ri-youtube-fill"></i></a>
                        <a href="#github" className=" text-black-500 text-[25px] font-[600] hover:text-blue-600"><i class="ri-github-fill"></i></a>
                        <a href="#instagram" className=" text-red-800 text-[25px] font-[600] hover:text-blue-600"><i class="ri-instagram-line"></i></a>
                        <a href="#facebook" className=" text-blue-600 text-[25px] font-[600] hover:text-blue-600"><i class="ri-facebook-box-fill"></i></a>
                    </span>
                </div>
          </div>
          {/** HERO Left Content End */}

          {/** HERO LEFT Image Start */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
                <img src={heroImg}></img>
            </figure>
          </div>
          {/** HERO LEFT Image End */}

          {/** HERO Content Right countup Start */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                <div className="mb-5">
                    <h2 className=" text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={6} duration={2} suffix="+"></CountUp>
                    </h2>
                    <h4>Year of Experience</h4>
                </div>

                <div className="mb-5">
                    <h2 className=" text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={100} duration={2} suffix="+"></CountUp>
                    </h2>
                    <h4>Success rate</h4>
                </div>

                <div className="mb-5">
                    <h2 className=" text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={150} duration={2} suffix="+"></CountUp>
                    </h2>
                    <h4>Happy Clients</h4>
                </div>

                <div className="mb-5">
                    <h2 className=" text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={237} duration={2} suffix="+"></CountUp>
                    </h2>
                    <h4>Project Completed</h4>
                </div>

          </div>
          {/** HERO Content Right countup End */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
