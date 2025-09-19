"use client";
import { useEffect, useState } from "react";
import { Menu, Bell, Home, Search, Plus, Headphones } from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [showLogout, setShowLogout] = useState(false);
    const router = useRouter();

    // Simulate user login state (replace with real auth logic)
    const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";

    useEffect(() => {
        if (typeof window !== "undefined" && !isLoggedIn) {
            if (window.location.pathname !== "/") {
                router.push("/");
            }
        }
    }, [isLoggedIn, router]);

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("isLoggedIn");
            router.push("/");
        }
    };

    return (
        <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm border-b border-gray-100">
            <div className="flex items-center gap-2 w-3/4">
                {/* Left Side */}
                <div className="flex items-center gap-4 w-1/5">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Menu className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                    </button>
                    <span className="text-2xl font-bold text-black tracking-tight">Terra</span>
                </div>

                {/* Center - Search Bar & Home */}
                <div className="flex items-center justify-center gap-4 w-1/3">
                    <div className="relative w-full max-w-md">
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
                    <button
                        onClick={() => router.push(isLoggedIn ? "/admin" : "/login")}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                    >
                        <Home className="w-4 h-4" />
                        <span className="text-sm">Home</span>
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 w-1/3 justify-end">
                {/* Notification Bell */}
                <button
                    onClick={() => alert("Notifications clicked")}
                    className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <div className="flex items-center gap-1">
                        <Headphones className="w-4 h-4 text-gray-600" />
                        <Bell className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-xs text-white font-medium">10</span>
                    </span>
                </button>

                {/* Profile Image */}
                <div className="relative">
                    <button
                        onClick={() => setShowLogout((prev) => !prev)}
                        className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors"
                    >
                        <Image
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                            alt="Profile"
                            width={36}   // match w-9
                            height={36}  // match h-9
                            className="w-full h-full object-cover"
                        />
                    </button>

                    {showLogout && (
                        <button
                            onClick={handleLogout}
                            className="absolute top-full mt-2 right-0 w-32 bg-white border border-gray-200 rounded shadow-lg py-2 text-sm text-gray-700 hover:bg-gray-50 z-10"
                        >
                            Logout
                        </button>
                    )}
                </div>

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