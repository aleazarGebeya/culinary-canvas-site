import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-orange-400 mb-4">Karibu Bites</h3>
          <p className="text-gray-400">Savor the Taste of Africa.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/menu" className="text-gray-400 hover:text-orange-400">Menu</Link></li>
            <li><Link to="/reservations" className="text-gray-400 hover:text-orange-400">Reservations</Link></li>
            <li><Link to="/chefs" className="text-gray-400 hover:text-orange-400">Our Chefs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <p className="text-gray-400">123 Jollof Drive, Nairobi, Kenya</p>
          <p className="text-gray-400">contact@karibubites.com</p>
          <p className="text-gray-400">+254 700 123 456</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-400">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-orange-400">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-orange-400">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
        <p>&copy; 2025 Karibu Bites. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;