import {
  Users,
  HelpCircle,
  ChevronRight,
  Power,
  LayoutDashboard,
  StarHalf,
  ShoppingCart,
  ShieldCheck,
  Menu,
} from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, isMobileOpen, toggleMobileSidebar, makeSidebarOpen } =
    useSidebar();
  const sidebarRef = useRef(null);
  const location = useLocation();

  const menuSections = [
    {
      title: "Menu",
      items: [
        { icon: <LayoutDashboard size={19} />, text: "Dashboard", route: "admin/Dashboard" },
        { icon: <Users size={19} />, text: "Users", route: "/users" },
        { icon: <ShoppingCart size={19} />, text: "Products", route: "/products" },
        { icon: <StarHalf size={19} />, text: "Testimonials", route: "admin/addTestimonial" },
      ],
    },
    {
      title: "Security",
      items: [{ icon: <ShieldCheck size={19} />, text: "Privacy", route: "/privacy" }],
    },
    {
      title: "Support",
      items: [
        { icon: <HelpCircle size={19} />, text: "Help", route: "/help" },
      ],
    },
    {
      title: "Settings",
      items: [
        { icon: <Power size={19} color="red" />, text: "Logout", route: "/logout" },
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        makeSidebarOpen();
      }
    };

    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) && 
        window.innerWidth < 768 && 
        isMobileOpen
      ) {
        toggleMobileSidebar();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen, toggleMobileSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed md:relative h-screen flex flex-col overflow-y-scroll overflow-x-hidden scrollbar-none border-r border-gray-800 ${
        isOpen ? "w-64" : "w-24"
      } bg-[#181c29] text-white transition-all duration-500 z-50 ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* Logo Area */}
      <div className="p-4 border-b bg-gray-800 border-gray-700">
        {!isOpen ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
          </div>
        ) : (
          <div className="flex items-center space-x-3 justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              <span className="font-bold text-xl">Cliq</span>
            </div>
            <div>
              <button
                onClick={toggleMobileSidebar}
                className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors sm:hidden"
              >
                <Menu className="w-5 h-5 text-gray-400 hover:text-gray-100" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Menu Sections */}
      <nav className="mt-6 flex-grow">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {isOpen && (
              <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase mb-4">
                {section.title}
              </h3>
            )}
            {section.items.map((item, itemIndex) => (
              <Link 
                to={item.route}
                key={itemIndex}
                className={`flex items-center ${
                  isOpen && "pl-8"
                } p-4 py-2 my-7 pr-6 hover:bg-gray-700 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer ${
                  !isOpen ? "justify-center" : "space-x-4 justify-between"
                } ${location.pathname === item.route ? "bg-gray-700 text-blue-500" : ""}`}
              >
                <div className="flex items-center gap-5">
                  <span className="text-sm hover:text-blue-500">
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className="text-sm font-bold">{item.text}</span>
                  )}
                </div>

                {isOpen && <ChevronRight size={17} />}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      {/* Version Section */}
      <div className="border-t border-gray-700 py-3 sm:py-2 px-8 bg-gray-800">
        <div className={`flex ${isOpen ? "justify-between" : "justify-center"} items-center`}>
          <span className="text-gray-400 text-xs">
            {isOpen ? "Version" : "V"}
          </span>
          {isOpen && (
            <span className="text-gray-200 text-xs font-semibold">1.0.0</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;