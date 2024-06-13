import React from "react";
import Quote from "../icons/quote.tsx";

export interface QuoteProps {
  text: string;
  name: string;
}

const QuoteText = ({ text, name }: QuoteProps) => {
  return (
    <div className="flex w-full h-[100%] max-w-full lg:max-w-[80%] content-center justify-center">
      <div className="flex flex-col w-full items-center justify-center gap-4 lg:gap-8 lg:mx-[-30px]">
        <Quote />
        <h4 className="text-[20px] leading-[33px] lg:text-[35px] lg:leading-[43.75px] italic tracking-wide font-dm text-gray-200 text-center">
          {text}
        </h4>
        <p className="text-gray-200 text-base tracking-tight lg:text-[25px] font-jost lg:leading-[37px] text-center ">
          {" "}
          {`-${name}`}{" "}
        </p>
      </div>
    </div>
  );
};

export default QuoteText;
