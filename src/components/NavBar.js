
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Displays the navigation menu
const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // a Function that handles menu visibility
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[100] hidden justify-center px-4 py-6 font-['Inter',sans-serif] min-[641px]:flex">
        <div
          className="
            flex items-center gap-2
            rounded-full
            border border-white/10
            bg-white/[0.06]
            p-[0.35rem]
            backdrop-blur-[12px]
            shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
          "
        >

          <div className="h-5 w-px shrink-0 bg-white/15" />

          <ul className="flex list-none gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`
                      block whitespace-nowrap
                      rounded-full
                      px-[0.9rem] py-[0.4rem]
                      text-[0.85rem]
                      font-medium
                      no-underline
                      transition-[color,background] duration-200
                      motion-reduce:transition-none
                      ${
                        isActive
                          ? "bg-white text-[#111827] !font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
                          : "text-[#9ca3af] hover:bg-white/10 hover:text-[#f9fafb]"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-5 w-px shrink-0 bg-white/15" />

          <button
            type="button"
            className="
              shrink-0 cursor-pointer
              rounded-full border-0
              bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]
              px-[1.1rem] py-[0.4rem]
              font-['Inter',sans-serif]
              text-[0.85rem] font-semibold text-white
              shadow-[0_2px_8px_rgba(99,102,241,0.4)]
              transition-[opacity,transform] duration-200
              hover:scale-[0.97] hover:opacity-85
              motion-reduce:transition-none
            "
          >
            Get access
          </button>
        </div>
      </nav>

      <div className="sticky top-0 z-[100] font-['Inter',sans-serif] min-[641px]:hidden">
        {/* Mobile Header */}
        <div
          className="
            flex items-center justify-between
            border-b border-white/[0.08]
            bg-[rgba(10,10,10,0.9)]
            px-5 py-3
            backdrop-blur-[12px]
          "
        >

          <button
            type="button"
            onClick={handleClick}
            aria-label="Toggle menu"
            aria-expanded={isVisible}
            aria-controls="mobile-nav-links"
            className="
              flex cursor-pointer flex-col gap-1
              border-0 bg-transparent p-[6px]
            "
          >
            <span
              className={`
                block h-[1.5px] w-5
                rounded-[2px] bg-[#f9fafb]
                transition-[transform,opacity] duration-300
                motion-reduce:transition-none
                ${
                  isVisible
                    ? "translate-y-[5.5px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                block h-[1.5px] w-5
                rounded-[2px] bg-[#f9fafb]
                transition-[transform,opacity] duration-300
                motion-reduce:transition-none
                ${isVisible ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                block h-[1.5px] w-5
                rounded-[2px] bg-[#f9fafb]
                transition-[transform,opacity] duration-300
                motion-reduce:transition-none
                ${
                  isVisible
                    ? "-translate-y-[5.5px] -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>

        <div
          id="mobile-nav-links"
          className={`
            ${isVisible ? "flex" : "hidden"}
            flex-col gap-1
            border-b border-white/[0.08]
            bg-[rgba(10,10,10,0.95)]
            px-5 py-4
            backdrop-blur-[12px]
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsVisible(false)}
              className="
                block rounded-lg
                px-3 py-[0.6rem]
                text-[0.95rem] font-medium
                text-[#9ca3af] no-underline
                transition-[background,color] duration-150
                hover:bg-white/[0.06] hover:text-[#f9fafb]
                motion-reduce:transition-none
              "
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/get-access"
            onClick={() => setIsVisible(false)}
            className="
              block rounded-lg
              px-3 py-[0.6rem]
              text-[0.95rem] font-semibold
              text-[#818cf8] no-underline
              transition-[background,color] duration-150
              hover:bg-white/[0.06]
              motion-reduce:transition-none
            "
          >
            Get access →
          </Link>
        </div>
      </div>

    </>
  );
};

export default NavBar;
