
import AdminPropertyUpdate from '@/component/updateHandle/AdminPropertyHandle';
import { totalPorperty } from '@/lib/admin/getadmin';
import { getOwnerData } from '@/lib/owner/ownerget';
import { userSession } from '@/lib/session';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const OwnerPropertyTable = async () => {

    // const properties = [
    //     {
    //         _id: "6a3529682816dff715b6ce58",
    //         propertyName: "silent killer home alone",
    //         location: "dfgdf",
    //         propertyType: "Apartment",
    //         rentyType: "Yearly",
    //         monthlyRent: "",
    //         size: "4555",
    //         bedrooms: "4",
    //         bathrooms: "5",
    //         extraFeature: "sddfasdf,asdfasasdf",
    //         image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    //         description: "dfgdfgh",
    //         aminity: "Swimming Pool",
    //         amenities: ["Parking", "Generator", "Swimming Pool"],
    //         userId: "6a33aad3d9ba6022dca516dc",
    //         createdAt: "2026-06-19" // Added placeholder date
    //     }
    // ];


    // const handleUpdate = (id) => {
    //     console.log(`Update property with ID: ${id}`);
    // };

    // const handleDelete = (id) => {
    //     console.log(`Delete property with ID: ${id}`);
    // };

    // const properties = await getOwnerData()
    const properties = await totalPorperty()
    console.log(properties, 'from get owner data');
    return (
        <div className="max-w-5xl p-4">
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-sm font-light text-gray-900">
                    <thead className="bg-gray-50 text-[14px] uppercase font-medium text-gray-500 tracking-wider">
                        <tr>
                            <th scope="col" className="px-6 py-4">Image</th>
                            <th scope="col" className="px-6 py-4">Property Name</th>
                            <th scope="col" className="px-6 py-4">MonthlyRent</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {properties.map((property) => (
                            <tr key={property._id} className="hover:bg-gray-50 transition-colors">
                                {/* Image Column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Image
                                        className="h-14 w-20 object-cover rounded-md shadow-sm border border-gray-100"
                                        src={property.image}
                                        alt={property.propertyName}
                                        width={50}
                                        height={50}
                                    />
                                </td>
                                {/* Property Name Column */}
                                <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 capitalize">
                                    {property?.propertyName}
                                </td>
                                {/* Create Date Column */}
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                    {property?.monthlyRent}
                                </td>
                                {/* status */}
                                <td
                                    className={`px-6 text-[14px] py-4 whitespace-nowrap font-semibold ${property?.status === "Approved"
                                        ? "text-green-600"
                                        : property?.status === "Rejected"
                                            ? "text-red-600"
                                            : property?.status === "Pending"
                                                ? "text-yellow-600"
                                                : "text-gray-500"
                                        }`}
                                >
                                    {property?.status}
                                </td>
                                {/* Action Buttons Column */}
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex justify-center items-center space-x-3">
                                        <AdminPropertyUpdate id={property._id} />

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OwnerPropertyTable;