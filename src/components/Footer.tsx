import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="flex justify-evenly items-center
   w-full h-14 p-0 mt-auto bottom-0
  border-solid border-t-2 border-[#3a86ff] 
  text-[#3a86ff] "
    >
      <a href="github.com/riogarrell" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/riogarrell" target="_blank">
        <FaLinkedin />
      </a>
      <a href="riogarrell@gmail.com" target="_blank">
        <SiGmail />
      </a>
    </footer>
  );
}
