import Profile from "../components/Profile";
import { motion } from "framer-motion";
import Me from "../assets/images/profile/selfme.jpg";
export default function Home() {
  return (
    <motion.div
      className="border-double border-4 border-[#3a86ff] rounded-lg w-full p-5
      shadow-md shadow-white text-center
      flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {/* <Profile /> */}
      <img src={Me} className="object-fill rounded-full size-48" />
      <p className="mt-3">Software Engineer</p>
      <p className="text-2xl text-[#f8f9fa] font-bold mt-4 p-0">
        Hey, I'm Rio Garrell Conge, you can call me Rio/RG.
      </p>
      <p className="m-0 p-0">
        I am an explorer, looking for my purpose in life in the world of I.T. I
        am eager to contribute to innovative projects and collaborate with a
        team of skilled professionals, good communication and a team leader.
        Particularly interested in back-end development, eager to learn and grow
        in a dynamic environment.
      </p>
      <div className="flex flex-row justify-center gap-2 mt-4">
        <p>GitHub: github.com/riogarrell</p>
        <p>LinkedIn: linkedin.com/in/riogarrell</p>
        <p>Gmail: riogarrell@gmail.com</p>
      </div>
    </motion.div>
  );
}
