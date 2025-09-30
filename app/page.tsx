'use client';

import Home from './components/Home';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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