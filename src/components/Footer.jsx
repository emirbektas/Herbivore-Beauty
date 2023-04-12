import React from "react";
import { Accordion } from "flowbite-react";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import Footer1 from "../images/svg/footer1.svg";
import Footer2 from "../images/svg/footer2.svg";
import Footer3 from "../images/svg/footer3.svg";
import Footer4 from "../images/svg/footer4.svg";
import Footer5 from "../images/svg/footer5.svg";
import Footer6 from "../images/svg/footer6.svg";
function Footer() {
  return (
    <div>
      <div className="bg-guap p-7">
        <div className="flex justify-between my-auto">
          <div className="my-auto">
            <h1 className="text-xl font-bold text-white">STAY IN TOUCH</h1>
          </div>

          <form>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-60 z-20 text-sm text-white bg-guap rounded-lg border border-white placeholder-gwite"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-guap rounded-r-lg border border-white"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-5 mt-5">
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              {" "}
              <h1 className="font-bold text-black">
                Why Herbivore-Beauty?
              </h1>{" "}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2">
                At{" "}
                <span className="text-guap italic font-bold cursor-pointer">
                  Herbivore Beauty
                </span>{" "}
                , we offer high-quality, plant-based ingredients that provide
                real results without harming animals or the planet. Plus, our
                eco-friendly packaging reduces waste and supports
                sustainability.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              {" "}
              <h1 className="font-bold text-black">Shopping with us</h1>{" "}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2">
                Our vegan skincare products are available for purchase on our
                website and through select retailers. We offer fast and reliable
                shipping, as well as excellent customer service. All of our
                products are cruelty-free and made with natural, ethically
                sourced ingredients. Plus, our eco-friendly packaging is
                designed to minimize waste and support sustainability. Shop now
                and discover the transformative power of vegan skincare.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <h1 className="font-bold text-black">
                How do I know which vegan skincare products are best for my skin
                type?
              </h1>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2">
                At{" "}
                <span className="text-guap italic cursor-pointer font-bold">
                  Herbivore Beauty
                </span>{" "}
                , we offer a wide range of vegan skincare products formulated to
                address different skin types and concerns. To determine the best
                products for your skin, we recommend taking our{" "}
                <span className="italic text-blue-600 cursor-pointer">
                  Skin Quiz
                </span>{" "}
                on our website, which will provide personalized recommendations
                based on your skin type and concerns. You can also refer to the
                product descriptions on our website, which provide information
                on the benefits and ingredients of each product. As always, we
                encourage you to patch test any new skincare product before use
                and consult with a dermatologist if you have any concerns.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="p-5 flex justify-between">
        <div className="my-auto">
          <h1 className="text-xl font-bold">Follow Herbivore Beauty</h1>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="bg-soft text-guap rounded-full p-3 hover:bg-guap hover:text-white cursor-pointer">
              <FaTiktok size={30} />
            </li>
            <li className="bg-soft text-guap rounded-full p-3 hover:bg-guap hover:text-white cursor-pointer">
              <FiInstagram size={30} />
            </li>
            <li className="bg-soft text-guap rounded-full p-3 hover:bg-guap hover:text-white cursor-pointer">
              <FaFacebookF size={30} />
            </li>
          </ul>
        </div>
      </div>
      <div className="p-5 bg-guap">
        <div>
          <div>
            <div className="flex justify-evenly">
              <div className="flex text-center truncate">
                <img src={Footer1} className="w-full h-6 my-auto" alt="" />
                <span className="text-white text-xs my-auto">SWISS MADE</span>
              </div>
              <div className="flex text-center truncate">
                <img src={Footer2} className="w-full h-6  my-auto" />
                <span className="text-white  text-xs my-auto">
                  NATURAL INGREDIENTS
                </span>
              </div>
              <div className="flex text-center truncate">
                <img src={Footer3} className="w-full h-6  my-auto" />
                <span className="text-white  text-xs my-auto">
                  VEGAN PRODUCT
                </span>
              </div>
            </div>

            <div className="flex justify-evenly mt-2">
              <div className="flex text-center truncate">
                <img src={Footer4} className="w-full h-6 my-auto" alt="" />
                <span className="text-white text-xs  my-auto">
                  CRUELTY FREE
                </span>
              </div>
              <div className="flex text-center truncate">
                <img src={Footer5} className="w-full h-6 my-auto" />
                <span className="text-white text-xs my-auto ">
                  {" "}
                  RECYCLABLE PACKACING
                </span>
              </div>
              <div className="flex text-center truncate">
                <img src={Footer6} className="w-full h-6 my-auto" />
                <span className="text-white text-xs  my-auto">
                  CARBON OFFSET
                </span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
