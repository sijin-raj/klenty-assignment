import React from "react";
import Image from "next/image";
import Icon1 from "../Assets/Images/Icon/icon-1.png";
import Icon2 from "../Assets/Images/Icon/icon-2.png";
import Icon3 from "../Assets/Images/Icon/icon-3.png";

const CRM = () => {
  const itemsList = [
    {
      id: 1,
      icon: Icon1,
      bold: "Never update your contacts manually",
      paragraph:
        "Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities",
    },
    {
      id: 2,
      icon: Icon2,
      bold: "Engage instantly with prospects who show intent",
      paragraph:
        "Auto-sync email engagement data like opens in Klenty, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.",
    },
    {
      id: 3,
      icon: Icon3,
      bold: "Outreach without leaving your CRM ",
      paragraph:
        "Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities",
    },
  ];

  return (
    <>
      {/* CRM Acceleration Section */}
      <div className="m-10 text-center mx-auto space-y-8 bg-background items-center justify-center">
        <div className="mt-10 text-center mx-auto space-y-8">
          <h2 className="pt-20 mx-auto text-lg sm:text-lg title xl:text-4xl font-poppins text-title-1 font-bold">
            CRM Acceleration
          </h2>
          <p className="text-xs md:text-base xl:text-lg font-sans font-normal  text-black xl:leading-8">
            Everything CRM Integrations was supposed to be. And more.
          </p>
        </div>

        <div className="pt-20 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 sm:gap-y-16  gap-10 md:gap-y-7  items-center justify-between mx-auto space-x-1 ">
          {itemsList.map((item, index) => {
            return (
              <div className="px-5 py-5 mb-10 w-full flex flex-col items-center justify-between card-shadow bg-white rounded-lg space-y-4" key={item.id}>
                <div className="w-full  mx-auto flex  ">
                  <Image alt="icon" src={item.icon} />
                </div>
                <div className=" mb-5 w-full text-left  items-center justify-center space-y-4 ">
                  <h2 className="text-black text-lg font-bold">{item.bold}</h2>
                  <p className="text-sm font-poppins text-gray-600">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CRM;
