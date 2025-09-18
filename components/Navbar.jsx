"use client";
import { useState } from "react";
import { Menu, Bell, Home, Search, Plus } from "lucide-react";

export default function Navbar() {
    const [search, setSearch] = useState("");

    return (
        <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm border-b border-gray-100">
            {/* Left Side */}
            <div className="flex items-center gap-4">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Menu className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                </button>
                <span className="text-2xl font-bold text-black tracking-tight">Terra</span>
            </div>

            {/* Center - Search Bar */}
            <div className="flex-1 mx-8 max-w-md">
                <div className="relative">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here"
                        className="w-full px-4 py-2.5 pr-10 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white placeholder-gray-500"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Search className="w-4 h-4 text-purple-500" />
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                {/* Home Link */}
                <button
                    onClick={() => alert("Home clicked")}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                    <Home className="w-4 h-4" />
                    <span className="text-sm">Home</span>
                </button>

                {/* Notification Bell */}
                <button
                    onClick={() => alert("Notifications clicked")}
                    className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-xs text-white font-medium">1</span>
                    </span>
                </button>

                {/* Profile Image */}
                <button
                    onClick={() => alert("Profile clicked")}
                    className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors"
                >
                    <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </button>

                {/* Add Button */}
                <button
                    onClick={() => alert("Add clicked")}
                    className="w-9 h-9 bg-yellow-400 hover:bg-yellow-500 text-purple-600 rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                >
                    <Plus className="w-5 h-5 font-bold" strokeWidth={2.5} />
                </button>
            </div>
        </header>
    );
}