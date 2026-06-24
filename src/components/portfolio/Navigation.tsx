import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";

interface NavigationProps {
  activeSection: string;
}

const MAIN_NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: portfolio.socials.github,
    label: "GitHub",
    ariaLabel: "GitHub profile",
  },
  {
    icon: Linkedin,
    href: portfolio.socials.linkedin,
    label: "LinkedIn",
    ariaLabel: "LinkedIn profile",
  },
];

export function Navigation({ activeSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a nav item
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden transition-all duration-300 lg:flex lg:items-center lg:justify-center ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(0, 0, 0, 0.4)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.3)"
            : "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="w-full max-w-7xl px-6 sm:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                K
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                K RAJ
              </span>
            </a>

            {/* Navigation Items */}
            <nav className="flex items-center gap-8">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="relative text-white text-sm font-medium transition-all duration-300 group"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-orange-500" : "group-hover:text-orange-500"
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Animated underline */}
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scaleX: isActive ? 1 : 0.8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Side - Resume Button + Social Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Resume Button */}
              <motion.a
                href="#resume"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </motion.a>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-9 w-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                      aria-label={social.ariaLabel}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header
        className="fixed inset-x-0 top-0 z-50 flex lg:hidden items-center justify-center transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(0, 0, 0, 0.4)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.3)"
            : "0 4px 12px rgba(0, 0, 0, 0.1)",
          height: scrolled ? "64px" : "80px",
        }}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                K
              </div>
              <span className="text-white font-semibold text-sm">K RAJ</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              style={{ backdropFilter: "blur(4px)" }}
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-gradient-to-b from-gray-950 to-black border-l border-white/10 lg:hidden"
            >
              <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
                <a href="#home" onClick={handleNavClick}>
                  <span className="text-white font-semibold">K RAJ</span>
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col overflow-y-auto max-h-[calc(100vh-80px)]">
                {/* Main Navigation */}
                <nav className="flex flex-col divide-y divide-white/5 py-4">
                  {MAIN_NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={handleNavClick}
                        className={`px-6 py-4 text-base font-medium transition-colors ${
                          isActive
                            ? "text-orange-500 bg-white/5"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>

                {/* Resume Button */}
                <div className="p-6 border-t border-white/5">
                  <a
                    href="#resume"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 active:scale-95"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Resume</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="p-6 border-t border-white/5 flex items-center justify-center gap-4">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="h-11 w-11 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/10"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navbar height spacer */}
      <div
        className="h-20 lg:h-20"
        style={{ height: scrolled ? "64px" : "80px" }}
      />
    </>
  );
}
