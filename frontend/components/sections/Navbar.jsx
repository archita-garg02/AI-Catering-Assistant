import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-10">
        {/* Logo */}
        <div>
          <h2 className="text-5xl font-extrabold">
            Cater<span className="text-[#C9184A]">HUB</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a href="#" className="font-medium hover:text-orange-500 transition">
          Home
          </a>

          <a href="#" className="font-medium hover:text-orange-500 transition">
            Services
          </a>

          <a href="#" className="font-medium hover:text-orange-500 transition">
            AI Assistant
          </a>

          <a href="#" className="font-medium hover:text-orange-500 transition">
            Contact
          </a>
        </nav>
        <nav className="hidden items-center gap-6 lg:flex">
        <Button className="rounded-full bg-gradient-to-r from-[#FF8FA9] to-[#FFB3C1] px-5 font-medium text-white hover:opacity-90">
          Account
        </Button>
        <Button className="rounded-full bg-gradient-to-r from-[#FF8FA9] to-[#FFB3C1] px-5 font-medium text-white hover:opacity-90">
          Register
        </Button>
        </nav>

      </div>
    </header>
  );
}

