export default function Howitworks({
  howItWorks,
}: {
  howItWorks: {
    title: string;
    description: string;
    steps: {
      id: number;
      title: string;
      text: string;
    }[];
  };
}) {
  return (
    <section
      id="how-it-works"
      className="max-w-6xl mx-auto px-4 py-20 mt-6 text-slate-600"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">
        {howItWorks.title}
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        {howItWorks.description}
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {howItWorks.steps.map((step) => (
          <div key={step.text}>
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm">
              <div className="text-rose-400 text-2xl font-semibold mb-4">
                0{step.id}
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
