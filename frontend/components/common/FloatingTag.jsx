export default function FloatingTag({
  label,
  className = "",
}) {
  return (
    <div
      className={`rounded-full border border-gray-100 bg-white/95 px-5 py-2 text-sm font-semibold text-gray-800 shadow-lg backdrop-blur-md ${className}`}
    >
      {label}
    </div>
  );
}