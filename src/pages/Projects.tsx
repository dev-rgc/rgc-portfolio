import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <motion.div
      className="container myCard flex justify-center gap-2 flex-wrap mt-20 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="carousel rounded-lg"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{
          x: window.innerWidth,
          opacity: 0,
          transition: { duration: 0.1 },
        }}
      >
        <Carousel />
      </motion.div>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </motion.div>
  );
}
