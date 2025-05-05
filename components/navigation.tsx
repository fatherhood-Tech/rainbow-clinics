"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const services = [
    { href: "/services#prenatal-care", label: "Prenatal Care" },
    { href: "/services#pregnancy-support", label: "Pregnancy Support" },
    { href: "/services#high-risk-pregnancy", label: "High-Risk Pregnancy Care" },
    { href: "/services#mental-health", label: "Mental Health Support" },
    { href: "/services#postnatal-care", label: "Postnatal Care" },
    { href: "/services#family-planning", label: "Family Planning" },
    { href: "/services#support-programs", label: "Support Programs" }
  ];

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { type: "dropdown", label: "Services", items: services },
    // { href: "/projects/prenatal-loss", label: "Prenatal Loss Services" },
    // { href: "/projects/health-equity", label: "Health Equity" },
    { href: "/doctors", label: "Doctors" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, backgroundColor: scrollY.get() > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent" },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              {/* <Heart className="h-8 w-8 text-pink-500" /> */}
              <img src="/logo.png" className="h-12 w-10 text-pink-500" alt="" />
              <span className="text-xl font-bold text-white">Rwanda Perinatal Loss Project</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.type === 'dropdown' ? 'services' : item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.type === 'dropdown' && setIsServicesOpen(true)}
                onMouseLeave={() => item.type === 'dropdown' && setIsServicesOpen(false)}
              >
                {item.type === 'dropdown' ? (
                  <button
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-sky-200 transition-colors duration-300 flex items-center"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-sky-200 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.type === 'dropdown' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isServicesOpen ? 1 : 0,
                      y: isServicesOpen ? 0 : 10,
                      pointerEvents: isServicesOpen ? "auto" : "none"
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-64 mt-2 bg-white rounded-md shadow-lg py-2"
                  >
                    {item.items.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-900 transition-colors duration-150"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-sky-200 inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
              item.type === 'dropdown' ? (
                <div key="services" className="space-y-1">
                  <div className="px-3 py-2 text-white font-medium">
                    {item.label}
                  </div>
                  {item.items.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white pl-6"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-sky-200 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}