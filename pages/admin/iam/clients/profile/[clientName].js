import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Navbar from '../../../../../components/Navbar.jsx';
import { getClients } from '/utils/storage.js';
import Image from "next/image.js";

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
    const emailExists = clients.some((c, i) => c.email === form.email && i !== idx);
    if (emailExists) {
      alert("Email must be unique for every client.");
      return;
    }
    if (idx !== -1) {
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
      <nav className="text-gray-500 mb-4 flex gap-1 text-sm p-3 bg-gray-100">
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
        <div className="w-80 bg-white shadow-sm rounded-lg p-6 flex flex-col items-center h-fit">
          <Image
            src={client.image || "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"}
            alt="profile"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            {`${client.firstName || ''} ${client.lastName || ''}`.trim() || client.name}
          </h2>
          <p className="text-sm text-gray-600 mb-3">{client.email}</p>

          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 mb-4">
            {client.status || 'active'}
          </span>

          <div className="text-xs text-gray-500 text-center mb-6">
            <p>Last sign in: {client.lastActive || '40 minutes ago'}</p>
            <p>Created: {client.joinDate || 'June 15 2021'}</p>
          </div>

          <div className="w-full border-t pt-4">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-900 mb-1">Organizational Unit</p>
              <p className="text-sm text-gray-600">{client.orgUnit || client.company || 'Enoch.app'}</p>
            </div>

            <div className="space-y-3 text-sm font-semibold text-gray-700">
              <div className="cursor-pointer hover:text-gray-900">RESEND SIGN IN INFO</div>
              <div className="cursor-pointer hover:text-gray-900">RESET PASSWORD</div>
              <div className="text-gray-400">SUSPEND USER</div>
              <div className="cursor-pointer hover:text-gray-900">RESTORE DATA</div>
              <div className="text-gray-400">DELETE USER</div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <p className="text-sm font-semibold text-gray-900 mb-2">CHANGE 2FA METHOD</p>
              <p className="text-xs text-gray-500 mb-1">APP AUTHENTICATOR</p>
              <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                enabled
              </span>
            </div>

            <div className="mt-4 text-sm font-semibold text-gray-700 cursor-pointer hover:text-gray-900">
              CHANGE ORGANIZATIONAL UNIT
            </div>
          </div>
        </div>

        {/* Middle User Information */}
        <div className="flex-1 bg-white shadow-sm rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">User Information</h3>
            {!editUserInfo && (
              <button
                className="text-blue-500 font-semibold text-sm hover:text-blue-600"
                onClick={handleEditUserInfo}
              >
                EDIT
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName || client.firstName || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editUserInfo ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName || client.lastName || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editUserInfo ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email || client.email}
                onChange={handleChange}
                readOnly={!editUserInfo}
                className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editUserInfo ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization / Company</label>
                <input
                  type="text"
                  name="company"
                  value={form.company || client.company || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editUserInfo ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  name="department"
                  value={form.department || client.department || client.jobTitle || ""}
                  onChange={handleChange}
                  readOnly={!editUserInfo}
                  className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editUserInfo ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone || client.phone || ""}
                onChange={handleChange}
                readOnly={!editUserInfo}
                className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editUserInfo ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address / Country</label>
              <input
                type="text"
                name="country"
                value={form.country || client.country || client.address || ""}
                onChange={handleChange}
                readOnly={!editUserInfo}
                className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editUserInfo ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
            </div>

            {editUserInfo && (
              <div className="flex gap-3 pt-4">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  onClick={handleCancelUserInfo}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors"
                  onClick={handleSaveUserInfo}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Organizational Details */}
        <div className="w-80 bg-white shadow-sm rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Organizational Details</h3>
            {!editOrgDetails && (
              <button
                className="text-blue-500 font-semibold text-sm hover:text-blue-600"
                onClick={handleEditOrgDetails}
              >
                EDIT
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={form.jobTitle || client.jobTitle || ""}
                onChange={handleChange}
                readOnly={!editOrgDetails}
                className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editOrgDetails ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <input
                type="text"
                name="role"
                value={form.role || client.role || ""}
                onChange={handleChange}
                readOnly={!editOrgDetails}
                className={`w-full px-3 py-2 text-sm border border-gray-200 rounded-md ${!editOrgDetails ? "bg-gray-50 text-gray-600" : "bg-white text-gray-900"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
              <div className="flex flex-wrap gap-2">
                {(client.permissions || ["Permission 1", "Permission 2", "Permission 3"]).map(
                  (perm, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {perm}
                    </span>
                  )
                )}
              </div>
            </div>

            {editOrgDetails && (
              <div className="flex gap-3 pt-4">
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  onClick={handleCancelOrgDetails}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-md transition-colors"
                  onClick={handleSaveOrgDetails}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}