import React from "react";
import work from "/assets/suitcase.png";

export default function Experience() {
  return (
    <div className="pt-10 md:pt-20 pb-20 flex flex-col gap-12 px-5 lg:px-10" id="experience">
      <div className="flex items-center gap-4">
        <span className="text-2.5xl lg:text-4xl poppins-medium">Work Experience</span>
        <img className="h-8 sm:h-10" src={work} alt="" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="">
          <div className="text-lg text-1.5xl font-semibold">
            Programmer Analyst Intern
          </div>
          <div className="sm:text-lg italic mt-2">
            Cognizant Technology Solutions
          </div>
          <div className="italic lg:text-lg mt-3">December, 2023 - Present</div>
          <div className="text-sm lg:text-xl mt-10 pl-5 md:pl-10 border-l-2 border-l-zinc-300 leading-8 relative italic tracking-wide">
          Excelled in diverse technologies including Python, SQL, JSON, and Unix within the AIA-IICS-Informatica PowerCenter domain. <br /> Achieved an exceptional 98% score in the initial Qualifier and attained a green status in the Interim evaluation. Acquired expertise in data warehouse management, Informatica PowerCenter, IICS cloud integration, and Big Data principles.
            <div className="h-3 w-3 rounded-full top-0 left-[-7px] absolute bg-violet-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
