const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed mb-4">
              Mwema Education Foundation provides education and support to
              underprivileged children in Uganda, creating lasting change
              through community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/volunteer"
                  className="hover:text-white transition-colors"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className="hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-sm"></i>
                <a
                  href="mailto:mwemaeducation@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  mwemaeducation@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-sm"></i>
                <span>+256 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-sm"></i>
                <span>Uganda</span>
              </li>
            </ul>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mwema Education Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
