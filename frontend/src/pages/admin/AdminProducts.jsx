import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiPlus, FiEdit } from 'react-icons/fi';
import AuthContext from '../../context/AuthContext';
import AdminLayout from '../../components/AdminLayout';

const AdminProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('http://localhost:5001/api/products');
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

    const createProductHandler = async () => {
        if (!window.confirm('Create a new product?')) return;
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            const { data } = await axios.post('http://localhost:5001/api/products', {}, config);
            navigate(`/admin/product/${data._id}/edit`);
        } catch (error) {
            alert('Error creating product');
        }
    };

    const deleteProductHandler = async (id) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            await axios.delete(`http://localhost:5001/api/products/${id}`, config);
            setProducts(products.filter(p => p._id !== id));
        } catch (error) {
            alert('Error deleting product');
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Products</h2>
                <button
                    onClick={createProductHandler}
                    className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                    <FiPlus /> Create Product
                </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-sm">Image</th>
                                <th className="px-6 py-4 font-semibold text-sm">Name</th>
                                <th className="px-6 py-4 font-semibold text-sm">Price</th>
                                <th className="px-6 py-4 font-semibold text-sm">Category</th>
                                <th className="px-6 py-4 font-semibold text-sm">Brand</th>
                                <th className="px-6 py-4 font-semibold text-sm text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map((product) => (
                                <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <img src={product.image} alt="" className="w-10 h-10 object-cover rounded-md bg-gray-100" />
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                                    <td className="px-6 py-4 text-gray-500">${product.price}</td>
                                    <td className="px-6 py-4 text-gray-500">{product.category}</td>
                                    <td className="px-6 py-4 text-gray-500">{product.brand}</td>
                                    <td className="px-6 py-4 text-right space-x-2">
                                        <Link to={`/admin/product/${product._id}/edit`} className="inline-block p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                            <FiEdit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => deleteProductHandler(product._id)}
                                            className="inline-block p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
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

export default AdminProducts;
