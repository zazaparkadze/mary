export default function Testimonials({
  testimonials,
}: {
  testimonials: {
    title: string;
    description: string;
    items: string[];
  };
}) {
  return (
    <section id="testimonials" className="mt-6 text-slate-600">
      <h2 className="text-xl font-semibold mb-2">{testimonials.title}</h2>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          {testimonials.description}
        </h2>

        {testimonials.items.map((item) => (
          <div className="space-y-6 my-8" key={item.slice(7)}>
            <blockquote className="bg-stone-50 border-l-4 border-rose-200 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed">{item}</p>
              <footer className="mt-3 mb-4 text-sm text-gray-500">
                — Client Testimonial
              </footer>
            </blockquote>
          </div>
        ))}
      </section>
    </section>
  );
}
