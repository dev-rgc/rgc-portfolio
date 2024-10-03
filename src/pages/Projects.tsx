import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <motion.div
      className="flex flex-row flex-wrap gap-2  w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-1/2 rounded-lg overflow-hidden">
        <Carousel />
      </div>
      <div className="w-1/3 flex flex-col  ml-2 mt-2">
        <p>
          <span className="text-blue-500">NAME:</span> RGC-GUNPLA
        </p>
        <p>
          <span className="text-blue-500">STATUS:</span>
          <span className="text-red-400"> DOWN</span>
        </p>
        <p>
          <span className="text-blue-500">DESCRIPTION:</span> MY PERSONAL
          E-COMERCE
        </p>
        <p>
          <span className="text-blue-500">PROGRESS:</span> 40%
        </p>
        <p>
          <span className="text-blue-500">TECHNOLOGIES:</span> VITE, REACT,
          TYPESCRIPT, TAILWIND, JAVA SPRING, MONGODB, MYSQL
        </p>
      </div>
      {/* <div className="w-1/2">
        <Carousel />
      </div> */}
    </motion.div>
  );
}
