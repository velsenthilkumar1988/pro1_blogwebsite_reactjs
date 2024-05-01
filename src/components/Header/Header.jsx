import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  },[])

  const handleClick = e=> {
    e.preventDefault()
    const targetAtt = e.target.getAttribute('href');//e.targetAttribute("href");
    const location = document.querySelector(targetAtt).offsetTop;

    window.scrollTo({
      top : location - 80,
      left : 0,
    })
  }
  
  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/** LOGO Start */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-red-700 text-white text-[27px] font-[500] rounded-full flex items-center justify-center">
              V
            </span>
            <div className="leading-[20px]">
              <h1 className="text-xl text-smallTextColor font-[700]">
                Velsenthilkumar
              </h1>
              <p className=" text-smallTextColor text-[20px] font-[500]">
                Blogs
              </p>
            </div>
          </div>
          {/** LOGO End */}

          {/** MENU Start */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className=" flex items-center gap-8">
              <li>
                <a onClick={handleClick} href="#about" className=" text-smallTextColor font-[400]">
                  About ?
                </a>
              </li>
              <li>
                <a onClick={handleClick}  href="#service" className=" text-smallTextColor font-[400]">
                  Services
                </a>
              </li>
              <li>
                <a  onClick={handleClick} href="#portfolio" className=" text-smallTextColor font-[400]">
                  Portfolio
                </a>
              </li>
              <li>
                <a  onClick={handleClick} href="#contact" className=" text-smallTextColor font-[400]">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#myprojects"
                  className=" text-smallTextColor font-[400]"
                >
                  My Projects
                </a>
              </li>
            </ul>
          </div>
          {/** MENU End */}

          {/** MENU Right Start*/}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i class="ri-send-plane-fill"></i>Let's Talk
            </button>
            <span onClick={toggleMenu} className=" text-2xl text-smallTextColor md:hidden cursor-pointer"><i class="ri-menu-line"></i></span>
          </div>
          {/** MENU Right End*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
