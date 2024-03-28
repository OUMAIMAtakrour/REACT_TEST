

import * as React from "react";

function Post() {
  return (
    <div className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-9 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className="text-lg tracking-tight leading-10 text-center text-black text-opacity-50 max-md:max-w-full">
                Home <span className="text-black">/</span>{" "}
                <span className="text-black">Post Title</span>
              </div>
              <div className="mt-7 text-5xl font-bold tracking-tighter leading-9 text-black max-md:max-w-full max-md:text-4xl">
                Post Title
              </div>
              <div className="flex gap-5 justify-between mt-4 w-full text-2xl tracking-tight max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3.5 items-center my-auto">
                  <div className="grow self-stretch my-auto text-cyan-300">
                    Author
                  </div>
                  <div className="shrink-0 self-stretch w-px h-8 border border-solid bg-black bg-opacity-50 border-black border-opacity-50" />
                  <div className="flex-auto self-stretch my-auto text-sky-500 leading-[150%]">
                    Category
                  </div>
                  <div className="shrink-0 self-stretch w-px h-8 border border-solid bg-black bg-opacity-50 border-black border-opacity-50" />
                  <div className="flex-auto self-stretch my-auto text-black text-opacity-50">
                    a min ago
                  </div>
                </div>
                <div className="shrink-0 bg-cyan-300 border border-cyan-300 border-solid h-[50px] w-[11px]" />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f65015229bb4546acf887d17b403481c833be4c02c45a3bb09c7ce4d44b3b852?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="mt-4 max-w-full aspect-[2] w-[1109px]"
            />
            <div className="mt-14 mr-14 text-lg tracking-tight leading-8 text-black text-opacity-80 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
              egestas ultrices. Vestibulum et neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
              iaculis finibus egestas. Nam viverra urna quis odio efficitur
              malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
              Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur sed commodo leo.
              Suspendisse potenti. Maecenas gravida ipsum placerat ligula
              posuere, ut rhoncus velit eleifend.
            </div>
            <div className="mt-10 mr-14 text-lg tracking-tight leading-8 text-black text-opacity-80 max-md:mr-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
              egestas ultrices. Vestibulum et neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
              iaculis finibus egestas. Nam viverra urna quis odio efficitur
              malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
              Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur sed commodo leo.
              Suspendisse potenti. Maecenas gravida ipsum placerat ligula
              posuere, ut rhoncus velit eleifend.
            </div>
            <div className="mt-10 mr-14 text-lg tracking-tight leading-8 text-black text-opacity-80 max-md:mr-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit
              egestas ultrices. Vestibulum et neque id ex semper varius a sit
              amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam
              iaculis finibus egestas. Nam viverra urna quis odio efficitur
              malesuada. Maecenas rhoncus enim eu scelerisque rutrum.
              Pellentesque et mollis enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur sed commodo leo.
              Suspendisse potenti. Maecenas gravida ipsum placerat ligula
              posuere, ut rhoncus velit eleifend.
            </div>
            <div className="shrink-0 mt-14 h-px bg-cyan-300 border border-cyan-300 border-solid max-md:mt-10 max-md:max-w-full" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-28 text-lg tracking-tight leading-9 text-sky-500 max-md:mt-10">
            <div className="text-3xl font-bold tracking-tight leading-9 text-black">
              Table of Contents
            </div>
            <div className="mt-10">lorem ipsum</div>
            <div className="mt-6">lorem ipsum</div>
            <div className="flex flex-col self-start mt-6 ml-5 max-md:ml-2.5">
              <div>lorem ipsum</div>
              <div className="self-start mt-6 ml-5 max-md:ml-2.5">
                lorem ipsum
              </div>
            </div>
            <div className="mt-6">lorem ipsum</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5">
      <div className="w-full text-2xl tracking-tight text-black text-opacity-80 max-md:max-w-full">
        More Posts
      </div>
      <div className="mt-9 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold tracking-tight leading-9 text-black text-opacity-80 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa02698adb1b5e9c5608f074fe141d279ac2b5e0493aa7a3ad7ca553cb25e50b?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="w-full aspect-[2]"
              />
              <div className="mt-5">Post Title</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold tracking-tight leading-9 text-black text-opacity-80 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa02698adb1b5e9c5608f074fe141d279ac2b5e0493aa7a3ad7ca553cb25e50b?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="w-full aspect-[2]"
              />
              <div className="mt-5">Post Title</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold tracking-tight leading-9 text-black text-opacity-80 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa02698adb1b5e9c5608f074fe141d279ac2b5e0493aa7a3ad7ca553cb25e50b?apiKey=37ec813b063f430c8cec37fffc22655e&"
                className="w-full aspect-[2]"
              />
              <div className="mt-5">Post Title</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full text-3xl tracking-tight leading-8 text-black max-md:mt-10 max-md:max-w-full">
        Comments
      </div>
      <div className="flex gap-5 justify-between self-center mt-8 w-full text-base tracking-tight leading-6 max-w-[773px] text-black text-opacity-50 max-md:flex-wrap max-md:max-w-full">
        <div className="justify-center px-9 py-4 whitespace-nowrap bg-white rounded-md border border-solid border-black border-opacity-50 max-md:px-5">
          Username...
        </div>
        <div className="justify-center items-center px-16 py-4 bg-white rounded-md border border-solid border-black border-opacity-50 max-md:px-5 max-md:max-w-full">
          Your Comment...
        </div>
        <div className="flex flex-col justify-center font-medium text-center text-white whitespace-nowrap">
          <div className="justify-center px-7 py-4 bg-sky-500 rounded-md max-md:px-5">
            Comment
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-start self-start pt-4 pr-12 pb-7 pl-5 mt-7 text-lg tracking-tight rounded-md bg-stone-300 bg-opacity-30 max-md:flex-wrap max-md:px-5">
        <div className="flex flex-col items-center whitespace-nowrap leading-[167%] text-black text-opacity-80">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d9a7ab8376e5b5b2ee5779205f08887919e4f5c8b3c243235b57924740e7321?apiKey=37ec813b063f430c8cec37fffc22655e&"
            className="aspect-square w-[74px]"
          />
          <div className="mt-3">user</div>
        </div>
        <div className="flex flex-col grow shrink-0 mt-3 basis-0 w-fit max-md:max-w-full">
          <div className="leading-8 text-black text-opacity-80 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
          </div>
          <div className="flex gap-5 self-start mt-6 leading-[167%]">
            <div className="text-black text-opacity-50">Reply</div>
            <div className="text-sky-500 text-opacity-50">a min ago</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Post


