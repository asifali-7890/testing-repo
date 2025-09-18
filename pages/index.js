
import Home from '../app/components/Home.jsx';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
      setChecked(true);
      if (loggedIn) {
        router.push("/admin");
      }
    }
  }, [router]);

  if (!checked) return null;
  if (isLoggedIn) return null;
  return <Home />;
}