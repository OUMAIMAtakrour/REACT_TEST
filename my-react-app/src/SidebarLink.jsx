import * as React from "react";

function SidebarLink() {
  return (
    <div className="flex flex-col justify-center text-xl font-bold tracking-normal leading-5 text-green-700 bg-white max-w-[256px]">
      <div className="flex flex-col justify-center py-px w-full bg-white">
        <div className="flex flex-col items-start pt-8 pb-20 pl-5 w-full bg-lime-100">
          <div className="flex gap-px self-stretch text-3xl text-green-300">
            <div>
              <span className="font-bold">UR</span> HEALT
              <span className="font-light text-green-300">H</span>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7654a1920072f51978062746d0f8a057266d92152d1e2765cd85d3c3e46e4a6e?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 w-8 aspect-[1.28]"
            />
          </div>
          <div className="flex gap-3 mt-32 ml-6 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d175cdeadb52601b0ac9320765c9fe1f18db9548958fcda6f0206792582d911?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 w-4 aspect-square"
            />
            <div>Dashboard</div>
          </div>
          <div className="flex gap-3 self-stretch px-4 py-4 mt-9 whitespace-nowrap bg-neutral-100 rounded-[30px_0px_0px_30px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be8ba57f80b95a6259df4303cd2e5ca6b266f6b016fcebad439de5886dcdc9f4?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div className="flex-auto">Appointments</div>
          </div>
          <div className="flex gap-3 mt-6 ml-6 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8366f4ee0120e011f6fb04dede579aee3095152f4715f4a22031fcff1501161c?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 w-4 aspect-square"
            />
            <div>Doctors</div>
          </div>
          <div className="flex gap-3 self-center mt-11 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6547fd00aa6de702332ff72acda54911f671e15c0dd3c9112f5391c29ba3d320?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div className="flex-auto">Departments</div>
          </div>
          <div className="flex gap-3 mt-10 ml-7 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0c024aebc497eba7fcac1c75f7211c937dd8c12b09d8ad95420a2959870c5ef?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 w-4 aspect-square"
            />
            <div>Patients</div>
          </div>
          <div className="flex gap-3 mt-24 mb-52 ml-7 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3640804635c60e314962c3ebc1907bff02048336e19a4a3a4f6d6687b37ea30b?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div>Help</div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default SidebarLink;
  