"use client";
import React, { useState, useEffect } from "react";
import PopUp from "./PopUp.jsx";
import { getClients, deleteClient } from "/utils/storage.js";
import { useRouter } from "next/navigation";
import Navbar from "../../../../components/Navbar.jsx";

function Breadcrumb() {
  const router = useRouter();
  return (
    <nav className="text-gray-500 mb-4 flex gap-1 text-sm">
      <span
        className="hover:underline cursor-pointer"
        onClick={() => router.push("/admin")}
      >
        Dashboard
      </span>
      <span>/</span>
      <span
        className="hover:underline cursor-pointer"
        onClick={() => router.push("/admin")}
      >
        Admin
      </span>
      <span>/</span>
      <span
        className="hover:underline cursor-pointer"
        onClick={() => router.push("/admin")}
      >
        home
      </span>
      <span>/</span>
      <span
        className="hover:underline cursor-pointer"
        onClick={() => router.push("/admin/iam")}
      >
        I am
      </span>
      <span>/</span>
      <span className="text-gray-400">Clients</span>
    </nav>
  );
}

const ClientsPage = () => {
  const [activeTab, setActiveTab] = useState("clients");
  const [showPopup, setShowPopup] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(getClients());
  }, []);

  const handleDelete = (id) => {
    deleteClient(id);
    setClients(getClients());
  };

  // Lock scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showPopup]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">

        <Breadcrumb />
        {/* 🔹 Header */}
        <div className="flex items-center justify-between mb-6">
          <select className="border rounded px-4 py-2 text-gray-700">
            <option>Jarvis App</option>
          </select>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add new Client
          </button>
        </div>

        {/* 🔹 Tabs */}
        <div className="border-b mb-4 flex space-x-6 text-sm font-medium">
          <button
            className={`pb-2 ${activeTab === "clients"
              ? "border-b-2 border-purple-500 text-purple-600"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab("clients")}
          >
            Clients
          </button>
          <button
            className={`pb-2 ${activeTab === "roles"
              ? "border-b-2 border-purple-500 text-purple-600"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab("roles")}
          >
            Roles
          </button>
        </div>

        {/* 🔹 Table */}
        {activeTab === "clients" && (
          <div className="bg-white rounded border">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3">Team</th>
                  <th className="p-3">Member</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Job title</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Inheritance</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((c) => (
                  <tr key={c.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 text-gray-700">{c.member || c.email}</td>
                    <td className="p-3 text-blue-600 font-medium cursor-pointer hover:underline">{c.name}</td>
                    <td className="p-3">{c.jobTitle || '-'}</td>
                    <td className="p-3">{c.role || '-'}</td>
                    <td className="p-3">{c.inheritance ? "✏️" : "-"}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs ${c.status === "active" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{c.status || '-'}</span>
                    </td>
                    <td className="p-3">
                      <div className="relative group inline-block">
                        <button className="px-2 py-1 text-gray-600 hover:text-black">⋮</button>
                        <div className="absolute hidden group-hover:block right-0 mt-1 w-32 bg-white border rounded shadow z-10">
                          <button onClick={() => handleDelete(c.id)} className="block w-full text-left px-3 py-2 hover:bg-gray-100">Delete</button>
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">Enable</button>
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">Permission</button>
                          <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">Profile</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "roles" && (
          <div className="bg-white p-6 rounded border text-gray-500">
            Roles content goes here…
          </div>
        )}

        {showPopup && <PopUp onClose={() => setShowPopup(false)} setClients={setClients} />}
      </div>
    </>

  );
};

export default ClientsPage;
