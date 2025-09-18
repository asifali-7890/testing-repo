import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Navbar from '../../../../../components/Navbar.jsx';
import { getClients } from '/utils/storage.js';


export default function UserProfile() {
  const router = useRouter();
  const { clientName } = router.query;
  const [client, setClient] = useState(null);
  const [editUserInfo, setEditUserInfo] = useState(false);
  const [editOrgDetails, setEditOrgDetails] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (clientName) {
      const clients = getClients();
      const decodedName = decodeURIComponent(clientName);
      const found = clients.find(c => {
        // Prefer firstName/lastName match, fallback to name
        const fullName = `${c.firstName || ''} ${c.lastName || ''}`.trim();
        return (fullName === decodedName) || (c.name === decodedName);
      });
      setClient(found || null);
      setForm(found || {});
    }
  }, [clientName]);

  const handleEditUserInfo = () => setEditUserInfo(true);
  const handleCancelUserInfo = () => {
    setEditUserInfo(false);
    setForm(client || {});
  };
  const handleSaveUserInfo = () => {
    const clients = getClients();
    const idx = clients.findIndex(c => c.id === client.id);
    // Check for unique email
    const emailExists = clients.some((c, i) => c.email === form.email && i !== idx);
    if (emailExists) {
      alert("Email must be unique for every client.");
      return;
    }
    if (idx !== -1) {
      // If firstName or lastName is changed, update and redirect
      const oldFullName = `${clients[idx].firstName || ''} ${clients[idx].lastName || ''}`.trim();
      const newFirstName = form.firstName || clients[idx].firstName || '';
      const newLastName = form.lastName || clients[idx].lastName || '';
      const newFullName = `${newFirstName} ${newLastName}`.trim();
      clients[idx] = {
        ...clients[idx],
        firstName: newFirstName,
        lastName: newLastName,
        name: newFullName,
        email: form.email,
        company: form.company,
        department: form.department,
        phone: form.phone,
        country: form.country
      };
      localStorage.setItem("clients", JSON.stringify(clients));
      const updatedClients = getClients();
      setClient(updatedClients[idx]);
      setForm(updatedClients[idx]);
      setEditUserInfo(false);
      if (oldFullName !== newFullName) {
        router.replace(`/admin/iam/clients/profile/${encodeURIComponent(newFullName)}`);
      }
    }
  };

  const handleEditOrgDetails = () => setEditOrgDetails(true);
  const handleCancelOrgDetails = () => {
    setEditOrgDetails(false);
    setForm(client || {});
  };
  const handleSaveOrgDetails = () => {
    const clients = getClients();
    const idx = clients.findIndex(c => decodeURIComponent(c.name) === decodeURIComponent(clientName));
    if (idx !== -1) {
      clients[idx] = {
        ...clients[idx],
        jobTitle: form.jobTitle,
        role: form.role
      };
      localStorage.setItem("clients", JSON.stringify(clients));
      // Always get the latest client from storage
      const updatedClients = getClients();
      setClient(updatedClients[idx]);
      setEditOrgDetails(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  function Breadcrumb() {
    return (
      <nav className="text-gray-500 mb-4 flex gap-1 text-sm p-3">
        <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>Dashboard</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>Admin</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>home</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin/iam")}>I am</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin/iam/clients")}>Clients</span>
        <span>/</span>
        <span className="text-gray-400">Profile</span>
        <span>/</span>
        <span className="text-gray-900 font-semibold">{decodeURIComponent(clientName || '')}</span>
      </nav>
    );
  }

  if (!clientName) return <div>Loading...</div>;
  if (!client) return <div className="p-8 text-center text-gray-500">Client not found.</div>;


  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Breadcrumb />
      <div className="flex gap-6 p-6">
        {/* Left Profile Card */}
        <div className="w-1/4 bg-white shadow rounded-lg p-4 flex flex-col items-center">
          <img
            src={client.image || "https://via.placeholder.com/100"}
            alt="profile"
            className="w-24 h-24 rounded-full mb-3"
          />
          <h2 className="text-lg font-semibold">{`${client.firstName || ''} ${client.lastName || ''}`.trim()}</h2>
          <p className="text-sm text-gray-500">{client.email}</p>
          <p className="text-sm text-gray-500">{client.jobTitle ? `Job Title: ${client.jobTitle}` : ''}</p>
          <p className="text-sm text-gray-500">{client.role ? `Role: ${client.role}` : ''}</p>
          <p className="text-sm text-gray-500">{client.country ? `Country: ${client.country}` : ''}</p>
          <span
            className={`mt-2 px-3 py-1 text-sm rounded-full ${client.status === "active"
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600"
              }`}
          >
            {client.status}
          </span>
          <p className="text-xs text-gray-400 mt-2">
            Last sign in: {client.lastActive || "-"}
          </p>
          <p className="text-xs text-gray-400">Created: {client.joinDate || "-"}</p>

          <div className="w-full mt-4 border-t pt-3 text-sm">
            <p className="font-semibold">Organizational Unit</p>
            <p className="text-gray-600 mb-4">
              {client.orgUnit || client.company || "-"}
            </p>

            <ul className="space-y-2 font-semibold text-gray-700">
              <li>RESEND SIGN IN INFO</li>
              <li>RESET PASSWORD</li>
              <li className="text-gray-400">SUSPEND USER</li>
              <li>RESTORE DATA</li>
              <li className="text-gray-400">DELETE USER</li>
            </ul>

            <div className="mt-4">
              <p className="font-semibold">CHANGE 2FA METHOD</p>
              <p className="text-xs text-gray-500">APP AUTHENTICATOR</p>
              <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-green-100 text-green-600 rounded-full">
                enabled
              </span>
            </div>

            <div className="mt-4 font-semibold">CHANGE ORGANIZATIONAL UNIT</div>
          </div>
        </div>

        {/* Middle User Information */}
        <div className="w-1/3 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">User Information</h3>
            {!editUserInfo && (
              <button className="text-blue-500 font-semibold" onClick={handleEditUserInfo}>EDIT</button>
            )}
          </div>
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName || client.firstName || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`p-2 border rounded w-full ${!editUserInfo ? "bg-gray-100" : "bg-white"}`}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName || client.lastName || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`p-2 border rounded w-full ${!editUserInfo ? "bg-gray-100" : "bg-white"}`}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email || client.email}
                onChange={handleChange}
                readOnly={!editUserInfo}
                className={`w-full p-2 border rounded ${!editUserInfo ? "bg-gray-100" : "bg-white"}`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">Organization / Company</label>
                <input
                  type="text"
                  name="company"
                  value={form.company || client.company || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`p-2 border rounded w-full ${!editUserInfo ? "bg-gray-100" : "bg-white"}`}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={form.department || client.department || client.jobTitle || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`p-2 border rounded w-full ${!editUserInfo ? "bg-gray-100" : "bg-white"}`}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone || client.phone || ""}
                onChange={handleChange}
                readOnly={!editUserInfo}
                className={`w-full p-2 border rounded ${!editUserInfo ? "bg-gray-100" : "bg-white"}`}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Address / Country</label>
              <input
                type="text"
                name="country"
                value={form.country || client.country || client.address || ""}
                onChange={handleChange}
                readOnly={!editUserInfo}
                className={`w-full p-2 border rounded ${!editUserInfo ? "bg-gray-100" : "bg-white"}`}
              />
            </div>
            {editUserInfo && (
              <div className="flex gap-4 mt-4">
                <button className="bg-gray-200 px-4 py-2 rounded" onClick={handleCancelUserInfo}>Cancel</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSaveUserInfo}>Save</button>
              </div>
            )}
          </div>
        </div>

        {/* Right Organizational Details */}
        <div className="w-1/3 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Organizational Details</h3>
            {!editOrgDetails && (
              <button className="text-blue-500 font-semibold" onClick={handleEditOrgDetails}>EDIT</button>
            )}
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <label className="block text-gray-600 mb-1">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={form.jobTitle || client.jobTitle || ""}
                onChange={handleChange}
                readOnly={!editOrgDetails}
                className={`w-full p-2 border rounded ${!editOrgDetails ? "bg-gray-100" : "bg-white"}`}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Role</label>
              <input
                type="text"
                name="role"
                value={form.role || client.role || ""}
                onChange={handleChange}
                readOnly={!editOrgDetails}
                className={`w-full p-2 border rounded ${!editOrgDetails ? "bg-gray-100" : "bg-white"}`}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Permissions</label>
              <div className="flex flex-wrap gap-2">
                {(client.permissions || ["Permission 1", "Permission 2", "Permission 3"]).map(
                  (perm, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-200 rounded"
                    >
                      {perm}
                    </span>
                  )
                )}
              </div>
            </div>
            {editOrgDetails && (
              <div className="flex gap-4 mt-4">
                <button className="bg-gray-200 px-4 py-2 rounded" onClick={handleCancelOrgDetails}>Cancel</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSaveOrgDetails}>Save</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}