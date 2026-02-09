import { Link } from 'react-router-dom';

const Footer = () => {
    const handleSubscribe = () => {
        alert("Subscribed successfully! You'll now receive updates.");
    };

    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">SHOESTORE.</Link>
                        <p className="text-gray-400 text-sm">
                            Premium footwear for the modern era. Designed for comfort, engineered for style.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Shop</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
                            <li><Link to="/shop?category=Men" className="hover:text-white transition-colors">Men</Link></li>
                            <li><Link to="/shop?category=Women" className="hover:text-white transition-colors">Women</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/profile" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link to="/profile" className="hover:text-white transition-colors">Order Status</Link></li>
                            <li><Link to="/profile" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Stay in the loop</h4>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-900 border-none rounded-l-md px-4 py-2 text-white focus:ring-1 focus:ring-gray-700 w-full"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-white text-black px-4 py-2 rounded-r-md font-medium hover:bg-gray-200"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-900 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} SHOESTORE. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
