
import Home from '../app/components/Home.jsx';
import { useRouter } from "next/navigation";

function Breadcrumb() {
  const router = useRouter();
  return (
    <nav className="text-gray-500 mb-4 flex gap-1 text-sm">
      <span className="text-gray-400">Dashboard</span>
    </nav>
  );
}

export default function IndexPage() {
  return (
    <>
      {/* <Breadcrumb /> */}
      <Home />
    </>
  );
}