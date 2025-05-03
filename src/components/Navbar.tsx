import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, BellPlus } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Season 1', url: '/season1' },
    { title: 'Season 2', url: '/season2' },
    { title: 'Mentors', url: '/mentors' },
    { title: 'Sponsors', url: '/sponsors' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' }
  ];

  const season1Links = [
    { title: 'Recap', url: '/season1' },
    { title: 'Winners', url: '/season1/winners' },
    { title: 'Photos', url: '/season1/gallery' },
  ];

  const season2Links = [
    { title: 'Overview', url: '/season2' },
    { title: 'Tracks', url: '/season2/tracks' },
    { title: 'Timeline', url: '/season2/timeline' },
    { title: 'FAQ', url: '/season2/faq' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7640f347-266e-4d89-83b9-0b84145a7bc7.png" 
              alt="BPS Hackathon Logo" 
              className="h-20 w-auto object-contain"  // Increased logo size with object-contain to maintain aspect ratio
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link to="/" className={`relative px-3 py-2 rounded-md transition-colors ${
                    isActive('/') ? 'text-hackathon-purple' : 'text-white hover:text-hackathon-purple'
                  }`}>
                    Home
                    {isActive('/') && (
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-hackathon-purple" 
                        layoutId="navbar-indicator"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent hover:bg-hackathon-navy/30 focus:bg-transparent rounded-md ${
                    location.pathname.includes('/season1') ? 'text-hackathon-purple' : 'text-white hover:text-hackathon-purple'
                  }`}>
                    Season 1
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 bg-black/95 backdrop-blur-md border border-white/10 rounded-md">
                      <div className="grid grid-cols-2 gap-3">
                        {season1Links.map((link) => (
                          <Link
                            key={link.title}
                            to={link.url}
                            className={`block select-none space-y-1 rounded-md p-3 ${
                              isActive(link.url) ? 'bg-hackathon-purple/20 text-hackathon-purple' : 'hover:bg-hackathon-purple/10 text-white'
                            }`}
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent hover:bg-hackathon-navy/30 focus:bg-transparent rounded-md ${
                    location.pathname.includes('/season2') ? 'text-hackathon-purple' : 'text-white hover:text-hackathon-purple'
                  }`}>
                    Season 2
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 bg-black/95 backdrop-blur-md border border-white/10 rounded-md">
                      <div className="grid grid-cols-2 gap-3">
                        {season2Links.map((link) => (
                          <Link
                            key={link.title}
                            to={link.url}
                            className={`block select-none space-y-1 rounded-md p-3 ${
                              isActive(link.url) ? 'bg-hackathon-purple/20 text-hackathon-purple' : 'hover:bg-hackathon-purple/10 text-white'
                            }`}
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {['Mentors', 'Sponsors', 'About', 'Contact'].map((item) => (
                  <NavigationMenuItem key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className={`relative px-3 py-2 rounded-md transition-colors ${
                        isActive(`/${item.toLowerCase()}`) ? 'text-hackathon-purple' : 'text-white hover:text-hackathon-purple'
                      }`}
                    >
                      {item}
                      {isActive(`/${item.toLowerCase()}`) && (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-hackathon-purple" 
                          layoutId="navbar-indicator"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="bg-hackathon-purple hover:bg-hackathon-cyan text-white gap-2 group relative overflow-hidden">
              <span className="relative z-10">Get Notified</span>
              <BellPlus className="relative z-10 w-4 h-4" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-hackathon-cyan to-hackathon-purple opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 bg-black/90 backdrop-blur-lg rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={link.url} 
                    className={`text-white hover:text-hackathon-purple py-2 border-b border-gray-700 block ${
                      isActive(link.url) ? 'text-hackathon-purple' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Button className="bg-hackathon-purple hover:bg-hackathon-cyan text-white w-full gap-2">
                  <span>Get Notified</span>
                  <BellPlus className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
