

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