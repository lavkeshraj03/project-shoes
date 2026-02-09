import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FiTrash2 } from 'react-icons/fi';
import AuthContext from '../../context/AuthContext';
import AdminLayout from '../../components/AdminLayout';

const AdminUsers = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${user.token}` },
                };
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`, config);
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, [user.token]);

    const deleteUserHandler = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/users/${id}`, config);
            setUsers(users.filter(u => u._id !== id));
        } catch (error) {
            alert('Error deleting user');
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Users</h2>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-sm">Name</th>
                                <th className="px-6 py-4 font-semibold text-sm">Email</th>
                                <th className="px-6 py-4 font-semibold text-sm">Role</th>
                                <th className="px-6 py-4 font-semibold text-sm text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                                    <td className="px-6 py-4 text-gray-500">
                                        <a href={`mailto:${user.email}`} className="hover:text-black hover:underline">{user.email}</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.isAdmin ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                Admin
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                User
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {!user.isAdmin && (
                                            <button
                                                onClick={() => deleteUserHandler(user._id)}
                                                className="inline-block p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                            >
                                                <FiTrash2 size={18} />
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

export default AdminUsers;
