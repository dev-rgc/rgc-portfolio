import Profile from "../components/Profile";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Profile />
      <p className="text-2xl text-[#f8f9fa] font-bold m-0 p-0">
        Hey, I'm Rio Garrell Conge, but you can call me RG or Rio.
      </p>
      <p className="m-0 p-0">
        I am an explorer, looking for my purpose in life in the world of I.T.
        I'm looking for a team that are has a skill
      </p>
    </motion.div>
  );
}
