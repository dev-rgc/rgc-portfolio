import { motion } from "framer-motion";
import Card from "../components/Card";
import Dexp from "../data/work-experience";

export default function About() {
  return (
    <>
      {/* ABOUT */}
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="flex flex-col gap-2  p-3 text-sm text-[#adb5bd] ">
          <p className="">
            I'm a former Site Reliability Engineer for a Cloud Engineering Team,
            having previously worked as an intern. My experience in this
            fast-paced environment at a major tech company exposed me to many
            unfamiliar technologies. While stepping outside my comfort zone was
            challenging, it also provided valuable learning opportunities. Prior
            to this role, I worked in IT technical support and software
            engineering, making my transition to SRE a significant shift.
          </p>
          <p>
            However, I realized that I missed the core aspects of software
            development: writing code, troubleshooting, and the satisfaction of
            overcoming technical challenges. To focus on these areas, I've been
            diligently working through a DIY web development bootcamp focused on
            the MERN stack. While I particularly enjoy building the backend of
            applications, I'm also capable of creating user interfaces.
          </p>
          <p>
            When not coding, I enjoy gaming, spending time with family, and
            watching anime. I'm eager to contribute my skills and knowledge to
            your team.
          </p>
        </div>

        {/* SKILLS */}
        <div className="h-96 overflow-auto mt-3">
          {Dexp.map((data) => (
            <Card
              id={data.id}
              company={data.company}
              title={data["job-title"]}
              desc={data.description}
              skills={data.skills}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
