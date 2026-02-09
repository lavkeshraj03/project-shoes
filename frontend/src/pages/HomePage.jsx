import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [casualProducts, setCasualProducts] = useState([]);
    const [sportProducts, setSportProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
                setProducts(data);

                // Filter for Casual (Lifestyle)
                const casual = data.filter(p => p.category === 'Lifestyle');
                setCasualProducts(casual.slice(0, 4));

                // Filter for Sport (Running, Basketball, Training, etc)
                const sport = data.filter(p => ['Running', 'Basketball', 'Training'].includes(p.category));
                setSportProducts(sport.slice(0, 4));

            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <Hero />

            {/* Featured Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-3xl font-bold tracking-tighter">FEATURED DROPS</h2>
                    <a href="/shop" className="text-sm font-medium underline underline-offset-4">View All</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

            {/* Casual Shoes Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-3xl font-bold tracking-tighter">CASUAL COLLECTION</h2>
                        <a href="/shop" className="text-sm font-medium underline underline-offset-4">View Casual</a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
                        {casualProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Sport Shoes Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-3xl font-bold tracking-tighter">SPORT & PERFORMANCE</h2>
                    <a href="/shop" className="text-sm font-medium underline underline-offset-4">View Sport</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
                    {sportProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

            {/* Brand/Banner Section */}
            <div className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                        WE ENGINEER COMFORT.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Our designs are driven by innovation and structured for performance.
                        Every stitch, every sole, every detail is crafted to elevate your production.
                    </p>
                    <a href="/shop" className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                        Explore Technology
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
