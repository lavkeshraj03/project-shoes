import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';
import Button from '../components/Button';

const CheckoutPage = () => {
    const { user } = useContext(AuthContext);
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/login?redirect=checkout');
        }
        if (cartItems.length === 0) {
            navigate('/cart');
        }
    }, [user, navigate, cartItems]);

    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    const handlePayment = async () => {
        if (!address || !city || !postalCode || !country) {
            alert('Please fill in all fields');
            return;
        }

        try {
            // 1. Create Order in Backend to get Razorpay Order ID
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            };

            // We create the Razorpay order first to get ID
            const { data: razorpayOrder } = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/payment/create-order`,
                { amount: totalPrice },
                config
            );

            // 2. Open Razorpay Options
            const options = {
                key: "test_key_id", // Replace with env var if possible, but Vite needs import.meta.env
                amount: razorpayOrder.amount,
                currency: razorpayOrder.currency,
                name: "Shoe Store",
                description: "Purchase of premium shoes",
                order_id: razorpayOrder.id,
                handler: async function (response) {
                    // 3. Verify Payment and Create Order in DB
                    try {
                        await axios.post(
                            `${import.meta.env.VITE_API_URL}/api/payment/verify-payment`,
                            {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            },
                            config
                        );

                        // 4. Save Order to Database
                        const orderData = {
                            orderItems: cartItems,
                            shippingAddress: { address, city, postalCode, country },
                            paymentMethod: 'Razorpay',
                            itemsPrice,
                            taxPrice,
                            shippingPrice,
                            totalPrice,
                            paymentResult: {
                                id: response.razorpay_payment_id,
                                status: 'COMPLETED',
                                update_time: Date.now(),
                                email_address: user.email,
                            },
                        };

                        await axios.post(`${import.meta.env.VITE_API_URL}/api/orders`, orderData, config);

                        clearCart();
                        navigate('/profile');
                        alert('Order Placed Successfully!');

                    } catch (error) {
                        alert('Payment verification failed');
                        console.error(error);
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                },
                theme: {
                    color: "#000000",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();

        } catch (error) {
            console.error(error);
            alert('Error initiating payment');
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold tracking-tighter mb-8">CHECKOUT</h1>

            <div className="space-y-8">
                {/* Shipping Address */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Country"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between"><span>Items</span><span>${itemsPrice.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Shipping</span><span>${shippingPrice.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Tax</span><span>${taxPrice.toFixed(2)}</span></div>
                        <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
                    </div>

                    <Button onClick={handlePayment} className="w-full">
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
