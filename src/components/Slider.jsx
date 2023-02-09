import React from "react";

function ProductName(props) {
  return (
    <>
      <div className="text-start text-6xl leading-tight ">
        {/* heding */}
        <h1>{props.title}</h1>
      </div>
      <div className="text-start py-5 ">
        <h3>{props.text}</h3>
      </div>
      <div className="text-start">
        <h3>{props.ConsistOf}</h3>
        <div className="text-center px-14 py-2">
          <p>{props.discription}</p>
        </div>
      </div>

      <div className="text-start">
        <h3>{props.FeatureOf}</h3>
        <div className="text-center px-14 py-2">
          <p>{props.FeaturesDis}</p>
        </div>
      </div>
      <div className=" flex py-4 pr-16 justify-center items-center ">
        <button className="bg-white border-1 shadow-xl border-[#000000] hover:bg-[#D9D9D9] hover:text-primaryFour  text-black font-bold py-2 px-14 ">
          Buy Now
        </button>
      </div>
    </>
  );
}

// function SliderImg(props) {
//   return (

//   );
// }

const Slider = () => {
  return (
    <>
      {/* first container */}
      <div
        className=" flex w-screen h-screen justify-center items-center"
        id="Shop">
        {/* text section */}
        <div className="container w-1/2 h-screen justify-center items-center text-center p-16 bg-primaryTwo font-inder overflow-auto">
          {/* h1- Product Name */} {/* h3- Sub Heading */}
          <ProductName
            title={"Sustainability Starter Kit"}
            text={"This starter kit is all you need to start the revolution."}
            /* h3 - consist*/
            ConsistOf={"Consist of : "}
            /* p - consist disciption*/
            discription={
              "2 Bamboo Straws, 1 Plant Based Reusable Cup with 2 lids, 1 Natural Loofah, 1 box of 50 Bamboo Cotton Eartips, 1 Bamboo Toothbrush"
            }
            /* h3- Features*/
            FeatureOf={"Features :"}
            /* p - disciption*/
            FeaturesDis={
              "Govt Approved, Tested, and approved in TUV Rhineland, Germany <br>100% recyclable and non-toxic Leak-Proof Odorless tasteless and doesn’t react with hot beverages Lightweight Microwavable"
            }
          />
        </div>
        {/* Img section */}
        <div
          className={`image-box w-1/2  bg-no-repeat bg-contain bg-right h-full bg-fixed 
           bg-layer-One`} ></div>
      </div>
      {/* second container */}
      <div
        className=" flex flex-row-reverse w-screen h-screen justify-center items-center"
        id="Shop">
        {/* text section */}
        <div className="container w-1/2 h-screen justify-center items-center text-center p-16 bg-primaryTwo font-inder overflow-auto">
          {/* h1- Product Name */} {/* h3- Sub Heading */}
          <ProductName
            title={"Plant Based Reusable Cups"}
            text={"So, every batch is unique, Just. Like. You."}
            /* h3 - consist*/

            /* p - consist disciption*/
            discription={
              "Barista's love it! Easy to clean, hassle free and Plant Based. Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times."
            }
            /* h3- Features*/
            FeatureOf={"Features :"}
            /* p - disciption*/
            FeaturesDis={
              "Every batch of cups is unique due to being natural. Lids available in different Colours. Designed in USA. Govt Approved, Tested, and approved in TUV, Germany 100% recyclable and non-toxic Leak-Proof Odorless tasteless and doesn’t react with hot beverages Lightweight Microwavable"
            }
          />
        </div>
        {/* Img section */}
        <div
          className={`w-1/2 bg-no-repeat bg-contain bg-left bg-fixed h-full bg-layer-Two`}></div>
      </div>
      {/* third container */}
      <div
        className=" flex w-screen h-screen justify-center items-center"
        id="Shop">
        {/* text section */}
        <div className="container w-1/2 h-screen justify-center items-center text-center p-16 bg-primaryTwo font-inder overflow-auto">
          {/* h1- Product Name */} {/* h3- Sub Heading */}
          <ProductName
            title={"Reusable Bamboo Straws"}
            text={"This starter kit is all you need to start the revolution."}
            /* h3 - consist*/
            ConsistOf={`Consist of :`}
            /* p - consist disciption*/
            discription={`2 Bamboo Straws
            1 Plant Based Reusable Cup with 2 lids
            1 Natural Loofah
            1 box of 50 Bamboo Cotton Eartips
            1 Bamboo Toothbrush`}
            /* h3- Features*/
            FeatureOf={"Features :"}
            /* p - disciption*/
            FeaturesDis={`100% natural, toxic-free, vegan
            Odorless, tasteless, washable, reusable, durable
            Eco-friendly and sustainable
            100% Cruelty-free
            Hand-made by Local Artisans
            Biodegradable packaging
            `}
          />
        </div>
        {/* Img section */}
        <div
          className={`image-box w-1/2 bg-no-repeat bg-contain bg-right bg-fixed h-full
           bg-layer-Three`}></div>
      </div>
      {/* fourth container */}
      <div
        className=" flex flex-row-reverse w-screen h-screen justify-center items-center"
        id="Shop">
        {/* text section */}
        <div className="container w-1/2 h-screen justify-center items-center text-center p-16 bg-primaryTwo font-inder overflow-auto">
          {/* h1- Product Name */} {/* h3- Sub Heading */}
          <ProductName
            title={"Natural Bamboo Loofah"}
            text={`Natural loofah sponges actually come from the fruits of vine-growing Luffa plants.`}
            /* h3 - consist*/
            // ConsistOf={`Consist of :`}
            /* p - consist disciption*/
            discription={`These plants are part of the gourd family (Cucurbitaceae) making them relatives of watermelons, cucumbers and pumpkins.
            `}
            /* h3- Features*/
            FeatureOf={"Features :"}
            /* p - disciption*/
            FeaturesDis={`Plant-based material; Better for the skin - No Chemicals
            Exfoliation - Removing dead skin cells not only improves the look of your skin, it also sweeps away places where bacteria and soil could collect.            
            `}
          />
        </div>
        {/* Img section */}
        <div
          className={`image-box w-1/2 bg-no-repeat bg-contain bg-left bg-fixed h-full bg-layer-Four`}></div>
      </div>
      {/* fifth Container */}
      <div
        className=" flex w-screen h-screen justify-center items-center"
        id="Shop">
        {/* text section */}
        <div className="container w-1/2 h-screen justify-center items-center text-center p-16 bg-primaryTwo font-inder overflow-auto">
          {/* h1- Product Name */} {/* h3- Sub Heading */}
          <ProductName
            title={"Bamboo Toothbrush"}
            text={`This starter kit is all you need to start the revolution.`}
            /* h3 - consist*/
            ConsistOf={`Consist of :`}
            /* p - consist disciption*/
            discription={`2 Bamboo Straws
            1 Plant Based Reusable Cup with 2 lids
            1 Natural Loofah
            1 box of 50 Bamboo Cotton Eartips
            1 Bamboo Toothbrush4
            `}
            /* h3- Features*/
            FeatureOf={"Features :"}
            /* p - disciption*/
            FeaturesDis={`100% natural and toxic-free
            Vegan product
            Eco friendly and sustainable
            Made by Indian Artisans
            Aesthetically pleasing design
            Zero-Plastic, biodegradable packaging     
            `}
          />
        </div>
        {/* Img section */}
        <div
          className={`image-box w-1/2 bg-no-repeat bg-contain bg-right bg-fixed h-full bg-layer-Five`}></div>
      </div>
      {/* Sixth Container */}
      <div
        className=" flex flex-row-reverse w-screen h-screen justify-center items-center"
        id="Shop">
        {/* text section */}
        <div className="container w-1/2 h-screen justify-center items-center text-center p-16 bg-primaryTwo font-inder overflow-auto">
          {/* h1- Product Name */} {/* h3- Sub Heading */}
          <ProductName
            title={"Plant Based Reusable Containers"}
            text={`This Containers is all you need to start the revolution.`}
            /* h3 - consist*/
            ConsistOf={`Consist of :`}
            /* p - consist disciption*/
            discription={`Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times.
            Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch.Designed in USA. Tested in Germany.
            `}
            /* h3- Features*/
            FeatureOf={"Features :"}
            /* p - disciption*/
            FeaturesDis={`100% recyclable.
            Govt Approved, Tested and approved in TUV Rhineland Germany.
            Chemical Free
            Easily Portable takeaway containers
            Odorless tasteless and doesn’t react with hot food
            Lightweight
            Microwavable
            Recyclable and reusable     
            `}
          />
        </div>
        {/* Img section */}
        <div
          className={`image-box w-1/2 bg-no-repeat bg-contain bg-left bg-fixed h-full bg-layer-Six`}></div>
      </div>
    </>
  );
};

export default Slider;
