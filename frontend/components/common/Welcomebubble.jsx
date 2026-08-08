"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WelcomeBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // 10 second

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[320px] rounded-3xl border bg-white p-5 shadow-2xl">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
      >
        <X size={18} />
      </button>

      <p className="text-3xl">U_U</p>

      <h3 className="mt-2 text-lg font-bold">
        CaterHUB AI
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        Huhh! 😒
        <br />
        Aaj khana nhi khana kya yrr?
        <br />
        Achaa let me help you find one in just a few clicks.
      </p>

      <Button className="mt-5 w-full rounded-full bg-gradient-to-r from-[#C9184A] to-[#FF4D6D] text-white shadow-lg transition-all duration-300 hover:from-[#E60097] hover:to-[#FF2DBA] hover:shadow-xl">
        Let's Start
      </Button>
    </div>
  );
}