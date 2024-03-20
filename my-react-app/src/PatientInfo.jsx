import * as React from "react";

function PatientInformation() {
  return (
    <div className="flex flex-col px-10 py-6 bg-white max-w-[979px] rounded-[62px] max-md:px-5">
      <div className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h2 className="flex-auto text-2xl font-medium text-indigo-950">
          Patient Information
        </h2>
        <div className="flex gap-5 text-sm font-semibold text-white">
          <button className="justify-center px-6 py-2.5 bg-blue-300 rounded-md max-md:px-5">
            Patient List
          </button>
          <button className="justify-center px-6 py-2.5 rounded-md bg-slate-300 max-md:px-5">
            Add Patient
          </button>
        </div>
      </div>
      <div className="flex flex-col px-5 pt-3 pb-6 mt-3.5 bg-white shadow-sm rounded-[47px] max-md:max-w-full">
        <div className="flex z-10 flex-col items-center max-w-full text-lg font-medium whitespace-nowrap text-indigo-950 w-[130px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/973756037ce0e9a33ecfdcfea25a66308b95539cda93a2126593b635f19c71b4?apiKey=37ec813b063f430c8cec37fffc22655e&"
            alt="Patient profile"
            className="w-full shadow-sm aspect-[0.89]"
          />
          <div className="mt-3">Email</div>
        </div>
        <div className="flex flex-col self-center mt-0 max-w-full w-[477px]">
          <h3 className="text-lg font-medium text-indigo-950 max-md:max-w-full">
            About Patient
            <br />
          </h3>
          <p className="mt-5 text-base font-light text-indigo-950 text-opacity-80 max-md:max-w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex z-10 gap-5 self-end mt-7 max-w-full w-[556px] max-md:flex-wrap">
          <div className="flex flex-col self-start">
            <div className="text-lg font-medium text-indigo-950">
              Phone Number
            </div>
            <div className="mt-5 text-base font-light text-indigo-950 text-opacity-80">
              +91 8548521524
            </div>
          </div>
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="text-lg font-medium text-indigo-950">Address</div>
            <div className="mt-4 text-base font-light text-indigo-950 text-opacity-80">
              345, Sarju Appt., Mota Varacha, Surat Gujarat, India.
            </div>
          </div>
        </div>
        <div className="self-start mt-0 ml-12 text-base font-light text-indigo-950 text-opacity-80 max-md:ml-2.5">
          johnsmith@gmail.com
        </div>
      </div>
      <PastVisitHistory />
    </div>
  );
}

function PastVisitHistory() {
  const visitHistory = [
    {
      date: "12 Jan 2022",
      doctor: "Dr.Jacob Ryan",
      treatment: "Check up",
      charges: "$145",
    },
    {
      date: "12 Jan 2022",
      doctor: "Dr.Jacob Ryan",
      treatment: "X-Ray",
      charges: "$52",
    },
    {
      date: "12 Jan 2022",
      doctor: "Dr.Jacob Ryan",
      treatment: "Blood Test",
      charges: "$52",
    },
  ];

  return (
    <div className="flex flex-col self-center px-9 py-10 mt-6 max-w-full bg-white shadow-sm rounded-[47px] w-[625px] max-md:px-5">
      <h2 className="text-2xl font-medium text-indigo-950 max-md:max-w-full">
        Past Visit History
      </h2>
      <div className="justify-center px-8 py-4 mt-7 text-sm font-light bg-indigo-50 text-indigo-950 max-md:px-5 max-md:max-w-full">
        Date Doctor Treatment Charges Actions
      </div>
      {visitHistory.map((visit, index) => (
        <React.Fragment key={index}>
          <VisitHistoryItem {...visit} />
          {index !== visitHistory.length - 1 && (
            <hr className="shrink-0 mt-5 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function VisitHistoryItem({ date, doctor, treatment, charges }) {
  return (
    <div className="flex gap-5 items-center self-end mt-4 max-w-full w-[525px] max-md:flex-wrap">
      <div className="flex-auto self-stretch my-auto text-sm text-rose-50">
        {date}{" "}
        <span className="font-medium text-slate-500">{doctor}</span>{" "}
        <span className="text-rose-50">{treatment}</span>{" "}
      </div>
      <div className="self-stretch my-auto text-sm text-indigo-950">
        {charges}
      </div>
      <div className="flex gap-5 self-stretch">
        <button className="flex flex-col justify-center items-center bg-white rounded-lg shadow-sm h-[30px] w-[30px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fc195e90e74ea3a3e724b2783f9e10c10495c80124ee7d7595e4e3c2b53b7cb?apiKey=37ec813b063f430c8cec37fffc22655e&"
            alt="Edit"
            className="w-4 aspect-square"
          />
        </button>
        <button className="flex flex-col justify-center items-center bg-white rounded-lg shadow-sm h-[30px] w-[30px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39f5e6c8f790a1567c76a3e672fc24f1e69195795122b541b07cdfdac4a14f93?apiKey=37ec813b063f430c8cec37fffc22655e&"
            alt="Delete"
            className="aspect-square w-[15px]"
          />
        </button>
      </div>
    </div>
  );
}
export default PatientInformation