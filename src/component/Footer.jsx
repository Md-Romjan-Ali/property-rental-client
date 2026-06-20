export default function Footer() {
    return (
        <footer className="w-full border-t bg-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Property Dashboard
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            Manage bookings, owners, tenants, and properties in one place.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li className="hover:text-black cursor-pointer">Dashboard</li>
                            <li className="hover:text-black cursor-pointer">Bookings</li>
                            <li className="hover:text-black cursor-pointer">Owners</li>
                            <li className="hover:text-black cursor-pointer">Users</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-3">Contact</h3>
                        <p className="text-sm text-gray-500">
                            Email: support@yourapp.com
                        </p>
                        <p className="text-sm text-gray-500">
                            Location: Dhaka, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Property Dashboard. All rights reserved.</p>

                    <div className="flex gap-4 mt-3 md:mt-0">
                        <span className="hover:text-black cursor-pointer">Privacy</span>
                        <span className="hover:text-black cursor-pointer">Terms</span>
                        <span className="hover:text-black cursor-pointer">Support</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}