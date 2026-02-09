import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders/myorders`, config);
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (user) {
            fetchOrders();
        }
    }, [user]);

    if (!user) return <div className="text-center py-20">Please login to view profile.</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold tracking-tighter mb-8">MY ACCOUNT</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Profile Info */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Profile</h2>
                    <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
                    <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                </div>

                {/* Orders */}
                <div className="md:col-span-2">
                    <h2 className="text-xl font-bold mb-4">Order History</h2>
                    {orders.length === 0 ? (
                        <p className="text-gray-500">No orders found.</p>
                    ) : (
                        <div className="space-y-6">
                            {orders.map((order) => (
                                <div key={order._id} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="font-bold text-sm text-gray-900">Order ID: {order._id}</p>
                                            <p className="text-xs text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg">${order.totalPrice}</p>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {order.isPaid ? 'Paid' : 'Not Paid'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {order.orderItems.map((item, index) => (
                                            <div key={index} className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">{item.name} x {item.qty} (Size: {item.size})</span>
                                                <span>${item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <h4 className='font-bold mt-2'> Shipping Address</h4>
                                    <address className="space-y-2 text-sm">
                                        {order.shippingAddress.address}<br />
                                        {order.shippingAddress.city}<br />
                                        {order.shippingAddress.postalCode}<br />
                                        {order.shippingAddress.country}<br />
                                    </address>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
