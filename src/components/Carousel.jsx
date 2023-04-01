import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Carousel({ children: slides }) {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">{slides}</div>
      <div>
        <button>
          <HiChevronLeft size={30} />
        </button>
        <button>
          <HiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
