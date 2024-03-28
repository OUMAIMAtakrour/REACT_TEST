import * as React from "react";

function FAQ() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col pb-5 bg-white rounded-md shadow-sm max-md:max-w-full">
              <div className="justify-center items-start px-6 py-5 text-lg font-bold leading-7 bg-white text-blue-950 max-md:px-5 max-md:max-w-full">
                Can I make an online appointment?
              </div>
              <div className="self-start mt-2 ml-6 text-base leading-6 text-slate-500 max-md:max-w-full">
                Lorem ipsum dolor samet consenter discing elitr, serewd diam
                nonumy
                <br />
                eirmod tempor invidunt.Lorem ipsum colewort samet consenter
                discing
                <br />
                elitr.
              </div>
            </div>
            <div className="flex flex-col justify-center mt-5 text-lg font-bold leading-7 bg-white rounded-md shadow-sm text-blue-950 max-md:max-w-full">
              <div className="justify-center items-start px-6 py-5 bg-white max-md:px-5 max-md:max-w-full">
                How can I Select a best doctor?
              </div>
            </div>
            <div className="flex flex-col justify-center mt-5 text-lg font-bold leading-7 bg-white rounded-md shadow-sm text-blue-950 max-md:max-w-full">
              <div className="justify-center items-start px-6 py-5 bg-white max-md:px-5 max-md:max-w-full">
                How can i edit my personal information?
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow items-end px-16 pt-6 min-h-[737px] max-md:mt-3 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex overflow-hidden relative flex-col items-end px-16 pt-14 max-w-full min-h-[713px] w-[462px] max-md:pl-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="w-full shadow-2xl aspect-[0.51]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default FAQ


