import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Reservations', href: '/reservations' },
  { name: 'Our Chefs', href: '/chefs' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <Link to='/' className='text-2xl font-bold text-orange-400'>
            Karibu Bites
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className='text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300'
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className='hidden md:block'>
            <Button asChild className='bg-orange-500 hover:bg-orange-600 text-white'>
              <Link to='/reservations'>Book a Table</Link>
            </Button>
          </div>

          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-gray-300 hover:text-white'>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden bg-gray-800 absolute w-full'
        >
          <nav className='flex flex-col items-center space-y-4 py-6'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className='text-lg font-medium text-gray-300 hover:text-orange-400 transition-colors duration-300'
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className='bg-orange-500 hover:bg-orange-600 text-white mt-4'>
              <Link to='/reservations' onClick={() => setIsOpen(false)}>Book a Table</Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;