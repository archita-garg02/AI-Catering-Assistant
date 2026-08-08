export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}