export default function Trusted() {
  const stats = [
    {
      number: "500+",
      title: "Events Completed",
    },
    {
      number: "250+",
      title: "Verified Caterers",
    },
    {
      number: "60+",
      title: "Cities Covered",
    },
    {
      number: "5K+😍",
      title: "Happy Customers",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h2 className="text-4xl font-bold text-orange-500">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}