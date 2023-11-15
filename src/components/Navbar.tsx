import { PageButton } from "./PageButton";
function Navbar() {
    return (
      <nav className="flex justify-start w-full fixed top-0 left-0 bg-gray-200">
        <h1 className="p-2 text-3xl"><a href="/">TTasker</a></h1>
        <ul className="flex">
          <PageButton name="Library" href="/library" />
          <PageButton name="About" href="/about" />
          <PageButton name="Contact" href="/contact" />
        </ul>
      </nav>
    );
  }
  
  export default Navbar;