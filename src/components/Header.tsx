
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/upload", label: "Upload" },
    { path: "/history", label: "History" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="relative bg-gradient-to-r from-[#B98E57]/20 to-[#5E4022]/20 backdrop-blur-sm border-b border-[#B98E57]/30 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#B98E57] to-[#5E4022] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <span className="text-white text-xl font-bold">𓂀</span>
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-[#5E4022] tracking-wide">
              HieroVision
            </h1>
            <p className="text-xs text-[#5E4022]/70 font-light">Decode Ancient Egypt</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all duration-300 relative",
                "hover:bg-[#B98E57]/20 hover:text-[#5E4022] hover:shadow-md",
                location.pathname === item.path
                  ? "bg-[#B98E57]/30 text-[#5E4022] shadow-md"
                  : "text-[#5E4022]/80"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#B98E57] rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-[#B98E57]/20 transition-colors">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="w-full h-0.5 bg-[#5E4022] rounded"></span>
            <span className="w-full h-0.5 bg-[#5E4022] rounded"></span>
            <span className="w-full h-0.5 bg-[#5E4022] rounded"></span>
          </div>
        </button>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B98E57] to-transparent"></div>
    </header>
  );
};

export default Header;
