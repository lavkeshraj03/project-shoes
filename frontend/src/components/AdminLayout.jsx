import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiBox, FiShoppingBag, FiUsers, FiMessageSquare, FiLogOut } from 'react-icons/fi';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const AdminLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const isActive = (path) => {
        return location.pathname === path ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100';
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navItems = [
        { path: '/admin/dashboard', icon: <FiHome size={20} />, label: 'Overview' },
        { path: '/admin/products', icon: <FiBox size={20} />, label: 'Products' },
        { path: '/admin/orders', icon: <FiShoppingBag size={20} />, label: 'Orders' },
        { path: '/admin/users', icon: <FiUsers size={20} />, label: 'Users' },
        { path: '/admin/reviews', icon: <FiMessageSquare size={20} />, label: 'Reviews' },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-10 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-bold tracking-tighter">ADMIN PANEL</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive(item.path)}`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                    >
                        <FiLogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="md:hidden fixed w-full bg-white border-b border-gray-200 z-20 p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">ADMIN PANEL</h1>
                {/* Mobile menu toggle could go here */}
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 pt-20 md:pt-8">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
