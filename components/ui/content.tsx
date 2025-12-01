export default function Content() {
  return (
    <div className="flex flex-col grow p-5">
      <header className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Understanding Childbirth: What Happens, Challenges, and Professional
          Help
        </h1>
        <p className="text-gray-600 text-base">
          A clear, safe overview of childbirth — written in simple, calm
          language.
        </p>
      </header>
      <article className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 md:p-8">
        <p className="text-gray-600 mb-4">
          This article explains childbirth without graphic detail. It&apos;s
          helpful for basic health knowledge and understanding how professionals
          support the process.
        </p>

        <nav className="flex flex-wrap gap-3 mt-2 mb-6">
          <a
            href="#what-is-childbirth"
            className="text-indigo-600 text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            What is childbirth?
          </a>
          <a
            href="#common-challenges"
            className="text-indigo-600 text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            Common challenges
          </a>
          <a
            href="#who-helps"
            className="text-indigo-600 text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            Professionals who help
          </a>
          <a
            href="#when-to-seek-help"
            className="text-indigo-600 text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            When to get help
          </a>
          <a
            href="#why-it-matters"
            className="text-indigo-600 text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            Why it matters
          </a>
        </nav>

        <section id="what-is-childbirth" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What is childbirth?</h2>
          <p className="mb-2">
            Childbirth is the process of delivering a baby. It typically happens
            in three stages:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Early and active labor</strong> — the uterus contracts so
              the cervix can open.
            </li>
            <li>
              <strong>Birth</strong> — the baby moves through the birth canal.
            </li>
            <li>
              <strong>Placenta delivery</strong> — the process completes after
              the baby is born.
            </li>
          </ul>
        </section>

        <section id="common-challenges" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Common challenges</h2>
          <p className="mb-2">
            Some difficulties may occur during childbirth, such as:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Long labor</strong> — sometimes progress is slower than
              expected.
            </li>
            <li>
              <strong>Pain or exhaustion</strong> — birth is physically intense,
              so support is important.
            </li>
            <li>
              <strong>Baby&apos;s position</strong> — not all positions make
              birth easy, requiring adjustment or assistance.
            </li>
            <li>
              <strong>Unexpected changes</strong> — like shifts in heart rate or
              contraction patterns.
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mt-4 text-sm">
            These challenges are common, and trained professionals monitor them
            to keep both the parent and baby safe.
          </div>
        </section>

        <section id="who-helps" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Professionals who help</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Obstetricians (OB-GYNs)</strong> — doctors specialized in
              pregnancy and birth.
            </li>
            <li>
              <strong>Midwives</strong> — trained professionals who support many
              kinds of deliveries.
            </li>
            <li>
              <strong>Nurses</strong> — help monitor health and provide care
              during labor.
            </li>
            <li>
              <strong>Doulas</strong> — offer emotional and practical support
              (non-medical).
            </li>
          </ul>
        </section>

        <section id="when-to-seek-help" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            When to seek professional help
          </h2>
          <p className="mb-2">
            Help is always recommended, but it is especially important if:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Labor slows down or stops progressing.</li>
            <li>There is intense or unusual pain.</li>
            <li>The baby shows signs of stress (monitored by staff).</li>
            <li>Symptoms like fever or unusual bleeding appear.</li>
          </ul>
        </section>

        <section id="why-it-matters" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Why understanding childbirth matters
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>It builds important basic health knowledge.</li>
            <li>Helps you support friends or family who may be expecting.</li>
            <li>
              Shows respect for the physical and emotional effort involved.
            </li>
          </ul>
        </section>

        <section id="testimonials" className="mb-6 text-slate-600">
          <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
          <p className="mb-2">
            Help is always recommended, but it is especially important if:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Labor slows down or stops progressing.</li>
            <li>There is intense or unusual pain.</li>
            <li>The baby shows signs of stress (monitored by staff).</li>
            <li>Symptoms like fever or unusual bleeding appear.</li>
          </ul>
        </section>

        <section id="how-it-works" className="mb-6 text-slate-600">
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <p className="mb-2">
            Help is always recommended, but it is especially important if:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Labor slows down or stops progressing.</li>
            <li>There is intense or unusual pain.</li>
            <li>The baby shows signs of stress (monitored by staff).</li>
            <li>Symptoms like fever or unusual bleeding appear.</li>
          </ul>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-6">
          <a download className="underline" href="mary.pdf">
            Download a printable PDF.
          </a>
        </footer>
      </article>
    </div>
  );
}
