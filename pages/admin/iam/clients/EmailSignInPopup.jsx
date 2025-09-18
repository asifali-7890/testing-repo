"use client";
import React, { useState } from "react";

export default function EmailSignInPopup({ isOpen, onClose, client }) {
    const [message, setMessage] = useState("");
    const [sendCopy, setSendCopy] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative p-6">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    EMAIL SIGN-IN INFO
                </h2>
                <p className="text-gray-600 text-sm mb-4">{client?.name || "-"}</p>

                {/* Message Input */}
                <textarea
                    placeholder="Type something"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
                    rows={2}
                />

                {/* Send Copy Toggle */}
                <label className="flex items-center gap-2 text-sm text-gray-600 mt-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={sendCopy}
                        onChange={() => setSendCopy(!sendCopy)}
                        className="h-4 w-4 rounded border-gray-300"
                    />
                    Send copy to myself
                </label>

                {/* Subject */}
                <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Subject:</span>{" "}
                        Welcome to Enoch.app
                    </p>
                    <button className="text-blue-600 text-xs hover:underline">
                        EDIT
                    </button>
                </div>

                {/* Email Preview */}
                <div className="border rounded p-3 text-sm text-gray-700 mt-3 bg-gray-50">
                    <p>Hello {client?.name || "-"},</p>
                    <p className="mt-2">
                        You have a new Enoch account with the Enoch.dapp organization.
                    </p>
                    <p className="mt-2">
                        Sign in to your Enoch account to access services your organization
                        provides.
                    </p>
                    <p className="mt-2">
                        <strong>Your username</strong>
                        <br />
                        {client?.email || "-"}
                    </p>
                    <p className="mt-2">
                        <strong>Your password</strong>
                        <br />
                        Click Sign in below to set your password and sign in. To keep your
                        account secure, follow these{" "}
                        <a href="#" className="text-blue-600 underline">
                            password guidelines
                        </a>
                        .
                    </p>
                    <p className="mt-3 text-gray-500">
                        For your security, the reset password link expires after 48 hours.
                        After that, please contact{" "}
                        <a href="#" className="text-blue-600 underline">
                            your administrator
                        </a>{" "}
                        for your password.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-5">
                    <button
                        onClick={onClose}
                        className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
