import React from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const AdminDashboard = () => {
    const cards = [
        { title: "I AM", active: true },
        { title: "IDENTITY & ORGANIZATION", active: false },
        { title: "-", active: false },
        { title: "-", active: false },
        { title: "I-", active: false },
        { title: "-", active: false },
        { title: "-", active: false },
        { title: "-", active: false },
        { title: "-", active: false },
    ];

    const router = useRouter();

    const handleCardClick = (card) => {
        if (card.title === "I AM") {
            router.push("/admin/iam");
        }
    };

    function Breadcrumb() {
        const router = useRouter();
        return (
            <nav className="text-gray-500 mb-4 flex gap-1 text-sm p-3">
                <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>Dashboard</span>
                <span>/</span>
                <span className="text-gray-400">Admin</span>
            </nav>
        );
    }

    return (
        <div className=" bg-gray-50 min-h-screen">
            <Navbar />
            {/* Breadcrumb removed, now handled in parent */}

            <Breadcrumb />
            {/* Title */}
            <h2 className="text-xl font-bold mb-6 p-2">I AM AN ADMIN</h2>

            {/* Grid of cards */}
            <div className="grid grid-cols-3 gap-4 p-2">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center p-6 rounded border cursor-pointer 
              ${card.active ? "bg-purple-600 text-white" : "bg-white text-gray-700"}`}
                        onClick={() => handleCardClick(card)}
                    >
                        {/* Icon placeholder */}
                        <span className="mr-2">👤</span>
                        <span className="font-medium">{card.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
