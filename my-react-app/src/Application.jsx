import * as React from "react";


function MyComponent() { 
    const appointments = [ { name: "Leslie Alexander", email: "lesie.alexander@example.com", date: "10/10/2020", visitTime: "09:15-09:45am", doctor: "Dr. Jacob Jones", condition: "Mumps Stage II", }, { name: "Ronald Richards", email: "ronald.richards@example.com", date: "10/12/2020", visitTime: "12:00-12:45pm", doctor: "Dr. Theresa Webb", condition: "Depression", }, { name: "Jane Cooper", email: "jane.cooper@example.com", date: "10/13/2020", visitTime: "01:15-01:45pm", doctor: "Dr. Jacob Jones", condition: "Arthritis", }, { name: "Robert Fox", email: "robert.fox@gmail.com", date: "10/14/2020", visitTime: "02:00-02:45pm", doctor: "Dr. Arlene McCoy", condition: "Fracture", }, { name: "Jenny Wilson", email: "jenny.wilson@example.com", date: "10/15/2020", visitTime: "12:00-12:45pm", doctor: "Dr. Esther Howard", condition: "Depression", }, { name: "Marshall Cook", email: "marshall.cook@example.com", date: "10/17/2020", visitTime: "01:15-01:45pm", doctor: "Dr. Jacob Jones", condition: "Dyslexia", }, { name: "Stephanie Cook", email: "stephanie.cook@example.com", date: "10/17/2020", visitTime: "02:00-02:45pm", doctor: "Dr. Theresa Webb", condition: "Hypothermia", }, { name: "Marion James", email: "marion.james@example.com", date: "10/18/2020", visitTime: "09:15-09:45am", doctor: "Dr. Esther Howard", condition: "Sunburn", }, { name: "Teresa Holland", email: "teresa.holland@example.com", date: "10/19/2020", visitTime: "12:00-12:45pm", doctor: "Dr. Arlene McCoy", condition: "Diarrhoea", }, { name: "Zachary Marshall", email: "zachary.marshall@example.com", date: "10/20/2020", visitTime: "09:15-09:45am", doctor: "Dr. Arlene McCoy", condition: "Arthritis", }, ]; function AppointmentRow({ appointment }) { return ( <> <div className="flex relative gap-2 self-stretch my-auto text-sm tracking-normal leading-5"> <div className="flex flex-col items-center font-bold whitespace-nowrap text-zinc-800 max-md:hidden"> <div className="self-stretch">{appointment.name}</div> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/552821d2781e723caf456157e263b92fde8fefb1e89ae05bcf2864301eff2f0d?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-9 w-9 aspect-[1.12]" /> </div> <div className="flex flex-col self-end mt-14 text-zinc-600 max-md:mt-10"> <div>{appointment.name}</div> </div> </div> <div className="flex relative gap-5 justify-between self-stretch my-auto text-sm tracking-normal leading-5 text-zinc-600 max-md:flex-wrap"> <div className="flex flex-col justify-end whitespace-nowrap"> <div className="mt-11 max-md:mt-10">{appointment.email}</div> </div> <div className="flex flex-col justify-end whitespace-nowrap"> <div className="mt-11 max-md:mt-10">{appointment.date}</div> </div> <div className="flex flex-col justify-end"> <div className="mt-11 max-md:mt-10">{appointment.visitTime}</div> </div> <div className="flex flex-col justify-end"> <div className="mt-11 max-md:mt-10">{appointment.doctor}</div> </div> <div className="flex flex-col justify-end"> <div className="mt-11 max-md:mt-10">{appointment.condition}</div> </div> </div> </> ); } return ( <main className="flex flex-col self-center mt-12 w-full max-w-[1110px] max-md:mt-10 max-md:max-w-full"> <h1 className="text-4xl font-bold tracking-wide leading-10 text-zinc-800 max-md:max-w-full"> Appointments </h1> <section className="flex flex-col pb-6 mt-7 bg-white rounded-lg shadow-lg max-md:max-w-full"> <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-center px-6 py-px w-full min-h-[617px] max-md:flex-wrap max-md:px-5 max-md:max-w-full"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a175e44c6726dd2ae324cde9448ad3761f317ea32a8068ddd991e297c9716ac7?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="object-cover absolute inset-0 size-full" /> <div className="flex relative gap-2 self-stretch my-auto text-sm tracking-normal leading-5"> <div className="flex flex-col items-center font-bold whitespace-nowrap text-zinc-800 max-md:hidden"> <div className="self-stretch">Name</div> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/552821d2781e723caf456157e263b92fde8fefb1e89ae05bcf2864301eff2f0d?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-9 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91fe7267dbd921b56c3c61a46367292e02fd91f913ec7423d7ed3f387499cf7c?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9769a626b73ab5057022fed3ea8a6b1da71f84dbca292243dc7279f2f69827c?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b330da78be6f0937cc9db88a4095b57a9225f9591edb24cc896e4f9ee59ff303?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a2d43001d135cb68b74511319c71e2d882ff4541754eb45addf3cc59cc6db5?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a89f126d81199a09dbc4a7dcfc37fa70c790a89e1ec0cb6a70aae1faa6628fb5?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcbb87ed81aee0ab296ffc612f335d520ec8a90341c87559fade6b6879bbce1?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50cf472285c29e5cbf027dc88ced332aa096d7ef9f07cba705dd7a24c5f5b489?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da0a8bf46c4b499919180ccaebb833643e995787d8f5ac6ef0489693c1af6a57?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/861d7f5c653f4e36689bf9be12273ca45d445f47a58016a617f4f85c8143c6f2?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="mt-6 w-9 aspect-[1.12]" /> </div> </div> <div className="flex relative gap-5 justify-between self-stretch my-auto text-sm tracking-normal leading-5 text-zinc-600 max-md:flex-wrap"> <div className="flex flex-col justify-end whitespace-nowrap"> <div className="font-bold text-zinc-800">Email</div> </div> <div className="flex flex-col justify-end whitespace-nowrap"> <div className="font-bold text-zinc-800">Date</div> </div> <div className="flex flex-col justify-end"> <div className="font-bold text-zinc-800">Visit Time</div> </div> <div className="flex flex-col justify-end"> <div className="font-bold text-zinc-800">Doctor</div> </div> <div className="flex flex-col justify-end"> <div className="font-bold text-zinc-800">Conditions</div> </div> </div> {appointments.map((appointment, index) => ( <AppointmentRow key={index} appointment={appointment} /> ))} <div className="flex relative gap-2.5 self-stretch max-md:hidden"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db42dbc341f66deb7ae908e729a300e891edaadddde8bac4ca5a6f4fc858f4e2?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="shrink-0 w-5 aspect-[0.03] max-md:hidden" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cefe2c639a5c8a202144254ac3ade940c3ee347bc2cf0d529adead4f9f830c6e?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="shrink-0 w-5 aspect-[0.03] max-md:hidden" /> </div> </div> <div className="flex gap-1 self-start mt-5 ml-6 text-sm tracking-normal leading-4 text-center whitespace-nowrap text-zinc-800 max-md:ml-2.5"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ea99a9c742e652720f2b9030efc637f997989c3d87295174daf54c772f5dfa?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="shrink-0 w-8 aspect-square" /> <div className="flex flex-col flex-1 justify-center text-white"> <div className="justify-center items-center px-3.5 w-8 h-8 bg-blue-600 rounded"> 1 </div> </div> <div className="flex flex-col flex-1 justify-center"> <div className="justify-center px-3.5 py-3 rounded border border-gray-200 border-solid"> 2 </div> </div> <div className="flex flex-col flex-1 justify-center"> <div className="justify-center px-3.5 py-3 rounded border border-gray-200 border-solid"> 3 </div> </div> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b98cf9721e8a10539f90c871ea2a3a1ff39fbd0c200847271b4ac16a87512cb0?apiKey=37ec813b063f430c8cec37fffc22655e&" alt="" className="shrink-0 w-8 aspect-square" /> </div> </section> </main> ); }

    export default MyComponent