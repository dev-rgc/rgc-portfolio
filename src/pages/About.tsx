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
            I am a former SRE (Site Reliability Engineer) for a Cloud
            Engineering Team, but before that, I started as an intern. In my
            experience, I encountered many unfamiliar technologies, and it was a
            very fast-paced environment (well, because it’s one of the biggest
            companies in Silicon Valley).
          </p>
          <p>
            Working outside my comfort zone was very challenging, but the upside
            was that I learned a lot of new things. Why do I say "outside my
            comfort zone"? Before this role, I worked in I.T. technical support
            and then moved into Software Engineering, so suddenly jumping to SRE
            was completely new to me. It was the first time I had even heard of
            it—lol.
          </p>
          <p>
            However, as time went on, I began to feel like something was missing
            in my life. I missed writing code, struggling with bugs, and the
            rewarding feeling when you finally solve a problem—it’s like
            unlocking a new achievement—lol.
          </p>
          <p>
            Moving forward, my main focus these days is building web
            applications. I’ve been diligently working through my DIY web
            development bootcamp (focused on the MERN stack). I mostly enjoy
            creating the backbone of an app rather than the user interfaces, but
            I’m capable of doing both. When I’m not at the computer, I’m usually
            playing mobile MOBA and PC open-world games, hanging out with my
            wife and daughter, or watching anime and movies.
          </p>
          <p>
            I’m looking forward to the opportunity to work with your team. Thank
            you, and God bless!
          </p>
        </div>

        {/* SKILLS */}
        <div className="h-[35rem] overflow-auto mt-4">
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
