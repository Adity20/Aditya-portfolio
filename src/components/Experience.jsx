"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Bennett from "../assets/logo-1.webp";

import {
  Json,
  Strat,
  Hack
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Json}
              title="JSON Schema"
              subtitle="Contributor"
              date="January 2024 - present"
              para="- Worked collabartively with developers from different countries to remove the bugs, improving user experience in their main website."
            />
            <Exp_prop
              img={Strat}
              title="Stratosphere Laboratory"
              subtitle="DevSecOps Contibutor"
              date="January 2023 - present"
              para="- For the AIVPN project I worked along with the team to improve the security of the project and implement unit testing."
            />
            <Exp_prop
              img={Bennett}
              title="Alan Turing Club"
              subtitle="Tech Team Member"
              date="Oct 22 - sep 23"
              para="- Worked collaboratively within a team to develop a captivating college social network website."
            />
            <Exp_prop
              img={Hack}
              title="Hacktoberfest'23 Contributor"
              subtitle="Contributor"
              date="October 2023 - November 2023"
              para="- Contributed in open source repositories under the hacktoberfest community. "
            />
            <Exp_prop
              img={Bennett}
              title="Icosmic, Bennett University"
              subtitle="Organizing Team"
              date="Feb 2023"
              para="- Helped in Organizing the first hybrid tech fest event of Bennett University."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
