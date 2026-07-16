import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://alextyulyupo.com",
  mainEntity: {
    "@type": "Person",
    "@id": "https://alextyulyupo.com/#alex-tyulyupo",
    name: "Alex Tyulyupo",
    url: "https://alextyulyupo.com",
    image: "https://alextyulyupo.com/alex-tyulyupo.jpg",
    jobTitle: "Postdoctoral Associate",
    affiliation: {
      "@type": "Organization",
      name: "Yale School of Management",
    },
    sameAs: [
      "https://scholar.google.com/citations?user=D-oEFq0AAAAJ&view_op=list_works&sortby=pubdate",
    ],
    knowsAbout: [
      "Categorization",
      "Organizational learning",
      "Entrepreneurial opportunities",
    ],
  },
};

const interests = [
  "Categorization",
  "Organizational learning",
  "Entrepreneurial opportunities",
];

const links = [
  {
    label: "alex.tyulyupo@yale.edu",
    href: "mailto:alex.tyulyupo@yale.edu",
    external: false,
  },
  { label: "CV", href: "/docs/alex-tyulyupo-cv.pdf", external: false },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=D-oEFq0AAAAJ&view_op=list_works&sortby=pubdate",
    external: true,
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="mb-16 grid gap-10 md:grid-cols-[1fr_260px] md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Yale School of Management
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Alex Tyulyupo
          </h1>
          <p className="text-base text-gray-500 mb-6">
            Postdoctoral Associate studying organizational behavior, categories,
            and entrepreneurship.
          </p>
          <p className="text-xl leading-relaxed text-gray-800 mb-8">
            Before entering a market, founders have to work out who they are up
            against. I study that act of reconnaissance: how actors construct
            their competitive landscape before they ever compete in it.
          </p>

          <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
            <p>
              My research examines organizational reconnaissance, the tacit
              search process through which actors construct an understanding of
              their competitive environment before entering it.
            </p>
            <p>
              Working at the intersection of organizational categorization,
              organizational learning, and entrepreneurship, I study how
              founders identify competitors, how that identification builds the
              dimensions of the performance landscape, and how perceptions of
              competition reshape ventures as they develop.
            </p>
            <p>
              My empirical work is built around a behavioral simulation platform
              I designed. It presents a database of real companies, lets
              participants search by category or keyword, and records the full
              search trajectory for both observational studies and randomized
              experiments.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-md hover:border-gray-500 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="order-first md:order-none">
          <Image
            src="/alex-tyulyupo.jpg"
            alt="Alex Tyulyupo"
            width={1122}
            height={1402}
            priority
            sizes="(min-width: 768px) 260px, 70vw"
            className="h-auto w-full max-w-[260px] mx-auto rounded-lg object-cover"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Research Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          How I Got Here
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Before my PhD, I worked as a freelance researcher at a large
            technology company, helping build a new online education platform
            for programmers. The task sounded simple: use job-board data to
            describe the field&apos;s specializations.
          </p>
          <p>
            But the first question turned out to be the hard one: what counts
            as a specialization at all? The boundaries I drew would shape which
            skills people chose to learn, where they applied, and how they
            labeled themselves.
          </p>
          <p>
            I did not have the vocabulary for it then, but that was my
            introduction to the questions I now study. Categories are not
            neutral descriptions of a market. They are instruments that
            structure how people search it.
          </p>
        </div>
      </section>

    </div>
  );
}
