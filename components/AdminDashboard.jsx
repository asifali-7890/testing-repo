import React from "react";
import { useRouter } from "next/router";

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

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="text-gray-500 mb-4">Dashboard / Admin / Home</div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-6">I AM AN ADMIN</h2>

            {/* Grid of cards */}
            <div className="grid grid-cols-3 gap-4">
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
