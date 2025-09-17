"use client";
import React from "react";

export default function NewUserPopup({ isOpen, onClose, onEmailSignIn }) {
    if (!isOpen) return null; // Don't render if popup is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            {/* Popup Card */}
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative p-6">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                    NEW USER ADDED
                </h2>

                {/* Divider */}
                <hr className="my-4" />

                {/* Avatar + Name */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl">
                        🖼️
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mt-3">
                        Regina Cooper
                    </h3>
                    <p className="text-gray-500 text-sm">reginacooper01@gmail.com</p>
                </div>

                {/* Password Section */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Password</p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="tracking-widest text-lg">••••••••</span>
                        <button className="text-gray-500 hover:text-gray-700">
                            👁
                        </button>
                    </div>
                    <button className="text-blue-600 text-sm mt-1 hover:underline">
                        COPY PASSWORD
                    </button>
                    <p className="text-xs text-gray-400 mt-2">
                        This password will need to be changed once Regina signs into the account.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-6 text-sm font-medium">
                    <button
                        onClick={onClose}
                        className="text-purple-600 hover:underline"
                    >
                        DONE
                    </button>
                    <button
                        className="text-blue-600 hover:underline"
                        onClick={onEmailSignIn}
                    >
                        EMAIL USER SIGN-IN INFO
                    </button>
                    <button className="text-gray-600 hover:underline">
                        MORE ACTIONS ⌄
                    </button>
                </div>
            </div>
        </div>
    );
}
