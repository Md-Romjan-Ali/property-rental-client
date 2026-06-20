import { getUserData } from "@/lib/admin/getadmin";
import Image from "next/image";


export default async function UserTable() {
    const allusers = await getUserData()

    //   const handleRoleChange = (id, newRole) => {
    //     const updated = data.map((user) =>
    //       user._id.$oid === id ? { ...user, role: newRole } : user
    //     );
    //     setData(updated);

    //     // এখানে API call করতে পারো
    //     console.log("Update role:", id, newRole);
    //   };

    //   const handleAction = (id) => {
    //     console.log("Action clicked for:", id);
    //     // delete / ban / edit etc
    //   };

    return (
        <div className="p-4">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">Image</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Role</th>
                        <th className="p-3 text-left">Update Role</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {allusers.map((user) => (
                        <tr key={user._id} className="border-t">
                            {/* Image */}
                            <td className="p-3">
                                <Image
                                    src={user?.image}
                                    height={70}
                                    width={70}
                                    alt="user"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </td>

                            {/* Name */}
                            <td className="p-3">{user?.name}</td>

                            {/* Email */}
                            <td className="p-3">{user?.email}</td>
                            <td className="p-3">{user?.role}</td>
                            {/* Role Select */}
                            <td className="p-3">
                                <select
                                    value={user.role}
                                    className="border p-1 rounded"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="tenant">Tenant</option>
                                    <option value="owner">Owner</option>
                                </select>
                            </td>

                            {/* Action Button */}
                            <td className="p-3">
                                <button
                                    // onClick={() => handleAction(user._id.$oid)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}