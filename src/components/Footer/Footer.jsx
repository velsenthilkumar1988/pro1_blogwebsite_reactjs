import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#12141e] pt-12">
      {/** Footer Top */}
      <div className="container">
        <div className="md:flex sm-flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to beautiful products?
            </h2>
            <a href="#contact">
              <button className=" bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[20px]">
                <i class="ri-mail-send-line"></i>Hire Me!
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2 p-2">
            <p className="text-gray text-justify text-white mt-4 sm:mt-0">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 sm:mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow me :
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#github"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-git-fork-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#youtube"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#facebook"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-facebook-box-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="#instagram"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        {/** menu bar */}
        <div className="">
          <ul className="md:flex items-center gap-10 mt-10 justify-center">
            <li>
              <a href="#about" className=" text-gray-400 font-[400]">
                About ?
              </a>
            </li>
            <li>
              <a href="#service" className="text-gray-400  font-[400]">
                Services
              </a>
            </li>
            <li>
              <a href="#porfolio" className=" text-gray-400  font-[400]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className=" text-gray-400  font-[400]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#myprojects" className=" text-gray-400  font-[400]">
                My Projects
              </a>
            </li>
          </ul>
        </div>
        {/** Menu bar End */}
      </div>
      {/** Footer Top End */}

      {/** Footer Bottom Start */}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-yellow-300 font-[500] text-[18px] flex items-center justify-center">
                  V
                </span>
                <div className='leading-[20px]'>
                    <h2 className='text-gray font-[500] text-[18px] text-white'>velsenthil</h2>
                    <p className='text-gray-400 text-[14px] font-[500]'>
                      Personal
                    </p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-gray-400'>Copyright @ {year} developed by velsenthilkumar1988@gmail.com - All right reserved.</p>
            </div>

          </div>
        </div>
      </div>
      {/** Footer Bottom End */}
    </footer>
  );
}

export default Footer
