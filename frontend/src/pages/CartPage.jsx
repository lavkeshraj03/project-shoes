import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import CartContext from '../context/CartContext';
import Button from '../components/Button';

const CartPage = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping');
    };

    if (cartItems.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h2 className="text-3xl font-bold mb-4">YOUR BAG IS EMPTY.</h2>
                <p className="text-gray-500 mb-8">Once you add something to your bag, it will appear here. Ready to get started?</p>
                <Link to="/shop">
                    <Button variant="primary">Get Started</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold tracking-tighter mb-8">YOUR BAG</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {cartItems.map((item) => (
                        <div key={`${item.product}-${item.size}`} className="flex gap-6 border-b border-gray-100 pb-8">
                            <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between mb-2">
                                    <h3 className="font-medium text-gray-900">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </h3>
                                    <p className="font-medium text-gray-900">${item.price}</p>
                                </div>

                                <p className="text-gray-500 text-sm mb-1">{item.category}</p>
                                <p className="text-gray-500 text-sm mb-4">Size: {item.size}</p>

                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">Qty {item.qty}</div>
                                    <button
                                        onClick={() => removeFromCart(item.product, item.size)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <FiTrash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-8 rounded-lg h-fit">
                    <h2 className="text-xl font-bold mb-6">SUMMARY</h2>

                    <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Estimated Delivery & Handling</span>
                            <span>Free</span>
                        </div>
                    </div>

                    <div className="flex justify-between text-lg font-bold mb-8">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>

                    <Button onClick={checkoutHandler} className="w-full h-12">
                        Member Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
