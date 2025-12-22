export default function Topic({
  topic,
  id,
}: {
  topic: {
    title: string;
    description: string;
    items: string[];
  };
  id: string;
}) {
  return (
    <section id={id} className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
      <p className="mb-2">{topic.description}</p>
      <ul className="list-disc ml-6 space-y-1">
        {topic.items.map((item) => (
          <li className="leading-relaxed" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
