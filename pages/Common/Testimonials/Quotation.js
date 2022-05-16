import React from "react";
import qouteImg from "../../Assets/Images/qoutes.png";
import Image from "next/image";
import Bio from "../../Assets/Images/bio-1.png";
const Quotation = ({ datas, handlePrev, handleNext }) => {
  return (
    <>
      {/* What our customers have to say section */}

      <div className="flex flex-col  mb-10 space-x-14 ">
        <div className="mb-10 text-center mx-auto space-y-10">
          <h2 className="pt- mx-auto text-lg sm:text-lg title xl:text-4xl font-poppins text-title-1 font-bold">
            What our customers have to say
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row   "> 
          <div className="w-full ">
            <Image src={qouteImg} alt="qoute" width={80} />
            <p className="mt-6 text-black text-lg font-extrabold ">
              {datas.qoutes}
            </p>
            <div className="flex mt-6">
              <Image src={Bio} alt="qoute" className="w-10 " />
            </div>
          </div>
          <div className="w-4/5">
            <Image src={datas.image} alt="profile" className="w-24 " />
          </div>
        </div>

        {/* Prev and next buttons */}
        <div className="mt-3 w-full flex-row items-center justify-center">
          <div className=" sm:ml-24 xl:ml-80  space-x-4 items-center justify-between">
            <button
              className="bg-background text-primary rounded-md px-2 py-2"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            <button
              className="bg-background text-primary rounded-md px-2 py-2"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotation;
