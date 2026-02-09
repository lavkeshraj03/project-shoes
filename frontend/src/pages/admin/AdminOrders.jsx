import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import AdminLayout from '../../components/AdminLayout';

const AdminOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${user.token}` },
                };
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders`, config);
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchOrders();
    }, [user.token]);

    const deliverOrderHandler = async (id) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            await axios.put(`${import.meta.env.VITE_API_URL}/api/orders/${id}/deliver`, {}, config);
            // Refresh
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders`, config);
            setOrders(data);
            alert('Order marked as delivered');
        } catch (error) {
            alert('Error updating order');
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Orders</h2>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-sm">Order ID</th>
                                <th className="px-6 py-4 font-semibold text-sm">User</th>
                                <th className="px-6 py-4 font-semibold text-sm">Date</th>
                                <th className="px-6 py-4 font-semibold text-sm">Total</th>
                                <th className="px-6 py-4 font-semibold text-sm">Paid</th>
                                <th className="px-6 py-4 font-semibold text-sm">Delivered</th>
                                <th className="px-6 py-4 font-semibold text-sm text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">#{order._id.substring(0, 8)}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{order.user ? order.user.name : 'Unknown'}</td>
                                    <td className="px-6 py-4 text-gray-500">{order.createdAt ? order.createdAt.substring(0, 10) : 'N/A'}</td>
                                    <td className="px-6 py-4 text-gray-900 font-medium">${order.totalPrice}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.isPaid ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {order.isPaid ? 'Paid' : 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.isDelivered ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {order.isDelivered ? 'Delivered' : 'Processing'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {!order.isDelivered && (
                                            <button
                                                onClick={() => deliverOrderHandler(order._id)}
                                                className="text-xs bg-gray-900 hover:bg-black text-white px-3 py-1.5 rounded transition-colors"
                                            >
                                                Mark Delivered
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminOrders;
