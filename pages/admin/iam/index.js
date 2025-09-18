import React from "react";
import { useRouter } from "next/router";
import { useRouter as useNextRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";

function Breadcrumb() {
  const router = useNextRouter();
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

const AdminConsole = () => {
  const router = useRouter();

  const cards = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="p-6">
        {/* 🔹 Breadcrumb */}
        <Breadcrumb />

        {/* 🔹 Welcome Banner */}
        <div className="bg-white border rounded-lg p-4 mb-6 text-sm text-gray-700 flex items-center">
          <span className="text-2xl mr-3">🎉</span>
          <span>Welcome to your new Admin console homepage! You'll find easier navigation and quick access to common user, billing and domain tasks. Stay tuned for more enhancement.</span>
        </div>

        {/* 🔹 Grid of Cards */}
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => card.route && router.push(card.route)}
              className={`p-4 border rounded-lg bg-white hover:shadow-md cursor-pointer transition-shadow ${
                card.highlight ? "border-yellow-400 bg-yellow-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span className="text-orange-600">{card.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900">{card.title}</h3>
              </div>

              {/* Actions if present */}
              {card.actions ? (
                <ul className="text-sm text-gray-600 space-y-1 ml-11">
                  {card.actions.map((action, i) => (
                    <li
                      key={i}
                      className={i === 0 ? "font-semibold text-gray-900" : "text-gray-600"}
                    >
                      {action}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 ml-11">{card.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminConsole;