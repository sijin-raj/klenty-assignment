import React, { useState } from "react";
import Quotation from "./Quotation";
import Adam from "../../Assets/Images/adam.png"
import Sam from "../../Assets/Images/sam.png"

const Testimonials = () => {
  
  const dataArr = [
    {
      id:1,
      image:Adam,
      qoutes:"From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner"
  },
  {
      id:2,
      image:Sam,
      qoutes:"It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills ",

  }
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === dataArr.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex === 0) setCurrentIndex(dataArr.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="flex flex-col  max-w-xs gap-10 mx-auto w-90w lg:flex-row lg:max-w-4xl lg:gap-0 lg:items-center">
     
      <Quotation 
        datas={dataArr[currentIndex]} 
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Testimonials;
