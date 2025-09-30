'use client';

import React from "react";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function DeleteConfirmationModal({ isOpen, onCancel, onConfirm }: DeleteConfirmationModalProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative">
                <button
                    onClick={onCancel}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>
                <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
                    Are you sure you want to delete account?
                </h2>
                <p className="text-gray-600 text-sm text-center mb-6">
                    If you delete the account, you are no longer able to access this account.
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel}
                        className="border border-purple-500 text-purple-600 px-6 py-2 rounded hover:bg-purple-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}