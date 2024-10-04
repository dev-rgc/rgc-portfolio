import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row flex-wrap gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mb-2">
        <div className="w-full rounded-lg overflow-hidden md:w-1/2">
          <Carousel />
        </div>
        <div className="flex flex-col mt-2 md:w-1/3 md:ml-2">
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
      </div>
      {/*  <div className="mb-2">
        <div className="w-full  rounded-lg overflow-hidden md:w-1/2">
          <Carousel />
        </div>
      </div> */}
    </motion.div>
  );
}
