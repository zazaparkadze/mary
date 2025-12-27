import Image from "next/image";
import { Rouge_Script } from "next/font/google";
import { he } from "@/app/content/heContent.json";
import { en } from "@/app/content/enContent.json";
import { ru } from "@/app/content/ruContent.json";
import Testimonials from "./testimonials";
import Howitworks from "./howitworks";
import Topic from "./topic";
const translate = { en, he, ru };
const rouge_script = Rouge_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Content({ locale }: { locale: Locale }) {
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
      <div className="flex flex-col w-full items-center justify-center">
        <Image
          src={"/img-3.png"}
          alt="mother-with-baby-street"
          width={512}
          height={768}
        />
        <p className={`${rouge_script.className} text-3xl py-2`}>The Start</p>
      </div>
      <article className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 md:p-8">
        <p className="text-gray-600 mb-4">{translate[locale].introText}</p>
        <nav className="flex flex-wrap gap-3 mt-2 mb-6">
          {Object.entries(translate[locale].nav).map(([key, label]) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-[#a36f6f] text-sm border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <Topic
          topic={translate[locale].whatIsChildbirth}
          id="whatIsChildbirth"
        />
        <Topic
          topic={translate[locale].commonChallenges}
          id="commonChallenges"
        />
        <section id="common-challenges" className="mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mt-4 text-sm">
            {translate[locale].commonChallenges.note}
          </div>
        </section>
        <Topic topic={translate[locale].whoHelps} id="whoHelps" />
        <Topic topic={translate[locale].whenToSeekHelp} id="whenToSeekHelp" />
        <Topic topic={translate[locale].whyItMatters} id="whyItMatters" />
        <Testimonials testimonials={translate[locale].testimonials} />
        <div className="flex flex-col w-full items-center justify-center">
          <Image
            src={"/img-1.png"}
            alt="mother-with-baby"
            width={512}
            height={768}
          />
          <p className={`${rouge_script.className} text-3xl py-2`}>
            The Journey Begins
          </p>
        </div>
        <section className="max-w-4xl mx-auto px-4 py-6">
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
