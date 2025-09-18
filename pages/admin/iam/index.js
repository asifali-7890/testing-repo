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
      <span className="text-gray-400">I am</span>
    </nav>
  );
}

const AdminConsole = () => {
  const router = useRouter();

  const cards = [
    {
      title: "USER",
      actions: ["ADD USER", "DELETE A USER", "UPDATE A USER'S NAME & EMAIL"],
    },
    {
      title: "BILLING",
      actions: ["ADD USER", "DELETE A USER", "UPDATE A USER'S NAME & EMAIL"],
    },
    {
      title: "Client",
      actions: ["ADD Client", "DELETE A Client", "UPDATE A Client's NAME & EMAIL"],
      highlight: true,
      route: "/admin/iam/clients", // 👈 special route for this card
    },
    { title: "GROUPS", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "APPS", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "DEVICES", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "ACCOUNT SETTINGS", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "ORGANIZATIONAL UNITS", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "SECURITY", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "REPORTS", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "BUILDINGS AND RESOURCES", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "RULES", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "ADMIN ROLES", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "DATA MIGRATION", subtitle: "Create groups for mailing lists and applying policies" },
    { title: "SUPPORT", subtitle: "Create groups for mailing lists and applying policies" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Top Navbar */}
      {/* <nav className="flex items-center justify-between bg-white shadow px-6 py-3">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl text-blue-600">🌍 Terra</span>
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">🔔</button>
          <button className="text-gray-600 hover:text-gray-900">⚙️</button>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            👤
          </div>
        </div>
      </nav> */}
      <Navbar />

      <div className="p-6">
        {/* 🔹 Breadcrumb */}
        <Breadcrumb />

        {/* 🔹 Welcome Banner */}
        <div className="bg-white border rounded p-4 mb-6 text-sm text-gray-700">
          🎉 Welcome to your new Admin console homepage! You’ll find easier
          navigation and quick access to common user, billing and domain tasks.
          Stay tuned for more enhancement.
        </div>

        {/* 🔹 Grid of Cards */}
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => card.route && router.push(card.route)} // 👈 navigate if route exists
              className={`p-4 border rounded bg-white hover:shadow-md cursor-pointer ${card.highlight ? "border-yellow-400" : "border-gray-200"
                }`}
            >
              <div className="flex items-center mb-2">
                <span className="mr-2">📦</span>
                <h3 className="font-bold">{card.title}</h3>
              </div>

              {/* Actions if present */}
              {card.actions ? (
                <ul className="text-sm text-gray-600 space-y-1">
                  {card.actions.map((action, i) => (
                    <li
                      key={i}
                      className={i === 0 ? "font-semibold text-black" : ""}
                    >
                      {action}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">{card.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminConsole;
