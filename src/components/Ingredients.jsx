import React from "react";
import Swiss from "../images/svg/swiss2.svg";
import Plant from "../images/svg/plant.svg";
import Rabbit from "../images/svg/rabbit.svg";
import Recycle from "../images/svg/recycle.svg";
import Hand from "../images/svg/hand-plant.svg";
import List from "../images/other/papaya.jpg";
import Bunny from "../images/other/bunny.jpg";

function Ingredients() {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-12">
        <div className="my-auto text-center">
          <img src={Swiss} className="w-full h-12" alt="" />
          <span className="text-guap text-sm font-bold">SWISS MADE</span>
        </div>
        <div className="my-auto mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            height="80"
            width="80"
            viewBox="0 0 74 67"
            className="fill-guap "
          >
            <path
              d="M11.62 49.264h1.854l2.632 4.303h.018v-4.303h1.364v6.191h-1.784l-2.702-4.407h-.018v4.407H11.62v-6.19zm11.439 1.803l-.751 1.923h1.512l-.761-1.923zm-.525-1.803h1.129l2.694 6.192h-1.54l-.533-1.312h-2.405l-.516 1.312h-1.504l2.675-6.192zm6.585 1.207h-1.767v-1.207h4.897v1.207h-1.767v4.984H29.12v-4.984zm10.791 2.597c0 .367-.055.705-.166 1.015a2.247 2.247 0 0 1-.494.804 2.27 2.27 0 0 1-.818.534 3.096 3.096 0 0 1-1.128.192c-.431 0-.811-.065-1.137-.192a2.288 2.288 0 0 1-.818-.534 2.247 2.247 0 0 1-.494-.804 2.99 2.99 0 0 1-.166-1.015v-3.804h1.365v3.751c0 .194.03.371.092.533.061.165.146.306.258.425.11.12.242.214.397.28.155.067.322.101.503.101a1.172 1.172 0 0 0 .892-.381c.11-.119.197-.26.258-.425.061-.162.092-.339.092-.533v-3.75h1.364v3.803zm4.371-1.241h.805c.122 0 .252-.004.39-.013.136-.01.261-.035.37-.08a.647.647 0 0 0 .276-.204c.073-.094.11-.224.11-.393a.65.65 0 0 0-.097-.376.641.641 0 0 0-.245-.215 1.082 1.082 0 0 0-.34-.1 2.72 2.72 0 0 0-.377-.027h-.892v1.408zm-1.364-2.563h2.396c.315 0 .614.032.897.092a2.1 2.1 0 0 1 .743.307c.213.143.382.335.507.576.126.243.188.545.188.905 0 .439-.113.81-.34 1.116-.228.306-.56.5-.998.582l1.575 2.614H46.25l-1.295-2.476h-.673v2.476h-1.364v-6.192zm9.979 1.803l-.751 1.923h1.512l-.761-1.923zm-.525-1.803H53.5l2.694 6.192h-1.54l-.533-1.312h-2.405l-.516 1.312h-1.504l2.675-6.192zm6.244 0h1.364v4.933h2.529v1.258h-3.893v-6.19zM0 66.02v-6.02h1.326v6.02H0zm4.233-6.02h1.803l2.558 4.184h.018V60h1.326v6.019H8.204l-2.627-4.285H5.56v4.285H4.233v-6.02zm14.08 5.595a4.77 4.77 0 0 1-1.224.44 6.14 6.14 0 0 1-1.3.137c-.472 0-.905-.073-1.302-.22a3.016 3.016 0 0 1-1.028-.632 2.892 2.892 0 0 1-.677-1 3.409 3.409 0 0 1-.24-1.309c0-.482.08-.92.24-1.31.162-.39.387-.724.677-1a3.003 3.003 0 0 1 1.028-.633c.397-.147.83-.22 1.301-.22.482 0 .925.059 1.331.175.404.116.76.315 1.066.598l-.934 1.02a1.865 1.865 0 0 0-.613-.425c-.226-.096-.51-.144-.85-.144-.284 0-.54.049-.77.145a1.733 1.733 0 0 0-.969 1.02 2.22 2.22 0 0 0-.132.774c0 .283.044.542.132.777.088.235.214.44.38.611.163.175.36.309.59.404.23.097.485.146.77.146.288 0 .538-.033.747-.098.21-.066.377-.132.502-.2v-.978h-1.08V62.45h2.355v3.145zm4.192-3.103h.783c.118 0 .244-.004.378-.013.133-.008.254-.034.36-.076a.63.63 0 0 0 .27-.2c.07-.091.105-.218.105-.383a.642.642 0 0 0-.093-.365.632.632 0 0 0-.239-.209 1.078 1.078 0 0 0-.33-.097 2.706 2.706 0 0 0-.367-.026h-.867v1.369zM21.18 60h2.33c.306 0 .596.029.871.089.275.059.516.159.723.298.207.138.371.326.493.56.122.236.182.529.182.881 0 .426-.11.786-.332 1.084-.22.298-.543.485-.969.565l1.531 2.541h-1.59l-1.258-2.406h-.655v2.406H21.18V60zm7.26 0h4.09v1.224h-2.764v1.122h2.611v1.224h-2.61v1.225h2.916v1.224H28.44v-6.02zm8.332 4.795h.69c.305 0 .59-.031.853-.094.265-.062.493-.166.685-.31.193-.145.345-.335.455-.57.11-.235.166-.522.166-.862 0-.295-.056-.551-.166-.77a1.543 1.543 0 0 0-.447-.54 1.956 1.956 0 0 0-.658-.318 2.924 2.924 0 0 0-.795-.107h-.783v3.57zM35.445 60h1.99c.482 0 .94.055 1.373.16.434.11.812.283 1.135.525.322.24.58.553.77.939.19.385.284.853.284 1.403 0 .487-.092.916-.276 1.288a2.775 2.775 0 0 1-.744.934 3.286 3.286 0 0 1-1.08.574 4.163 4.163 0 0 1-1.284.196h-2.168v-6.02zm8.136 6.019v-6.02h1.326v6.02h-1.326zm4.285-6.02h4.09v1.225h-2.764v1.122h2.611v1.224h-2.611v1.225h2.917v1.224h-4.243v-6.02zm7.006 0h1.803l2.558 4.184h.018V60h1.326v6.019h-1.734l-2.627-4.285h-.018v4.285h-1.326v-6.02zm9.794 1.174h-1.717V60h4.76v1.173h-1.717v4.846h-1.326v-4.846zm8.391.297a.94.94 0 0 0-.437-.3 1.59 1.59 0 0 0-.523-.099 1.35 1.35 0 0 0-.588.14.655.655 0 0 0-.22.192.486.486 0 0 0-.086.288c0 .181.07.321.204.418.137.095.307.177.515.246.206.067.43.136.668.204.237.067.46.164.666.288a1.6 1.6 0 0 1 .515.501c.137.21.204.491.204.843 0 .334-.063.626-.187.875-.125.25-.293.457-.505.62a2.153 2.153 0 0 1-.74.367 3.25 3.25 0 0 1-.889.118 3.2 3.2 0 0 1-1.088-.179 2.732 2.732 0 0 1-.936-.578l.945-1.036c.136.181.307.321.514.42a1.456 1.456 0 0 0 .97.111c.11-.026.208-.064.297-.115a.634.634 0 0 0 .212-.196.486.486 0 0 0 .081-.28.511.511 0 0 0-.209-.43 1.908 1.908 0 0 0-.523-.267 14.798 14.798 0 0 0-.679-.22 3.035 3.035 0 0 1-.68-.299 1.627 1.627 0 0 1-.523-.492c-.139-.204-.209-.473-.209-.808 0-.323.064-.607.191-.85.128-.245.298-.449.51-.612.214-.165.458-.289.736-.37.278-.082.564-.124.858-.124.341 0 .67.05.987.145.317.096.604.257.86.484l-.91.995zM30.893 2.313c3.963-1.23 6.39-.273 7.678.1 1.286.372 3.018 1.425 3.259 1.58.239.148 1.953.457 1.158.833-.797.375-1.177.574-.74 1.158.438.584.438.95.074 1.973-.365 1.021-.365.801.146 2.335.51 1.535 2.117.366 2.483.95.364.584-.292.585-1.176.718-.882.134-2.33-1.157-2.767-1.814-.44-.657-1.68-.657-2.85.731-1.168 1.388 1.315 3.066 1.609 2.41.292-.658 1.386-1.24 1.24-.438-.146.803.73.656 1.46 1.17.73.51.365.875.365.875-.437 1.24-1.68.51-2.117.072-.438-.438-1.973.585-3.651.51-1.68-.072-2.993-1.678-4.017-3.516-1.022-1.837-1.678-2.47-3.067-3.346-1.388-.877-.486-1.43-1.217-2.308-.73-.876-.63.155-2.287.847-2.37.984-.46-3.266 4.417-4.84M23.84 13.644c0-.602 1.51-1.105 3.319-.357 1.808.748.924 2.881 1.362 3.43.437.546.5.038 3.184 1.188 1.709.733 1.667 2.977 1.41 4.51 2.02 2.56 3.28 5.06 3.743 6.853.073-.015.148-.019.224-.019.064 0 .126.007.187.014.786-3.042 3.867-8.11 9.047-12.057-.08-.37-.147-.702-.225-.924-.292-.823-.706-1.299-1.287-1.59-.581-.29.29-1.74 1.597-2.03 1.305-.29.53-1.357 1.11-1.987.582-.628 2.367 1.018 2.94 2.612.134.37.222.762.279 1.15a27.42 27.42 0 0 1 2.627-1.162C51.77 5.69 45.047-.01 36.989-.01c-8.038 0-14.751 5.674-16.358 13.234 1.314.49 2.553 1.07 3.716 1.715-.208-.503-.507-1-.507-1.295m8.915 17.242S19.1 33.075 15.01 17.376c0 0 4.31 12.121 17.745 13.51m8.617 0c13.437-1.389 17.745-13.51 17.745-13.51-4.09 15.7-17.745 13.51-17.745 13.51m-3.756.802H36.51c-2.206-6.506-11.032-18.401-25.517-18.401V15.77c0 1.242 1.388 19.79 24.172 19.79h3.797c22.783 0 24.172-18.549 24.172-19.79v-2.484c-14.485 0-23.312 11.897-25.518 18.402"
              class="fill"
            ></path>
          </svg>
        </div>
        <div className="my-auto text-center">
          <img src={Plant} className="w-full h-12" />
          <span className="text-guap font-bold text-sm">VEGAN PRODUCT</span>
        </div>
        <div className="my-auto text-center">
          <img src={Rabbit} className="w-full h-12" alt="" />
          <span className="text-guap text-sm font-bold">CRUELTY FREE</span>
        </div>
        <div className="my-auto text-center">
          <img src={Recycle} className="w-full h-12" />
          <span className="text-guap text-sm font-bold">
            {" "}
            RECYCLABLE PACKACING
          </span>
        </div>
        <div className="my-auto text-center">
          <img src={Hand} className="w-full h-12" />
          <span className="text-guap text-sm font-bold ">CARBON OFFSET</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-20">
        <div className="text-center">
          <img src={List} className="rounded-lg" />
          <h1 className="text-xl font-bold mt-10 mb-10">OUR NO LIST</h1>
          <p>
            At{" "}
            <span className="italic font-bold text-guap">Herbivore Beauty</span>
            , we say NO to ingredients and processes that cause harm to
            ourselves and the environment we live in. It is our belief that
            everything we need to make the products you love can be found in
            nature.
          </p>
          <button className="p-2 bg-guap text-sm text-white mt-3 rounded">
            FIND OUT MORE
          </button>
        </div>
        <div className="text-center">
          <img src={Bunny} className="rounded-lg" />
          <h1 className="text-xl font-bold mt-10 mb-3">
            WHY SHOPPING CRUELTY FREE IS IMPORTANT
          </h1>
          <p>
            If you're familiar with Sukin Naturals, you probably know that being
            a socially responsible brand is very important to us. Part of that
            commitment is delivering great products that are both vegan and
            always cruelty-free.
          </p>
          <button className="p-2 bg-guap text-sm text-white mt-3 rounded">
            READ MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default Ingredients;
