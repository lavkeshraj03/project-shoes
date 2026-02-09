import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AuthContext from '../context/AuthContext';
import AdminLayout from '../components/AdminLayout';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
        totalSales: 0,
        totalOrders: 0,
        totalUsers: 0,
        totalProducts: 0
    });
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${user.token}` },
                };

                const { data: productsData } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
                const { data: ordersData } = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders`, config);
                const { data: usersData } = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`, config);

                // Calculate Stats
                const totalSales = ordersData.reduce((acc, order) => acc + (order.isPaid ? order.totalPrice : 0), 0);

                setStats({
                    totalSales: totalSales.toFixed(2),
                    totalOrders: ordersData.length,
                    totalUsers: usersData.length,
                    totalProducts: productsData.length
                });

                // Prepare Chart Data (Mocking monthly data for demo purposes as real data might be sparse)
                // In a real app, you'd aggregate this on the backend
                const data = [
                    { name: 'Jan', sales: 4000 },
                    { name: 'Feb', sales: 3000 },
                    { name: 'Mar', sales: 5000 },
                    { name: 'Apr', sales: 4500 },
                    { name: 'May', sales: 6000 },
                    { name: 'Jun', sales: 5500 },
                ];
                setSalesData(data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [user.token]);

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tighter">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back, Admin</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Sales</h3>
                    <p className="text-3xl font-bold mt-2">${stats.totalSales}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Orders</h3>
                    <p className="text-3xl font-bold mt-2">{stats.totalOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Users</h3>
                    <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Products</h3>
                    <p className="text-3xl font-bold mt-2">{stats.totalProducts}</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Sales Overview</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="sales" fill="#111827" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Could add another chart or recent activity here */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                    <div className="space-y-4">
                        <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors font-medium">
                            Add New Product
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors font-medium">
                            View Pending Orders
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors font-medium">
                            Manage Users
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
