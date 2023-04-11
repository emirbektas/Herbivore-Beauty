import React from "react";

function Footer() {
  return (
    <div>
      <div className="banner"></div>
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
    </div>
  );
}

export default Footer;
