import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center w-full sticky top-0 z-[1] px-[2em] bg-transparent
  text-[#3a86ff]  backdrop-blur-lg  h-[4rem]
  border-4 border-double border-[#3a86ff] rounded-lg"
    >
      <Logo />
      <Nav />
    </header>
  );
}
