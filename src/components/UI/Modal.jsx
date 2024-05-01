import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeId, setShowModal}) => {
  const porfolio = portfolios.find(porfolio => porfolio.id === activeId);

  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
      <div className='w-11/12 md:max-w-[600px] md:w-full absolute top-0 left-1/2 z-10
       bg-white rounded-[8px] transform -translate-x-1/2 translate-y-10 p-3'>
          <div>
              <figure>
                  <img className=' rounded-[8px]' src={porfolio.imgUrl} alt=''/>   
              </figure>
          </div>
          <div>
            <h2 className=' text-2xl text-headingColor font-[700] my-5'>{porfolio.title}</h2>
            <p className=' text-justify text-[15px] leading-6 text-smallTextColor'>{porfolio.description}</p>
            <div className='mt-5 flex items-center gap-3 flex-wrap'>
                <h4 className=' text-headingColor text-[18px] text-[700]'>Technologies : </h4>
                {
                  porfolio.technologies.map((items,index)=>(
                    <span className=' bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]' key={index}>{items}</span>
                  ))
                }
            </div>
            <a href='#'>
              <button className=' bg-primaryColor text-white py-2 px-4 my-2 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300'>Live Site</button>
            </a>
          </div>
          <button onClick={()=>setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-white 
          absolute top-[1.7rem] right-[1.7rem] text-[25px] flex
          items-center justify-center rounded-[3px] leading-0 cursor-pointer hover:bg-red-500 hover:text-white'>&times;</button>
      </div>
      
    </div>
  )
}

export default Modal
