import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { cartItems } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tighter">
                        SHOESTORE.
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
                        <Link to="/shop?category=Men" className="text-gray-600 hover:text-black transition-colors">Men</Link>
                        <Link to="/shop?category=Women" className="text-gray-600 hover:text-black transition-colors">Women</Link>
                        <Link to="/shop?category=Kids" className="text-gray-600 hover:text-black transition-colors">Kids</Link>
                        <Link to="/shop" className="text-gray-600 hover:text-black transition-colors">All</Link>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        {user ? (
                            <div className="relative group">
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
                                    <FiUser size={20} />
                                    <span className="text-sm font-medium">{user.name}</span>
                                </button>
                                {/* Dropdown */}
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</Link>
                                    {user.isAdmin && (
                                        <Link to="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Dashboard</Link>
                                    )}
                                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login" className="text-gray-600 hover:text-black">Login</Link>
                        )}

                        <Link to="/cart" className="relative text-gray-600 hover:text-black">
                            <FiShoppingBag size={20} />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-4">
                        <Link to="/" className="block text-gray-600 py-2">Home</Link>
                        <Link to="/shop?category=Men" className="block text-gray-600 py-2">Men</Link>
                        <Link to="/shop?category=Women" className="block text-gray-600 py-2">Women</Link>
                        <Link to="/shop?category=Kids" className="block text-gray-600 py-2">Kids</Link>
                        <Link to="/shop" className="block text-gray-600 py-2">All Products</Link>
                        <Link to="/cart" className="block text-gray-600 py-2">Cart ({cartItems.length})</Link>
                        {user ? (
                            <>
                                <Link to="/profile" className="block text-gray-600 py-2">Profile</Link>
                                <button onClick={logout} className="block text-red-600 py-2">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" className="block text-gray-600 py-2">Login</Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
