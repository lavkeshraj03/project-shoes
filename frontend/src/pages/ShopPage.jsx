import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ShopContext from '../context/ShopContext';

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { filters, updateFilters } = useContext(ShopContext);
    const location = useLocation();

    // Fetch all products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5001/api/products');
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

    // Apply Filters and URL Query Params
    useEffect(() => {
        let result = products;

        // URL Query Param for Category
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category');

        if (categoryParam) {
            result = result.filter(p => p.category === categoryParam);
        }

        // Filter by Brand
        if (filters.brand.length > 0) {
            result = result.filter(p => filters.brand.includes(p.brand));
        }

        setFilteredProducts(result);
    }, [filters, products, location.search]);

    const handleBrandChange = (brand) => {
        const newBrands = filters.brand.includes(brand)
            ? filters.brand.filter(b => b !== brand)
            : [...filters.brand, brand];
        updateFilters({ brand: newBrands });
    };

    const brands = ['Nike', 'Adidas', 'Puma', 'New Balance'];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar Filters */}
                <div className="w-full md:w-64 space-y-8">
                    <div>
                        <h3 className="font-bold mb-4">Brands</h3>
                        <div className="space-y-2">
                            {brands.map((brand) => (
                                <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.brand.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                        className="rounded border-gray-300 text-black focus:ring-black"
                                    />
                                    <span className="text-sm text-gray-600">{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Size and Price filters can go here */}
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold tracking-tighter mb-8">ALL PRODUCTS</h1>
                    {filteredProducts.length === 0 ? (
                        <p>No products found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
