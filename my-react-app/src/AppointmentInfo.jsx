import * as React from "react";

function AppointmentInfo({ label, info }) {
    return (
      <>
        <div className="font-bold text-zinc-800">{label}</div>
        <div className="mt-11 max-md:mt-10">{info}</div>
      </>
    );
  }
export default AppointmentInfo;
  