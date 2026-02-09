import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FiStar } from 'react-icons/fi';
import CartContext from '../context/CartContext';
import Button from '../components/Button';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5001/api/products/${id}`);
                setProduct(data);
                setSelectedImage(data.image);
                if (data.sizes && data.sizes.length > 0) {
                    setSelectedSize(data.sizes[0]);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product && selectedSize) {
            addToCart(product, 1, selectedSize);
            alert('Added to cart!'); // Replace with toast later
        }
    };

    if (!product) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img src={selectedImage || product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    {product.images && product.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    className={`aspect-square rounded-md overflow-hidden border-2 ${selectedImage === img ? 'border-black' : 'border-transparent'}`}
                                >
                                    <img src={img} alt={`View ${index}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Details */}
                <div>
                    <h2 className="text-sm text-gray-500 font-semibold tracking-wide uppercase">{product.brand}</h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 my-2">{product.name}</h1>

                    <div className="flex items-center space-x-2 mb-6">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <FiStar key={i} className={i < Math.floor(product.rating) ? "fill-current" : ""} />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm">({product.numReviews} reviews)</span>
                    </div>

                    <p className="text-2xl font-medium text-gray-900 mb-6">${product.price}</p>

                    <div className="prose prose-sm text-gray-600 mb-8">
                        <p>{product.description}</p>
                    </div>

                    {/* Size Selector */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-900 mb-4">Select Size</h3>
                        <div className="grid grid-cols-4 gap-4">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-3 text-sm font-medium rounded-md border ${selectedSize === size
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-200 text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button onClick={handleAddToCart} className="w-full">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
