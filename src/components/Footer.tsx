import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="appFooter">
      <a href="" className="">
        <FaGithub />
      </a>
      <a href="">
        <FaLinkedin />
      </a>
      <a href="">
        <SiGmail />
      </a>
    </footer>
  );
}
