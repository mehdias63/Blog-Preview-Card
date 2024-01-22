import React from "react";

export default function Blog() {
  return (
    <div className="w-[20.4375rem] lg:w-[24rem] bg-white p-6 rounded-2xl border-2 border-black border-solid font-fig shadow-[8px_8px_0_0_#000] lg:shadow-[16px_16px_0_0_#000]">
      <div>
        <img
          src="/images/illustration-article.svg"
          className="rounded-xl"
        />
        <button
          className="bg-dark-yellow py-1 px-4 text-xs font-extrabold rounded-[4px] mt-6 mb-4
      lg:text-[0.875rem]"
        >
          Learning
        </button>
        <h5 className="font-medium text-xs leading-[1.125rem] lg:text-[0.875rem] lg:leading-[1.3125rem]">
          Published 21 Dec 2023
        </h5>
        <h1 className="font-extrabold text-xl my-4 hover:text-dark-yellow cursor-pointer lg:text-2xl lg:leading-9">
          HTML & CSS foundations
        </h1>
        <p className="font-medium text-[0.875rem] text-[#7F7F7F] leading-[1.3125rem] mb-6 lg:text-base lg:leading-6">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <img src="/images/image-avatar.webp" className="w-8" />
        <h3 className="font-extrabold text-[0.875rem] leading-[1.3125rem]">
          Greg Hooper
        </h3>
      </div>
    </div>
  );
}
