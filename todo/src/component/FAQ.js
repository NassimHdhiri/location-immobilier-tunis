import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import './styles.css'; // Make sure to import the CSS file containing the .icon-transition className

function FAQ() {
  const [isOpened, setIsOpened] = useState([false, false, false]);

  const handleOpened = (index) => {
    setIsOpened(prevState => prevState.map((value, i) => i === index ? !value : false));
  }

  return (
    <div className=' flex flex-col border-b-2 pb-2 shadow-lg min-h-[490px] max-h-[600px] duration-75 items-center'>
      <h2 className='flex justify-center font-mono italic font-semibold text-3xl pt-24 '>How it works ?</h2>
      <div className='flex justify-center flex-col items-center pt-12 pb-12'>
        <div>
          <div onClick={() => handleOpened(0)} className='flex justify-between rounded mb-2 p-5 hover:cursor-pointer shadow-gray-600 border-slate-500 border-2 w-[440px] text-center'>
            <label>How do I search for properties on your website?</label>
            {isOpened[0] ? <IoChevronUpOutline className='icon-transition duration-200' /> : <IoChevronDownOutline className='icon-transition duration-200' />}
          </div>
          <Collapse isOpened={isOpened[0]} className=''>
            <div className='rounded p-5  border-2 mt-1 mb-3 shadow-lg w-[440px] border-l-4 border-l-indigo-500 active:translate-y-3 duration-200'>
              <p>
                To search for properties, you can use our intuitive search bar located on the homepage. 
                Enter your preferred location, property type, and other relevant details, then click the search button. 
                You'll be presented with a list of properties that match your criteria. 
                Feel free to explore the listings, view property details, and contact us for more information.
              </p>
            </div>
          </Collapse>
        </div>
        <div>
          <div onClick={() => handleOpened(1)} className='flex justify-between rounded p-5 mb-2 hover:cursor-pointer shadow-gray-600 border-slate-500 border-2 w-[440px] text-center'>
            <label>How can I contact your team for assistance?</label>
            {isOpened[1] ? <IoChevronUpOutline className='icon-transition' /> : <IoChevronDownOutline className='icon-transition' />}
          </div>
          <Collapse isOpened={isOpened[1]}>
            <div className='rounded p-5  border-2 mt-1 mb-3 shadow-lg w-[440px] border-l-4 border-l-indigo-500 active:translate-y-3 duration-200'>
              <p>
                We're here to help! You can contact our team by using the contact information provided on our website. 
                Alternatively, you can fill out the contact form available on the "Contact Us" page. 
                Our dedicated team members will respond to your queries and assist you throughout your property journey.
              </p>
            </div>
          </Collapse>
        </div>
        <div>
          <div onClick={() => handleOpened(2)} className='flex justify-between rounded p-5 hover:cursor-pointer shadow-gray-600 border-slate-500 border-2 w-[440px] text-center'>
            <label>Are there any fees for using your property booking service?</label>
            {isOpened[2] ? <IoChevronUpOutline className='icon-transition' /> : <IoChevronDownOutline className='icon-transition' />}
          </div>
          <Collapse isOpened={isOpened[2]}>
            <div className='rounded p-5  border-2 mt-1 mb-3 shadow-lg w-[440px] border-l-4 border-l-indigo-500 active:translate-y-3 duration-200'>
              <p>
                No, our property booking service is absolutely free for users. 
                There are no hidden charges or fees for searching, exploring, or contacting property listings on our platform. 
                You can use our service to find your dream home without any cost. 
                However, do keep in mind that any fees related to property transactions will be discussed directly with the property owner or seller.
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default FAQ;
