"use client";
import { useState } from "react";
import { Menu, Bell, HelpCircle, Plus } from "lucide-react";

export default function Navbar() {
    const [search, setSearch] = useState("");

    return (
        <header className="flex items-center justify-between px-4 py-2 shadow-md bg-white">
            {/* Left Side */}
            <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-xl">
                    <Menu className="w-6 h-6" />
                </button>
                <span className="text-2xl font-semibold tracking-wide">Terra</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-6 max-w-md">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => alert("Home clicked")}
                    className="text-gray-700 font-medium hover:text-black"
                >
                    Home
                </button>

                <button
                    onClick={() => alert("Help clicked")}
                    className="p-2 hover:bg-gray-100 rounded-xl"
                >
                    <HelpCircle className="w-5 h-5" />
                </button>

                <button
                    onClick={() => alert("Notifications clicked")}
                    className="relative p-2 hover:bg-gray-100 rounded-xl"
                >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                <button
                    onClick={() => alert("Profile clicked")}
                    className="w-9 h-9 rounded-full overflow-hidden border border-gray-300"
                >
                    <img
                        src="https://th.bing.com/th/id/OIP.z0fUd7K_rABmmAZyCvahdgHaLG?w=115&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" // Replace with actual user avatar
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </button>

                <button
                    onClick={() => alert("Add clicked")}
                    className="p-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full shadow-md"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}
