"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Bell,
  Settings,
  UserCircle2,
  UserRound,
  Receipt,
  CalendarCheck,
  Coins,
  MessageSquareText,
  LogOut,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);

  const accountRef = useRef(null);

  /* Load logged-in user */
  useEffect(() => {
    const savedUser = localStorage.getItem("caterhubUser");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Unable to load user information:", error);
      }
    }
  }, []);

  /* Close account menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* Logout */
  const handleLogout = () => {
    localStorage.removeItem("caterhubUser");

    setUser(null);
    setAccountOpen(false);

    router.push("/");
  };

  return (
    <header className="border-b border-white/30 bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] shadow-md">
      <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md">
            <span className="text-xl font-bold text-[#b91d73]">
              CH
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              CaterHUB
            </h2>

            <p className="text-sm text-gray-700">
              Premium Catering Marketplace
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="hidden w-[450px] items-center rounded-2xl bg-white px-5 py-3 shadow-md lg:flex">

          <Search className="mr-3 h-5 w-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search Caterers..."
            className="w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-400"
          />

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Notifications */}
          <button
            type="button"
            className="rounded-xl bg-white/60 p-3 text-[#b91d73] transition hover:bg-white"
          >
            <Bell size={20} />
          </button>

          {/* Settings */}
          <button
            type="button"
            className="rounded-xl bg-white/60 p-3 text-[#b91d73] transition hover:bg-white"
          >
            <Settings size={20} />
          </button>

          {/* Account */}
          <div
            ref={accountRef}
            className="relative"
          >

            <button
              type="button"
              onClick={() => setAccountOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-md transition hover:shadow-lg"
            >

              <UserCircle2
                size={40}
                className="text-[#b91d73]"
              />

              <div className="hidden text-left md:block">

                <p className="max-w-[130px] truncate font-semibold text-gray-900">
                  {user?.username || "Guest User"}
                </p>

                <p className="text-sm text-gray-500">
                  {user ? "Welcome" : "Guest User"}
                </p>

              </div>

              <ChevronDown
                size={18}
                className={`hidden text-gray-500 transition-transform md:block ${
                  accountOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            {/* Account Dropdown */}
            {accountOpen && (
              <div className="absolute right-0 top-[72px] z-50 w-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

                {/* Account Header */}
                <div className="border-b border-gray-100 bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] px-5 py-4">

                  <p className="font-bold text-gray-900">
                    {user?.username || "Guest User"}
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    {user?.phone || "Please log in"}
                  </p>

                </div>

                {/* Menu */}
                <div className="p-2">

                  {/* Edit Profile */}
                  <button
                    type="button"
                    onClick={() => {
                      setAccountOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-[#fff0f2]"
                  >
                    <UserRound
                      size={19}
                      className="text-[#b91d73]"
                    />

                    <span>
                      Edit My Profile
                    </span>
                  </button>

                  {/* Transactions */}
                  <button
                    type="button"
                    onClick={() => {
                      setAccountOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-[#fff0f2]"
                  >
                    <Receipt
                      size={19}
                      className="text-[#b91d73]"
                    />

                    <span>
                      Your Transactions
                    </span>
                  </button>

                  {/* Bookings */}
                  <button
                    type="button"
                    onClick={() => {
                      setAccountOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-[#fff0f2]"
                  >
                    <CalendarCheck
                      size={19}
                      className="text-[#b91d73]"
                    />

                    <span>
                      Your Bookings
                    </span>
                  </button>

                  {/* CaterHUB Credits */}
                  <button
                    type="button"
                    onClick={() => {
                      setAccountOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-[#fff0f2]"
                  >
                    <Coins
                      size={19}
                      className="text-[#b91d73]"
                    />

                    <span>
                      CaterHUB Credits
                    </span>
                  </button>

                  {/* Feedback */}
                  <button
                    type="button"
                    onClick={() => {
                      setAccountOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-[#fff0f2]"
                  >
                    <MessageSquareText
                      size={19}
                      className="text-[#b91d73]"
                    />

                    <span>
                      Your Feedback
                    </span>
                  </button>

                  {/* Divider */}
                  <div className="my-2 border-t border-gray-100" />

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut size={19} />

                    <span>
                      Log Out
                    </span>
                  </button>

                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </header>
  );
}

// "use client";

// import { Search, Bell, Settings, UserCircle2 } from "lucide-react";

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#1F1C18] to-[#8E0E00] shadow-lg backdrop-blur-md">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

//         {/* Logo */}

//         <div className="flex items-center gap-4">

//           <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md">

//             <span className="text-xl font-bold text-[#C9184A]">
//               CH
//             </span>

//           </div>

//           <div>

//             <h2 className="text-xl font-bold text-white">
//               CaterHUB
//             </h2>

//             <p className="text-sm text-gray-300">
//               Premium Catering Marketplace
//             </p>

//           </div>

//         </div>

//         {/* Search */}

//         <div className="hidden w-[450px] items-center rounded-2xl bg-white px-5 py-3 shadow-md lg:flex">

//           <Search className="mr-3 h-5 w-5 text-gray-400" />

//           <input
//             type="text"
//             placeholder="Search Caterers..."
//             className="w-full bg-transparent outline-none placeholder:text-gray-400"
//           />

//         </div>

//         {/* Right Side */}

//         <div className="flex items-center gap-3">

//           <button className="rounded-xl bg-white/10 p-3 text-white transition hover:bg-white/20">
//             <Bell size={20} />
//           </button>

//           <button className="rounded-xl bg-white/10 p-3 text-white transition hover:bg-white/20">
//             <Settings size={20} />
//           </button>

//           <button className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-md">

//             <UserCircle2
//               size={40}
//               className="text-[#C9184A]"
//             />

//             <div className="hidden text-left md:block">

//               <p className="font-semibold text-gray-900">
//                 Guest User
//               </p>

//               <p className="text-sm text-gray-500">
//                 Welcome
//               </p>

//             </div>

//           </button>

//         </div>

//       </div>
//     </header>
//   );
// }