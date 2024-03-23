import * as React from "react";

const Logo = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/78d4a200091265d54cebf6602e7f0f981fa1a08cc6a67dd96f0a399205e80435?apiKey=37ec813b063f430c8cec37fffc22655e&"
    alt="Company Logo"
    className="shrink-0 self-start max-w-full aspect-[4] w-[180px]"
  />
);

const NavItem = ({ children }) => (
  <div className="flex flex-col self-stretch py-2.5">
    {children}
    <div className="shrink-0 self-center w-2 h-2 bg-blue-500 rounded" />
  </div>
);

const NavBar = () => (
  <nav className="flex relative justify-center items-center px-16 w-full text-lg leading-7 whitespace-nowrap bg-white shadow-2xl text-neutral-800 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between py-4 max-w-full rounded-md w-[1296px] max-md:flex-wrap">
      <Logo />
      <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
        <NavItem>Home</NavItem>
        <div className="self-stretch my-auto">Features</div>
        <div className="self-stretch my-auto">About</div>
        <div className="self-stretch my-auto">Testimonial</div>
        <div className="self-stretch my-auto">Explore</div>
        <NavItem>FAQ</NavItem>
      </div>
    </div>
  </nav>
);

const HeroContent = () => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex relative flex-col self-stretch pr-11 my-auto font-bold text-white max-md:mt-10 max-md:max-w-full">
      <h1 className="text-6xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        A Complete Health <br /> Care Solution App
      </h1>
      <p className="mt-9 text-lg leading-7 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consetetur sadipscing eserewd diam nonumy
        <br /> eirmod tempor invidunt ut labore.
      </p>
      <button className="justify-center self-start px-14 py-5 mt-10 text-xl leading-8 text-center text-blue-500 bg-white rounded-[50px] max-md:px-5">
        Get Started
      </button>
    </div>
  </div>
);

const HeroImage = () => (
  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex relative flex-col grow justify-center items-start self-stretch px-16 max-md:mt-6 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 max-w-full min-h-[659px] w-[571px] max-md:pl-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fb8ba1e15542ff8986333dc528cc18934e8d6e30eb2fdc3e65139fe3290b6c?apiKey=37ec813b063f430c8cec37fffc22655e&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 w-full min-h-[659px] max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/342b784ccc0580972033c6ab13ecb6d69a4ac73ddc4322e3c4839ad1a7b326c9?apiKey=37ec813b063f430c8cec37fffc22655e&"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb37d54cbfc06355a1d0b30e2ee4c8fe451133fd36a911e691f7f240d3af3bf?apiKey=37ec813b063f430c8cec37fffc22655e&"
            alt="App Screenshot"
            className="w-full shadow-2xl aspect-[0.51]"
          />
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <div className="relative flex-wrap justify-center content-center self-center px-3 mt-16 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <HeroContent />
      <HeroImage />
    </div>
  </div>
);

function MyComponent() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center pb-20 min-h-[959px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f1079be3f9dec72f8864b88ea76a113cedad80ed217fd512a207f9277bb925?apiKey=37ec813b063f430c8cec37fffc22655e&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <NavBar />
      <Hero />
    </div>
  );
}

export default MyComponent;