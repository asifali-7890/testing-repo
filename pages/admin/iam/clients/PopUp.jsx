"use client";
import { useState } from "react";
import AddClientForm from "./AddClientForm.jsx";
import NewUserPopup from "./NewUserPopup.jsx";
import EmailSignInPopup from "./EmailSignInPopup.jsx";

export default function PopUp({ onClose }) {
    const [showNewUserPopup, setShowNewUserPopup] = useState(false);
    const [showEmailSignInPopup, setShowEmailSignInPopup] = useState(false);

    // Handler for AddClientForm submit
    const handleAddClient = () => {
        setShowNewUserPopup(true);
    };

    // Handler for closing NewUserPopup
    const handleCloseNewUserPopup = () => {
        setShowNewUserPopup(false);
        if (onClose) onClose(); // Close PopUp after NewUserPopup closes
    };

    // Handler for opening EmailSignInPopup from NewUserPopup
    const handleOpenEmailSignInPopup = () => {
        setShowNewUserPopup(false);
        setShowEmailSignInPopup(true);
    };

    // Handler for closing EmailSignInPopup
    const handleCloseEmailSignInPopup = () => {
        setShowEmailSignInPopup(false);
        if (onClose) onClose(); // Close PopUp after EmailSignInPopup closes
    };

    return (
        <>
            {/* Show AddClientForm modal if no other modal is open */}
            {!showNewUserPopup && !showEmailSignInPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        {/* Form */}
                        <AddClientForm onAddClient={handleAddClient} />
                    </div>
                </div>
            )}
            {/* Show NewUserPopup modal */}
            {showNewUserPopup && !showEmailSignInPopup && (
                <NewUserPopup
                    isOpen={true}
                    onClose={handleCloseNewUserPopup}
                    onEmailSignIn={handleOpenEmailSignInPopup}
                />
            )}
            {/* Show EmailSignInPopup modal */}
            {showEmailSignInPopup && (
                <EmailSignInPopup isOpen={true} onClose={handleCloseEmailSignInPopup} />
            )}
        </>
    );
}
