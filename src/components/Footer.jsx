import React from "react";
import {
  instagramIcon,
  metaIcon,
  twitterIcon,
  youTubeIcon,
} from "../assets/icons";

function IconWithLink(props) {
  return (
    <a
      href={props.linkAddress}
      className="p-5  text-gray-800 hover:animate-bounce"
      target="_blank"
      rel="noreferrer">
      <img src={props.iconName} alt="iconNme" />
    </a>
  );
}
const Footer = () => {
  return (
    <div>
      <footer
        className="text-center w-screen h-1/5 text-white bg-primaryFour font-inder"
        id="Footer">
        {/* style="background-color: #f1f1f1;" */}
        <div className="pt-7 ">
          <div className="flex justify-center items-center mb-9">
            <IconWithLink
              linkAddress={"https://twitter.com/wix"}
              iconName={twitterIcon}
            />
            <IconWithLink
              linkAddress={"https://www.facebook.com/wix"}
              iconName={instagramIcon}
            />
            <IconWithLink
              linkAddress={"https://www.instagram.com/wix/"}
              iconName={metaIcon}
            />
            <IconWithLink
              linkAddress={"https://www.youtube.com/user/Wix"}
              iconName={youTubeIcon}
            />
          </div>
        </div>
        <div>
          <form action="">
            <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
              <div className="md:ml-auto md:mb-6">
                <p className="">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className=" inline-block px-6 py-2 rounded border-2 border-primaryOne text-white hover:bg-primaryTwo hover:bg-opacity-15 focus:outline-none focus:ring-0 tansition duration-150 ease-in-out"> 
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
        <hr className=" h-px bg-primaryOne border-0 dark:bg-primaryTwo" />
        <div className="text-center text-white p-4 hover:animate-[wiggle_1s_ease-in-out_infinite]">
          © 2021 Copyright : earthly.ie
        </div>
      </footer>
    </div>
  );
};

export default Footer;
