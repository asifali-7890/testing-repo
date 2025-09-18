// pages/admin/index.js

import AdminDashboard from "../../components/AdminDashboard.jsx";
import { useRouter } from "next/navigation";

function Breadcrumb() {
    const router = useRouter();
    return (
        <nav className="text-gray-500 mb-4 flex gap-1 text-sm">
            <span className="hover:underline cursor-pointer" onClick={() => router.push("/admin")}>Dashboard</span>
            <span>/</span>
            <span className="text-gray-400">Admin</span>
        </nav>
    );
}

export default function AdminPage() {
    return (
        <>
            <AdminDashboard />
        </>
    );
}
