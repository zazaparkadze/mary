export default function Content() {
  return (
    <div className="flex flex-col grow p-5 w-full max-w-7xl">
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

          <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold text-center mb-12">
              What Parents Are Saying
            </h2>

            <div className="space-y-6">
              <blockquote className="bg-stone-50 border-l-4 border-rose-300 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  “Having <strong>Mary</strong> as my doula was the best
                  decision I made during my pregnancy. She made me feel calm,
                  confident, and supported every step of the way. During labor,
                  her presence grounded me and reminded me of my strength. I
                  truly couldn’t have done this without her.”
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — Client Testimonial
                </footer>
              </blockquote>

              <blockquote className="bg-stone-50 border-l-4 border-rose-300 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  “From our first meeting, <strong>Mary</strong> made me feel
                  heard and understood. She respected my wishes, explained
                  everything clearly, and stayed by my side through the most
                  intense moments. I felt safe, empowered, and deeply
                  supported.”
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — Client Testimonial
                </footer>
              </blockquote>

              <blockquote className="bg-stone-50 border-l-4 border-rose-300 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  “As a first-time mom, I was nervous and unsure of what to
                  expect.
                  <strong>Mary</strong> answered all my questions with patience
                  and kindness and helped me trust my body. I am so grateful for
                  this positive birth experience.”
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — First-Time Parent
                </footer>
              </blockquote>

              <blockquote className="bg-stone-50 border-l-4 border-rose-300 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  “<strong>Mary</strong> helped me feel strong and in control
                  throughout my birth. Her breathing techniques, encouragement,
                  and calm energy made a huge difference. She is knowledgeable,
                  compassionate, and truly passionate about her work.”
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — Client Testimonial
                </footer>
              </blockquote>

              <blockquote className="bg-stone-50 border-l-4 border-rose-300 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  “After birth, <strong>Mary</strong>’s support was just as
                  valuable. She helped me adjust emotionally and practically,
                  always reminding me that I was doing an amazing job. Every new
                  parent deserves this kind of care.”
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — Postpartum Client
                </footer>
              </blockquote>

              <blockquote className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed font-medium">
                  “Kind, professional, and incredibly supportive. I felt
                  empowered and cared for throughout my entire birth journey.”
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — Client Review
                </footer>
              </blockquote>
            </div>
          </section>
        </section>

        <section
          id="how-it-works"
          className="max-w-6xl mx-auto px-4 py-20 mt-6 text-slate-600"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            How It Works
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            Every family is unique. My role as a doula is to offer continuous,
            compassionate support before, during, and after birth — honoring
            your preferences, values, and intuition.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* <!-- Step 1 --> */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm">
              <div className="text-rose-400 text-2xl font-semibold mb-4">
                01
              </div>
              <h3 className="text-xl font-medium mb-3">Initial Consultation</h3>
              <p className="text-gray-700 leading-relaxed">
                We begin with a relaxed meeting to get to know each other. We
                talk about your pregnancy, birth hopes, past experiences, and
                any questions or concerns you may have. This is a space for
                listening, trust, and connection.
              </p>
            </div>

            {/* <!-- Step 2 --> */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm">
              <div className="text-rose-400 text-2xl font-semibold mb-4">
                02
              </div>
              <h3 className="text-xl font-medium mb-3">Prenatal Support</h3>
              <p className="text-gray-700 leading-relaxed">
                During pregnancy, we meet to prepare emotionally and
                practically. We explore birth preferences, comfort techniques,
                breathing, partner support, and ways to feel informed and
                confident as you approach your birth.
              </p>
            </div>

            {/* <!-- Step 3 --> */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm">
              <div className="text-rose-400 text-2xl font-semibold mb-4">
                03
              </div>
              <h3 className="text-xl font-medium mb-3">Birth Support</h3>
              <p className="text-gray-700 leading-relaxed">
                I offer continuous presence during labor, providing emotional
                reassurance, physical comfort, and calm guidance. I support you
                and your partner while respecting your birth team and medical
                providers.
              </p>
            </div>

            {/* <!-- Step 4 --> */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm">
              <div className="text-rose-400 text-2xl font-semibold mb-4">
                04
              </div>
              <h3 className="text-xl font-medium mb-3">
                Immediate Postpartum Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After birth, I remain present to help you settle in, offering
                gentle support with bonding, feeding, and emotional processing
                of your birth experience.
              </p>
            </div>

            {/* <!-- Step 5 --> */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm">
              <div className="text-rose-400 text-2xl font-semibold mb-4">
                05
              </div>
              <h3 className="text-xl font-medium mb-3">Postpartum Follow-Up</h3>
              <p className="text-gray-700 leading-relaxed">
                We reconnect after birth to reflect, answer questions, and
                support your transition into parenthood. This time focuses on
                reassurance, rest, and emotional care.
              </p>
            </div>

            {/*  <!-- Step 6 --> */}
            <div className="bg-rose-50 rounded-2xl p-8 shadow-sm">
              <div className="text-rose-500 text-2xl font-semibold mb-4">
                06
              </div>
              <h3 className="text-xl font-medium mb-3">
                Ongoing Respect & Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                My approach is non-judgmental and inclusive. I support all birth
                paths and honor your choices. You are always at the center of
                your own experience.
              </p>
            </div>
          </div>
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
