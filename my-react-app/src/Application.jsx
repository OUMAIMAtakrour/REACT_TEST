import * as React from "react";

function CallToAction() {
  return (
    <div className="flex flex-col pr-1.5 pb-11 pl-20 mt-80 w-full rounded-2xl max-w-[1467px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="z-10 mt-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-56 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-7xl font-semibold text-zinc-100 max-md:max-w-full max-md:text-4xl">
                Don't Let Your Health <br /> Take a Backseat!
              </h2>
              <p className="self-start mt-10 ml-4 text-2xl font-medium text-blue-900 text-opacity-90 max-md:max-w-full">
                Schedule an appointment with one of our <br /> experienced medical professional today!
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92751bb29279779beae1c29ec41a5294c658d039e446477f6ef8383574c3236?apiKey=37ec813b063f430c8cec37fffc22655e&"
              alt="A doctor examining a patient"
              className="grow w-full rounded-full border-2 border-solid aspect-[0.96] border-zinc-300 max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <button className="justify-center self-start px-5 py-4 ml-2.5 text-xl font-medium text-white bg-indigo-500 rounded-xl">
        Book Now &gt;
      </button>
    </div>
  );
}

function ServiceCard({ icon, title, buttonText }) {
  return (
    <div className="flex flex-col self-stretch px-5 py-5 m-auto w-full bg-white rounded-3xl shadow-sm max-md:pl-5 max-md:mt-10">
      <div className="flex gap-5 justify-between w-full">
        <img loading="lazy" src={icon} alt="" className="shrink-0 aspect-[0.92] w-[93px]" />
        <div className="flex gap-0 self-start mt-1">
          <div className="z-10 shrink-0 my-auto h-2" />
          <div className="shrink-0 w-2 h-9" />
        </div>
      </div>
      <h3 className="mt-14 text-3xl text-black max-md:mt-10">{title}</h3>
      <button className="justify-center self-end px-5 py-4 mt-16 text-xl text-white rounded-xl max-md:pr-5 max-md:mt-10">
        {buttonText}
      </button>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7690dd5ee961e3e0afeb92ecead2760498bcbd6f432a5b3188c39988d96ff519?apiKey=37ec813b063f430c8cec37fffc22655e&",
      title: "Make an appointment",
      buttonText: "Learn more",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cbcae40c61ed716ecc8357cdf9862c1039ce0ed787f268e819a32ca6a593ffc?apiKey=37ec813b063f430c8cec37fffc22655e&",
      title: "Online Pharmacy",
      buttonText: "Learn more",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8534e4316c23a0cc6b7fa42ddace242999b2fbbd1ae8402a4c4756f8f20e5f66?apiKey=37ec813b063f430c8cec37fffc22655e&",
      title: "Doctor's Community",
      buttonText: "Learn more",
    },
  ];

  return (
    <section>
      <h2 className="mt-32 text-6xl font-bold text-indigo-700 max-md:mt-10 max-md:text-4xl">Our Services</h2>
      <div className="self-stretch px-20 mt-32 w-full rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, title, description }) {
  return (
    <div className="flex flex-col grow mt-6 max-md:mt-10">
      <div className="flex justify-center items-center self-center px-9 py-8 max-w-full rounded-2xl border-sky-700 border-solid border-[3px] w-[164px] max-md:px-5">
        <img loading="lazy" src={icon} alt="" className="w-full aspect-[0.93]" />
      </div>
      <h3 className="mt-9 text-3xl font-bold leading-9 text-center text-indigo-800">{title}</h3>
      <p className="mt-7 text-xs text-center text-blue-900">{description}</p>
    </div>
  );
}

function Steps() {
  const steps = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb36840ab04ab63167480d68fd1399663400c14885725b1476578e02a838dc7c?apiKey=37ec813b063f430c8cec37fffc22655e&",
      title: "Search For Doctor",
      description:
        "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a67c24ba817e2bbcc7a7f76a0e456c367d8c41785a99e16b91f169ea54f2637?apiKey=37ec813b063f430c8cec37fffc22655e&",
      title: "Request Consultation",
      description:
        "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67e5268f928b2b9f827994d38f45e03a94a107e07084dfdeee2fdc2c7a0fe973?apiKey=37ec813b063f430c8cec37fffc22655e&",
      title: "Make Appointment",
      description:
        "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fcdd40a4fbad08cf4ddc80fb0ebcfee0075fe99ca5a5a871322be1c74d71540?apiKey=37ec813b063f430c8cec37fffc22655e&",
      title: "Drug Notificatio",
      description:
        "We are committed to providing you with the best medical and healthcare services to help you live healthier and happier",
    },
  ];

  return (
    <section>
      <h2 className="mt-40 text-6xl font-bold text-center text-indigo-700 leading-[72px] w-[675px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Easy steps for your solution
      </h2>
      <div className="px-5 mt-14 w-full max-w-[1269px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <StepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header>
      <div className="flex gap-5 justify-between items-start px-5 w-full max-w-[1345px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b432cb591b4d011fa7a847841418b94e35926d33f8fa73c04366ea82188eabe?apiKey=37ec813b063f430c8cec37fffc22655e&"
          alt="Company logo"
          className="shrink-0 self-stretch rounded-full bg-zinc-300 h-[93px] w-[93px]"
        />
        <div className="flex gap-3 max-md:flex-wrap">
          <div className="flex flex-auto gap-0.5">
            <input
              type="text"
              placeholder="Search for doctors"
              aria-label="Search for doctors"
              className="shrink-0 self-start border-2 border-black border-solid bg-white bg-opacity-60 h-[89px] rounded-[52.313px] w-[242px]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="shrink-0 rounded-full border-2 border-black border-solid bg-white bg-opacity-60 h-[91px] stroke-[2px] w-[91px]"
            >
              <span className="sr-only">Search</span>
            </button>
          </div>
          <button
            type="button"
            aria-label="Profile"
            className="shrink-0 rounded-full border-2 border-black border-solid bg-white bg-opacity-60 h-[91px] stroke-[2px] w-[91px]"
          >
            <span className="sr-only">Profile</span>
          </button>
        </div>
        <div className="flex gap-5 justify-between mt-2.5">
          <button
            type="button"
            aria-label="Menu"
            className="shrink-0 bg-zinc-300 h-[60px] rounded-[37.352px] w-[173px]"
          >
            <span className="sr-only">Menu</span>
          </button>
          <div className="flex flex-col justify-center items-start py-5 bg-zinc-300 rounded-[37.352px]">
            <div className="shrink-0 bg-zinc-300 h-[25px]" />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pl-14 mt-32 max-w-full rounded-3xl w-[1363px] max-md:pl-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl font-bold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
              A Complete Health Care Solution App
            </h1>
            <p className="mx-4 mt-8 text-xl text-blue-900 max-md:mr-2.5 max-md:max-w-full">
              We are committed to providing you with the best medical and healthcare services to help you live healthier and happier
            </p>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 py-11 mx-auto w-full text-white rounded-3xl bg-white bg-opacity-30 max-md:pr-5 max-md:mt-10">
                    <h2 className="text-4xl font-semibold">Heath + Lifeline</h2>
                    <a
                      href="tel:1860-500-1066"
                      className="flex gap-3 px-3.5 py-1.5 mt-2.5 text-2xl font-medium whitespace-nowrap rounded-2xl border-2 border-white border-solid"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b432cb591b4d011fa7a847841418b94e35926d33f8fa73c04366ea82188eabe?apiKey=37ec813b063f430c8cec37fffc22655e&"
                        alt=""
                        className="shrink-0 aspect-[0.61] fill-blue-900 w-[19px]"
                      />
                      <span className="flex-auto my-auto">1860-500-1066</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-9 pt-12 pb-6 mx-auto w-full text-white whitespace-nowrap rounded-3xl bg-white bg-opacity-30 max-md:px-5 max-md:mt-10">
                    <h2 className="text-4xl font-semibold">EMERGENCY</h2>
                    <a
                      href="tel:1066"
                      className="flex gap-5 self-start px-5 py-2 mt-4 ml-3.5 text-3xl font-medium rounded-2xl border-2 border-white border-solid max-md:ml-2.5"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f181f7ec51f10fd2993ede8bf0a7434cfb6a17f6f7ac2a159519992f50f0e5bc?apiKey=37ec813b063f430c8cec37fffc22655e&"
                        alt=""
                        className="shrink-0 aspect-[0.71] fill-blue-900 w-[22px]"
                      />
                      <span className="my-auto">1066</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee115acefa10ecbed63e15a890c39f69eb61a3b24203e8e3daa47b1e9ca7130f?apiKey=37ec813b063f430c8cec37fffc22655e&"
            alt="A doctor examining a patient"
            className="z-10 self-stretch my-auto w-full aspect-[0.96] max-md:mt-0 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
export default Steps