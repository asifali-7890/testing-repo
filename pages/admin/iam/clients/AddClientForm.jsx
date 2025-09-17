"use client";
import { useState } from "react";
import NewUserPopup from "./NewUserPopup.jsx";

export default function AddClientForm({ onAddClient }) {

    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        orgUnit: "",
        secondaryEmail: "",
        mobile: "",
        country: "",
        photo: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhotoChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        if (onAddClient) onAddClient(); // Notify PopUp to show NewUserPopup
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <h2 className="text-xl font-semibold mb-4">Add a new Client</h2>

            {/* File Upload */}
            <label htmlFor="photo" className="text-blue-600 text-sm cursor-pointer block">
                Upload a Photo
            </label>
            <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full text-sm border rounded p-1"
            />

            {/* Name + Surname */}
            <div className="flex gap-2">
                <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded w-1/2"
                />
                <input
                    name="surname"
                    placeholder="Surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="border p-2 rounded w-1/2"
                />
            </div>

            {/* Email */}
            <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />

            {/* Organizational Unit */}
            <select
                name="orgUnit"
                value={formData.orgUnit}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            >
                <option value="">Choose Organizational Unit</option>
                <option value="unit1">Unit 1</option>
                <option value="unit2">Unit 2</option>
            </select>

            {/* Secondary Email */}
            <input
                name="secondaryEmail"
                placeholder="Secondary Email"
                value={formData.secondaryEmail}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />

            {/* Mobile */}
            <input
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />

            {/* Country */}
            <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            >
                <option value="">Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
            </select>

            {/* Buttons */}
            <div className="flex justify-between pt-3">
                <button
                    type="button"
                    className="border px-4 py-2 rounded hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                    Add new Client
                </button>
            </div>
        </form>
    );
}
