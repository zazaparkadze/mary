import { he } from "@/app/content/he.content.json";
import { en } from "@/app/content/en.content.json";
import Testimonials from "./testimonials";
import Howitworks from "./howitworks";
import Topic from "./topic";
const translate = { en, he };

export default function Content({ locale }: { locale: "en" | "he" }) {
  return (
    <div className="flex flex-col grow p-5 w-full max-w-7xl">
      <header className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          {translate[locale].understandingChildBirth}
        </h1>
        <p className="text-gray-600 text-base">
          {translate[locale].aClearSafeOverview}
        </p>
      </header>
      <article className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 md:p-8">
        <p className="text-gray-600 mb-4">{translate[locale].introText}</p>

        <nav className="flex flex-wrap gap-3 mt-2 mb-6">
          <a
            href="#what-is-childbirth"
            className="text-[#a36f6f] text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            {translate[locale].nav.whatIsChildbirth}
          </a>
          <a
            href="#common-challenges"
            className="text-[#a36f6f] text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            {translate[locale].nav.commonChallenges}
          </a>
          <a
            href="#who-helps"
            className="text-[#a36f6f] text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            {translate[locale].nav.whoHelps}
          </a>
          <a
            href="#when-to-seek-help"
            className="text-[#a36f6f] text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            {translate[locale].nav.whenToSeekHelp}
          </a>
          <a
            href="#why-it-matters"
            className="text-[#a36f6f] text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
          >
            {translate[locale].nav.whyItMatters}
          </a>
        </nav>

        <Topic topic={translate[locale].whatIsChildbirth} />
        <Topic topic={translate[locale].commonChallenges} />
        <section id="common-challenges" className="mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mt-4 text-sm">
            {translate[locale].commonChallenges.note}
          </div>
        </section>

        <section id="who-helps" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {translate[locale].whoHelps.title}
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>{translate[locale].whoHelps.items[0]}</li>
            <li>{translate[locale].whoHelps.items[1]}</li>
            <li>{translate[locale].whoHelps.items[2]}</li>
            <li>{translate[locale].whoHelps.items[3]}</li>
          </ul>
        </section>

        <Topic topic={translate[locale].whenToSeekHelp} />
        <Topic topic={translate[locale].whyItMatters} />
        <Testimonials testimonials={translate[locale].testimonials} />
        <section className="max-w-4xl mx-auto px-4 py-16">
          <section id="testimonials" className="mb-6 text-slate-600">
            <div className="space-y-6">
              <blockquote className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed font-medium">
                  {translate[locale].clientReview}
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — Client Review
                </footer>
              </blockquote>
            </div>
          </section>
        </section>
        <Howitworks howItWorks={translate[locale].howItWorks} />
        <footer className="text-center text-gray-500 text-sm mt-6">
          <a download className="underline" href="contract.pdf">
            Download a printable contract PDF
          </a>
        </footer>
      </article>
    </div>
  );
}
