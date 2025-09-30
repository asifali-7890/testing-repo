'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";

interface Card {
  title: string;
  actions?: string[];
  icon: string;
  subtitle?: string;
  highlight?: boolean;
  route?: string;
}

function Breadcrumb() {
  const router = useRouter();
  return (
    <nav className="text-gray-500 mb-4 flex gap-1 text-sm">
      <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>Dashboard</span>
      <span>/</span>
      <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>Admin</span>
      <span>/</span>
      <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>home</span>
      <span>/</span>
      <span className="text-gray-400">i am</span>
    </nav>
  );
}

const AdminConsole: React.FC = () => {
  const router = useRouter();

  const cards: Card[] = [
    {
      title: "USER",
      actions: ["ADD USER", "DELETE A USER", "UPDATE A USER'S NAME & EMAIL"],
      icon: "👤"
    },
    {
      title: "BILLING",
      actions: ["ADD USER", "DELETE A USER", "UPDATE A USER'S NAME & EMAIL"],
      icon: "👤"
    },
    {
      title: "Client",
      actions: ["ADD Client", "DELETE A Client", "UPDATE A Client's NAME & EMAIL"],
      highlight: true,
      route: "/admin/iam/clients",
      icon: "👤"
    },
    { 
      title: "GROUPS", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "APPS", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "DEVICES", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "ACCOUNT SETTINGS", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "ORGANIZATIONAL UNITS", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "SECURITY", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "REPORTS", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "BUILDINGS AND RESOURCES", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "RULES", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "ADMIN ROLES", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "DATA MIGRATION", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
    { 
      title: "SUPPORT", 
      subtitle: "Create groups for mailing lists and applying policies",
      icon: "👥"
    },
  ];

  const handleCardClick = (card: Card) => {
    if (card.route) {
      router.push(card.route);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="p-6">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Welcome Banner */}
        <div className="bg-white border rounded-lg p-4 mb-6 text-sm text-gray-700 flex items-center">
          <span className="text-2xl mr-3">🎉</span>
          <span>Welcome to your new Admin console homepage</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-6">I AM AN ADMIN</h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                card.highlight 
                  ? "bg-purple-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => handleCardClick(card)}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{card.icon}</span>
                <h3 className="font-semibold text-lg">{card.title}</h3>
              </div>
              
              {card.actions && (
                <ul className="text-sm space-y-1">
                  {card.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="opacity-80">• {action}</li>
                  ))}
                </ul>
              )}
              
              {card.subtitle && (
                <p className="text-sm opacity-80 mt-2">{card.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminConsole;