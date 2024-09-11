import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center w-full sticky top-0 z-[1] px-[2em] bg-transparent
  text-[#3a86ff] border-dashed border-2 border-purple-600 h-5"
    >
      <Logo />
      <Nav />
    </header>
  );
}
