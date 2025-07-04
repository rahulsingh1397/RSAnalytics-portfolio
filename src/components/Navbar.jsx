import { useEffect } from "react";
import logo from "../../public/images/RS.jpeg";   

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(5, 5, 5, 0.22)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <a href="#home" className="font-mono text-xl font-bold text-blue-500">
          <img src={logo} alt="RS Analytics Logo" style = {{height : "60px", width: "80px"}}/>
                  </a>

          {/* Mobile Menu Toggle */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-full h-[3px] bg-white my-1 transition-all duration-300 transform"></span>
            <span className="block w-full h-[3px] bg-white my-1 transition-all duration-300 transform"></span>
            <span className="block w-full h-[3px] bg-white my-1 transition-all duration-300 transform"></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 font-bold hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 font-bold hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 font-bold hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 font-bold hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-lg py-10 md:hidden">
          <div className="flex flex-col items-center space-y-6">
            <a
              href="#home"
              className="text-white text-lg font-semibold hover:text-blue-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-lg font-semibold hover:text-blue-500 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white text-lg font-semibold hover:text-blue-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-semibold hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
