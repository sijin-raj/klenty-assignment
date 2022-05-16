import React from "react";
import Image from "next/image";
import Layout from "./Components/Layout/Layout";
import HeaderImg from "./Assets/Images/headerImg.png";
import Button from "./Components/Button/Button";
import CRM from "./Common/Crm";
import Testimonials from "./Common/Testimonials/Testimonials";
const Home = (props) => {
  return (
    <>
      {/* layout */}
      <Layout>
        {/* Header Section */}
        <section className="relative w-full pt-24 pb-14  md:pt-18 xl:pt-5 intro-linear-background">
          <div className="w-4/5 mx-auto flex flex-col xl:flex-row items-center space-y-6 xl:space-y-0 xl:space-x-10">
            <div className="w-full xl:w-1/2 mx-auto flex xl:items-center xl:justify-center">
              <div className="flex flex-col items-start space-y-6">

                <h2 className="text-2xl md:text-2xl xl:text-4xl font-extrabold title tracking-normal text-title-1 xl:leading-snug">
                  Don't just integrate <br />{" "}
                  <span className="text-title-2"> Accelerate your CRM </span>
                </h2>
                <h4 className="text-xs md:text-base xl:text-lg font-sans font-normal  text-black xl:leading-8">
                  Propel your sales team into a state of flow with CRM
                  Accelerations. Switch out boring hours of repetitive work with
                  high-impact activities. Build a repeatable sales process.
                </h4>

                <div className="text-xl ">
                  <Button text="GET STARTED" to="" classNames="" />
                </div>
              </div>
            </div>
 
             {/* Header image Section */}
            <div className="w-full xl:w-2/5 flex flex-col items-start space-y-8">
              <Image alt="Vercel logo" src={HeaderImg} />
            </div>
          </div>
        </section>


        {/* CRM Acceleration Section */}
        <CRM />


        {/* Testimonials */}
        <Testimonials />

      </Layout>
    </>
  );
};

export default Home;
