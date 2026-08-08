"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  MapPin,
  Navigation,
  User,
  Phone,
  Home,
  Loader2,
} from "lucide-react";

export default function LoginPopup({ isOpen, onClose }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    location: "",
    address: "",
  });

  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        "Location access is not supported by your browser."
      );
      return;
    }

    setLoadingLocation(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setFormData((prev) => ({
          ...prev,
          location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
        }));

        setLoadingLocation(false);
      },

      () => {
        setLocationError(
          "Location access was denied. Please allow location permission or enter your location manually."
        );

        setLoadingLocation(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.phone ||
      !formData.location ||
      !formData.address
    ) {
      return;
    }

    localStorage.setItem(
      "caterhubUser",
      JSON.stringify(formData)
    );

    onClose();

    router.push("/caterer-listing");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="relative bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] px-7 py-6 text-white">

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <h2 className="pr-10 text-2xl font-bold">
            Welcome to CaterHUB
          </h2>

          <p className="mt-1 text-sm text-red-100">
            Enter your details to find the perfect caterer.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-7"
        >

          {/* Username */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Username
            </label>

            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#870000] focus-within:bg-white">

              <User
                size={19}
                className="mr-3 text-gray-400"
              />

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-transparent py-3 text-gray-800 outline-none placeholder:text-gray-400"
              />

            </div>
          </div>

          {/* Phone */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>

            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#870000] focus-within:bg-white">

              <Phone
                size={19}
                className="mr-3 text-gray-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full bg-transparent py-3 text-gray-800 outline-none placeholder:text-gray-400"
              />

            </div>
          </div>

          {/* Location */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Location
            </label>

            <div className="flex gap-2">

              <div className="flex flex-1 items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#870000] focus-within:bg-white">

                <MapPin
                  size={19}
                  className="mr-3 text-red-500"
                />

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your city or location"
                  required
                  className="w-full bg-transparent py-3 text-gray-800 outline-none placeholder:text-gray-400"
                />

              </div>

              <button
                type="button"
                onClick={getCurrentLocation}
                disabled={loadingLocation}
                title="Use my current location"
                className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
                >

                {loadingLocation ? (
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                ) : (
                  <Navigation size={20} />
                )}

              </button>

            </div>

            <p className="mt-2 text-xs text-gray-400">
              Press the location button to allow CaterHUB to access
              your current location.
            </p>

            {locationError && (
              <p className="mt-2 text-xs text-red-600">
                {locationError}
              </p>
            )}
          </div>

          {/* Address */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Address
            </label>

            <div className="flex items-start rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#870000] focus-within:bg-white">

              <Home
                size={19}
                className="mr-3 mt-3 text-gray-400"
              />

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows={3}
                required
                className="w-full resize-none bg-transparent py-3 text-gray-800 outline-none placeholder:text-gray-400"
              />

            </div>
          </div>

          {/* Confirm Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-[#b91d73] to-[#ee9ca7] py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            Confirm & Continue
          </button>

          <p className="text-center text-xs text-gray-400">
            Your information will be saved for your CaterHUB experience.
          </p>

        </form>
      </div>
    </div>
  );
}