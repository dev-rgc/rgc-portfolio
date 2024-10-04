import Profile from "../components/Profile";
import { motion } from "framer-motion";
import Me from "../assets/images/profile/selfme.jpg";
export default function Home() {
  return (
    <motion.div
      className="w-full  text-center
      flex flex-col items-center justify-center
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {/* <Profile /> */}
      <img
        src={Me}
        className="rounded-full size-52 max-w-full object-cover align-middle bg-no-repeat bg-cover"
      />
      <p className="mt-3">Software Engineer</p>
      <p className="text-2xl text-[#f8f9fa] font-bold mt-4 p-0">
        Hey, I'm Rio Garrell Conge, you can call me Rio/RG.
      </p>
      <p className="mt-2">
        Seeking to explore the field of software engineering, leveraging my
        current technical skills and knowledge. Eager to contribute to
        innovative projects and collaborate effectively with team leaders and
        skilled professionals. Particularly interested in back-end development,
        I am eager to learn and grow in a dynamic environment.
      </p>
    </motion.div>
  );
}
