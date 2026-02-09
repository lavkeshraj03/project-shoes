import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product, 1, product.sizes[0]);
    };

    return (
        <Link to={`/product/${product._id}`} className="group">
            <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />

                {/* Quick Add Button */}
                <button
                    onClick={handleAddToCart}
                    className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
                >
                    <FiShoppingBag size={20} />
                </button>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
