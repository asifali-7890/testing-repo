import React, { useState } from "react";

const AssignRolePopup = ({ isOpen, onClose, onSave }) => {
    const jobTitles = [
        "Head of Finance", "Transformation Director", "Vice President",
        "Senior Transaction Manager", "Securitisation Assistant Manager",
        "KYC-Support Desk", "Founder", "CTO", "CEO", "CFO",
        "Product Manager", "Engineering Manager", "Tech Lead",
        "UI/UX Designer", "Frontend Developer", "Backend Developer",
        "Full Stack Developer", "QA Engineer", "DevOps Engineer", "HR Manager"
    ];

    const roles = [
        "Super Admin", "Admin", "Editor", "Viewer", "KYC Editor", "Finance Admin",
        "Project Manager", "Team Lead", "Developer", "Tester",
        "Designer", "HR", "Recruiter", "Marketing Admin", "Sales Lead",
        "Operations Manager", "Compliance Officer", "Support Staff",
        "Trainer", "Consultant"
    ];

    const permissions = {
        "Multichannel Communication": ["Multi form", "AI SDR", "Subscription", "Lorem Ipsum", "Lorem Ipsum"],
        "Outreach Communication": ["Scraping Data", "Cold Email", "LinkedIn", "Lorem Ipsum"],
        "Content Management": ["Lorem Ipsum", "Lorem Ipsum"],
        "Ads Management": ["Ads Manager", "Lorem Ipsum"],
        "Financial": ["Lorem Ipsum", "Lorem Ipsum"],
    };

    const [selectedJob, setSelectedJob] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const togglePermission = (perm) => {
        setSelectedPermissions((prev) =>
            prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
        );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 relative">
                {/* Header */}
                <h2 className="text-lg font-bold mb-2">ASSIGN ROLE</h2>
                <p className="text-sm text-gray-500 mb-6">Regina Cooper - reginacooper01@gmail.com</p>

                {/* Job Title */}
                <label className="block text-sm font-semibold mb-1">Select Job Title</label>
                <select
                    className="w-full border rounded p-2 mb-4"
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                >
                    <option value="">-- Select Job Title --</option>
                    {jobTitles.map((job, idx) => (
                        <option key={idx} value={job}>{job}</option>
                    ))}
                </select>

                {/* Role */}
                <label className="block text-sm font-semibold mb-1">Select Role</label>
                <select
                    className="w-full border rounded p-2 mb-4"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                >
                    <option value="">-- Select Role --</option>
                    {roles.map((role, idx) => (
                        <option key={idx} value={role}>{role}</option>
                    ))}
                </select>

                {/* Permissions */}
                <label className="block text-sm font-semibold mb-2">Permissions</label>
                <div className="max-h-60 overflow-y-auto border rounded p-3 space-y-4">
                    {Object.entries(permissions).map(([category, perms], idx) => (
                        <div key={idx}>
                            <p className="text-purple-600 font-semibold mb-1">{category}</p>
                            <div className="space-y-1">
                                {perms.map((perm, i) => (
                                    <label key={i} className="flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={selectedPermissions.includes(perm)}
                                            onChange={() => togglePermission(perm)}
                                        />
                                        {perm}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-purple-500 text-purple-500 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            if (typeof onSave === 'function') {
                                onSave({ jobTitle: selectedJob, role: selectedRole, permissions: selectedPermissions });
                            }
                            if (typeof onClose === 'function') onClose();
                        }}
                        className="px-4 py-2 bg-orange-500 text-white rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignRolePopup;
