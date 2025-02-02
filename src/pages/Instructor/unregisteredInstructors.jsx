import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const UnregisteredInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchInstructors = async () => {
            try {
                const response = await axiosPublic.get('/unregisteredInstructors');
                setInstructors(response.data);
            } catch (error) {
                console.error('Error fetching unregistered instructors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstructors();
    }, [axiosPublic]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="text-xl">Loading...</span>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-6">Unregistered Instructors</h2>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">No.</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">ID</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">University ID</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {instructors.map((instructor, index) => (
                            <tr key={instructor._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{instructor._id}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{instructor.universityId}</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-200 text-orange-800">
                                        Unregistered
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="mt-4 text-gray-600 text-sm">
                Total Unregistered Instructors: {instructors.length}
            </div>
        </div>
    );
};

export default UnregisteredInstructors;