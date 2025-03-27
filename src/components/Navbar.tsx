
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-apple",
        isScrolled ? "py-3 bg-white/90 backdrop-blur-lg shadow-subtle" : "py-5"
      )}
    >
      <nav className="page-container flex items-center justify-between">
        <div className="flex items-center">
          <NavLink 
            to="/" 
            className="font-semibold text-xl tracking-tight mr-8"
          >
            Human Team
          </NavLink>
          
          <ul className="hidden md:flex space-x-1">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `navbar-link ${isActive ? "active" : ""}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `navbar-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `navbar-link ${isActive ? "active" : ""}`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/donate" 
                className={({ isActive }) => 
                  `navbar-link ${isActive ? "active" : ""}`
                }
              >
                Donate
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-900" />
          ) : (
            <Menu size={24} className="text-gray-900" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-apple pt-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="page-container py-5">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink 
                to="/" 
                className="block py-2 text-lg font-medium"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className="block py-2 text-lg font-medium"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className="block py-2 text-lg font-medium"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/donate" 
                className="block py-2 text-lg font-medium"
              >
                Donate
              </NavLink>
            </li>
            <li className="pt-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
