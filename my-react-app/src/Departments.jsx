

import * as React from "react";

function Departments() {
  return (
    <div className="flex flex-col px-5 mt-16">
      <div className="self-center text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
        OUR DEPARTMENTS
      </div>
      <div className="flex flex-wrap mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-end px-16 text-6xl font-light whitespace-nowrap min-h-[254px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="rectangle-department relative justify-center items-start px-8 pt-28 pb-20 max-w-full rounded-none bg-white bg-opacity-60 w-[355px] max-md:px-5 max-md:text-4xl">
                Pediatrics
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-end px-16 text-6xl font-light min-h-[254px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className=" rectangle-department relative justify-center items-start px-14 pt-28 pb-24 max-w-full rounded-none bg-white bg-opacity-60 w-[355px] max-md:px-5 max-md:text-4xl">
                Neurology{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-end px-16 text-6xl font-light whitespace-nowrap min-h-[254px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className=" rectangle-department relative justify-center items-start px-8 pt-28 pb-20 max-w-full rounded-none bg-white bg-opacity-60 w-[355px] max-md:px-5 max-md:text-4xl">
                Pediatrics
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-end px-16 text-6xl font-light min-h-[254px] text-neutral-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b18e3f8f820a12203be8cba0dfa23d8fde58e16ad46bc6e494926d6a302a640?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="rectangle-department relative justify-center items-start px-14 pt-28 pb-24 max-w-full rounded-none bg-white bg-opacity-60 w-[355px] max-md:px-5 max-md:text-4xl">
                Neurology{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
export default Departments


