import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  // Toggle Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  //state to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center">
          <div className="h-10 w-10 rounded-xl bg-[#cd2028] flex items-center justify-center text-[#ffffff] font-bold text-xl mr-3 shadow-lg">
            S
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#edeae1] to-[#ffffff] bg-clip-text text-transparent">
            Sourav
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative text-[#edeae1] hover:text-[#cd2028] transition-colors duration-300 group font-semibold"
                href={`#${item.toLowerCase()}`}>
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cd2028] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* Social icons - Desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-[#edeae1] hover:text-[#166c96] transition-colors duration-300"
            href="#"
            aria-label="GitHub">
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-[#edeae1] hover:text-[#166c96] transition-colors duration-300"
            href="#"
            aria-label="LinkedIn">
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-[#edeae1] hover:text-[#cd2028] transition-colors duration-300"
            href="#"
            aria-label="Instagram">
            <FiInstagram className="w-5 h-5" />
          </motion.a>

          {/* Contact me button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-sky-500 text-white font-bold hover:bg-blue-900 hover:text-gray-100 transition-all duration-500 shadow-lg"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-[#edeae1]">
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
      {/*Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-[#1b2651] px-4 py-5 space-y-5">
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                onClick={toggleMenu}
                className="text-[#edeae1] font-medium py-2 hover:text-[#cd2028] transition-colors"
                key={item}
                href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            )
          )}
        </nav>

        <div className="pt-4 border-t border-[#edeae1]">
          <div className="flex space-x-5">
            <a href="#" aria-label="GitHub">
              <FiGithub className="h-5 w-5 text-[#edeae1] hover:text-[#166c96]" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin className="h-5 w-5 text-[#edeae1] hover:text-[#166c96]" />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram className="h-5 w-5 text-[#edeae1] hover:text-[#cd2028]" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-[#166c96] font-bold text-[#ffffff] hover:bg-[#cd2028] hover:text-[#edeae1] transition-all duration-500 shadow">
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* {contact form} */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 30,
              }}
              className="bg-[#edeae1] dark:bg-[#1b2651] rounded-xl shadow-xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-[#1b2651] dark:text-[#edeae1]">
                  Get in Touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-[#1b2651] dark:text-[#edeae1] font-extrabold" />
                </button>
              </div>
              {/* Input Forms */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1b2651] dark:text-[#edeae1] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-[#166c96] rounded-lg focus:ring-2 focus:ring-[#cd2028] focus:border-[#cd2028] bg-[#ffffff] dark:bg-[#1b2651] text-[#1b2651] dark:text-[#edeae1]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1b2651] dark:text-[#edeae1] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-[#166c96] rounded-lg focus:ring-2 focus:ring-[#cd2028] focus:border-[#cd2028] bg-[#ffffff] dark:bg-[#1b2651] text-[#1b2651] dark:text-[#edeae1]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1b2651] dark:text-[#edeae1] mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-2 border border-[#166c96] rounded-lg focus:ring-2 focus:ring-[#cd2028] focus:border-[#cd2028] bg-[#ffffff] dark:bg-[#1b2651] text-[#1b2651] dark:text-[#edeae1]"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-[#cd2028] hover:bg-[#166c96] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#166c96]/60 font-bold text-[#ffffff] hover:text-[#edeae1]">
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
