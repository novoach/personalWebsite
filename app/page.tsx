import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

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

const links = [
  {
    label: "alex.tyulyupo@yale.edu",
    href: "mailto:alex.tyulyupo@yale.edu",
    external: false,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?sortby=pubdate&user=D-oEFq0AAAAJ&view_op=list_works",
    external: true,
  },
];

function ResearchLink() {
  return (
    <Link href="/research" className={styles.researchLink}>
      Explore the research.
    </Link>
  );
}

function Definition({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={compact ? styles.compactDefinition : styles.definition}>
      <div className={styles.definitionLabel}>Definition</div>
      <p>
        <strong>Organizational Reconnaissance</strong> is the cognitive
        investigation of distant environments. It is focused on objects that
        have consequences for the future strategy the agent will take.
      </p>
    </aside>
  );
}

export default function About() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.lead}>
        <div className={styles.eyebrow}>Research agenda</div>
        <h1>Organizational Reconnaissance</h1>
        <p>
          It is my firm conviction that many exploratory moves are preceded by
          a cognitive investigation of the environment. I call this process
          Organizational Reconnaissance. Researchers looking up prior
          literature, workers looking for jobs, organizations expanding an
          existing business, and many other actors have this in common. Most of
          my research focuses on the case of competitor identification for new
          venture concepts.
        </p>
        <div className={styles.contactLinks} aria-label="Contact and profile links">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <figure className={styles.compactIllustration}>
        <div
          className={styles.compactScene}
          role="img"
          aria-label="An observer surveys a partially visible competitive field while considering whether to defend or attack"
        >
          <img
            className={styles.compactCloud}
            src="/illustrations/recon-cloud.svg"
            alt=""
          />
          <img
            className={styles.compactGeneral}
            src="/illustrations/recon-general.svg"
            alt=""
          />
          <img
            className={styles.compactEnemy}
            src="/illustrations/recon-enemy.svg"
            alt=""
          />
          <img
            className={styles.compactCannon}
            src="/illustrations/recon-cannon.svg"
            alt=""
          />
        </div>
      </figure>

      <div className={styles.desktop}>
        <section className={styles.desktopStage}>
          <img
            className={styles.headspace}
            src="/illustrations/recon-cloud.svg"
            alt="The actor considers defending or attacking"
          />
          <img
            className={styles.general}
            src="/illustrations/recon-general.svg"
            alt="General looking through a telescope"
          />
          <img
            className={styles.enemy}
            src="/illustrations/recon-enemy.svg"
            alt="Partially observable enemy positions"
          />
          <img
            className={styles.cannon}
            src="/illustrations/recon-cannon.svg"
            alt="Cannon on distant hills outside the observed field"
          />

          <div className={styles.copyTop}>
            <div>No one needs convincing that perceptions of competition matter. Substantial research</div>
            <div>shows that cognitive maps of competition look nothing like an abstract representation</div>
            <div>of the industry. While the process of building these maps is rarely observed, their shape</div>
            <div>is usually explained by a history of market clashes and social contacts. But what about</div>
            <div>novel ventures? Are entrepreneurs confined to areas where they have personal expertise?</div>
            <div>That would be a very static economy, far from what we actually observe.</div>
          </div>

          <div className={styles.copyWedge}>
            <div>So how do</div>
            <div>entrepreneurs and</div>
            <div>other actors do this?</div>
            <div>Social networks research seems</div>
            <div>to provide the answer. Scientists are</div>
            <div>more likely to collaborate with colleagues</div>
            <div>who attended the same conference, and workers are</div>
            <div>more likely to apply to a company where a friend works.</div>
            <div>But again, this is an overly static picture. Does no one ever browse</div>
            <div>job boards or Google Scholar? And if they do, how do they do it?</div>
          </div>

          <Definition />

          <div className={styles.copyLower}>
            <p>
              In the broadest terms, this is done by navigating the cognitive
              infrastructure of categories. In an ideal world, categories would
              operate as a market interface that makes the process simple.
              Graduate from college with an X degree, apply to X jobs. Want to
              start a Y business, research companies in the Y industry. This is
              not what I mean by &quot;navigating,&quot; and this is not how things work.
            </p>
            <p>
              I have built an information portal to observe the process of
              competitor identification for venture concepts. I can already say
              that actors hold very different mental maps of the industries where
              competitors of a given venture can be found. Searchers gravitate
              toward items typical of the searched category and location. And what
              searchers find is likely to change the original intention of the
              reconnaissance. <ResearchLink />
            </p>
          </div>
        </section>
      </div>

      <div className={styles.compact}>
        <section className={styles.compactText}>
          <p>
            No one needs convincing that perceptions of competition matter.
            Substantial research shows that cognitive maps of competition look
            nothing like an abstract representation of the industry. While the
            process of building these maps is rarely observed, their shape is
            usually explained by a history of market clashes and social contacts.
            But what about novel ventures? Are entrepreneurs confined to areas
            where they have personal expertise? That would be a very static
            economy, far from what we actually observe.
          </p>
          <p>
            So how do entrepreneurs and other actors do this? Social networks
            research seems to provide the answer. Scientists are more likely to
            collaborate with colleagues who attended the same conference, and
            workers are more likely to apply to a company where a friend works.
            But again, this is an overly static picture. Does no one ever browse
            job boards or Google Scholar? And if they do, how do they do it?
          </p>
          <p>
            In the broadest terms, this is done by navigating the cognitive
            infrastructure of categories. In an ideal world, categories would
            operate as a market interface that makes the process simple. Graduate
            from college with an X degree, apply to X jobs. Want to start a Y
            business, research companies in the Y industry. This is not what I
            mean by &quot;navigating,&quot; and this is not how things work.
          </p>
          <p>
            I have built an information portal to observe the process of
            competitor identification for venture concepts. I can already say
            that actors hold very different mental maps of the industries where
            competitors of a given venture can be found. Searchers gravitate
            toward items typical of the searched category and location. And what
            searchers find is likely to change the original intention of the
            reconnaissance. <ResearchLink />
          </p>
          <Definition compact />
        </section>
      </div>

      <section className={styles.gotHere}>
        <h2>How I Got Here</h2>
        <p>
          Before my PhD, I worked as a freelance researcher at a large
          technology company, helping build a new online education platform for
          programmers. The task sounded simple. Use job-board data to describe
          the field&apos;s specializations.
        </p>
        <p>
          But the first question turned out to be the hard one. What counts as a
          specialization? The boundaries I drew would shape which skills people
          chose to learn, where they applied, and how they labeled themselves. I
          was drawing the map they would later use to search the field.
        </p>
        <p>
          I did not have the vocabulary for it then, but that was my introduction
          to the questions I now study. Categories are instruments that structure
          how people search a market.
        </p>
      </section>
    </div>
  );
}
