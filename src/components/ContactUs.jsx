import React from "react";
import { mapIcon, mailIcon, callIcon } from "../assets/icons/index";

function IconWithInfo(props) {
  return (
    <div
      className="flex justify-start items-start text-sm p-2 
    ">
      <img className="h-10 hover:scale-105 " src={props.icon} alt="{props.icon}" />
      <p className="px-6 py-2 w-80 font-itim">{props.info}</p>
    </div>
  );
}

function ContactForm(props) {
  return (
    <div className="relative px-4 py-2 ">
      <label htmlFor={""} className="leading-7 text-sm  text-gray-600">
        {props.title}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder={props.placeholder}
        className="w-full h-12 bg-[#D9D9D9] rounded-[0.438rem] border border-primaryTwo focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}
const ContactUs = () => {
  return (
    <div>
      <div className="relative flex flex-wrap w-full py-12 overflow-auto bg-primaryThree justify-center items-center sm:px-0" id="ContactUs">
        {/* ContactUs */}
        <div className="flex flex-col w-1/2 p-4 font-itim">
          <h1 className=" text-4xl tracking-tight py-3 justify-center items-center hover:text-pink-50">
            Contact us
          </h1>

          <IconWithInfo
            icon={mapIcon}
            info={
              "16 Liffey Ave, Liffey Valley Park, Lucan,Co. Dublin, K78 HW50, Ireland"
            }
          />
          <IconWithInfo icon={mailIcon} info={"hello@earthly.ie"} />
          <IconWithInfo icon={callIcon} info={"+353 1552 4908"} />
        </div>
        {/* ContactForm */}
        <div className="flex flex-col p-4 m-4 bg-[#EDEDED] border-primaryOne rounded-[1.188rem] justify-start items-start shadow-xl shadow-primaryFour-500 font-inder">
          {/* username */}
          <ContactForm title={"Name"} placeholder={"Enter Your Name"} />
          {/* UserEmail */}
          <ContactForm title={"Email"} placeholder={"Email"} />
          {/* Message */}
          <div className="relative px-4 py-2">
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              placeholder="Message"
              className="w-full h-48 bg-[#D9D9D9] pl-2 rounded-[0.438rem] border border-primaryTwo focus:border-primaryThree text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out "></textarea>
          </div>
          {/* SubmitButton */}

          <button className="w-6/12 border-[#A4BE7B] border mx-auto rounded-[0.563rem] shadow-lg bg-primaryOne py-2 px-4 hover:bg-white hover:scale-105">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
