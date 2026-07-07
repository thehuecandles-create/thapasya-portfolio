import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type Category = "All" | "Environments" | "Educational" | "Concept";

const works: {
  title: string;
  tag: string;
  category: Exclude<Category, "All">;
  gradient: string;
  span?: string;
  image?: string;
}[] = [
  { title: "Kulfi Vendor Scene", tag: "Educational Illustration", category: "Educational", gradient: "var(--gradient-ochre)", span: "md:col-span-2 md:row-span-2", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Kulfi-wala-scene-2.jpg" },
  { title: "Paper Boat River Landscape", tag: "Environment Design", category: "Environments", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/paper-boat-key-art-1a-.jpg" },
  { title: "Outdoor Magic Show", tag: "Event Concept", category: "Concept", gradient: "var(--gradient-dusk)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/magical%20%20final.jpg" },
  { title: "Ten Little Stars", tag: "Children's Illustration", category: "Educational", gradient: "var(--gradient-mist)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/10-little-stars.jpg" },
  { title: "School Courtyard & Flag", tag: "Environment Design", category: "Environments", gradient: "var(--gradient-warm)", span: "md:col-span-2", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/MERA-DESH.jpg" },
  { title: "Vintage Clock Room", tag: "Interior Design", category: "Environments", gradient: "var(--gradient-clay)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Hicory-clock-scen-1-with-car.jpg" },
  { title: "Cozy House Exterior", tag: "Exterior Concept", category: "Environments", gradient: "var(--gradient-ochre)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Hicory-dicory-scene-2a.jpg" },
  { title: "Dining Room Still Life", tag: "Interior Concept", category: "Concept", gradient: "var(--gradient-warm)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/fruits-scene-1a.jpg" },
  { title: "Bus No. 10 Journey", tag: "Educational Illustration", category: "Educational", gradient: "var(--gradient-sage)", span: "md:col-span-2", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/BUS-NO-10-1.jpg" },
];

const tools = [
  "Photoshop", "Storyboard Pro", "Blender", "ZBrush", "Maya",
  "Unreal Engine", "Substance Painter", "After Effects", "Premiere Pro",
  "Cinema 4D", "3ds Max", "Nuke", "CorelDraw",
];

const experience = [
  {
    role: "Associate Manager",
    period: "2022 — Present",
    company: "Physics Wallah",
    detail:
      "Translate complex educational concepts into engaging digital illustrations, diagrams, and storyboards. Integrate generative AI tools for accelerated ideation. Collaborate with cross-functional video production teams for design support and QC.",
  },
  {
    role: "Storyboard Artist",
    period: "2019 — 2022",
    company: "Tvastra Studios",
    detail:
      "Led an edtech project as storyboard artist. Handled video editing and motion graphics to deliver comprehensive visual sequences.",
  },
  {
    role: "Freelance Artist",
    period: "2016 — 2020",
    company: "Independent",
    detail:
      "Graphic arts, storyboarding, logo design, terracotta sculpting, and sketching for a range of clients.",
  },
];

function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = filter === "All" ? works : works.filter((w) => w.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Works filter={filter} setFilter={setFilter} filtered={filtered} />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">
          Thapasya<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#resume" className="hover:text-accent transition-colors">Resume</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 h-[440px] w-[440px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-sage)" }}
      />
      <div className="container-page relative pt-20 pb-28 md:pt-32 md:pb-40">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Concept Artist · Storyboarder · Bengaluru
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
          Crafting dynamic <em className="italic text-accent">visual</em> narratives.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Visual development, educational illustration, and AI-assisted ideation —
          translating stories into sequences that read at a glance.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-accent transition-colors"
          >
            View portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Works({
  filter,
  setFilter,
  filtered,
}: {
  filter: Category;
  setFilter: (c: Category) => void;
  filtered: typeof works;
}) {
  const cats: Category[] = ["All", "Environments", "Educational", "Concept"];
  return (
    <section id="work" className="py-24 border-t border-border">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Selected works
            </p>
            <h2 className="text-4xl md:text-5xl">Environments, illustration, and story.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-5">
          {filtered.map((w) => (
            <article
              key={w.title}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all ${w.span ?? ""}`}
              style={{ background: w.gradient }}
            >
              {w.image && (
                <img src={w.image} alt={w.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-[0.2em] opacity-80">{w.tag}</span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight">
                  {w.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 border-t border-border bg-muted/40">
      <div className="container-page grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <div
            className="aspect-[4/5] rounded-3xl border border-border shadow-[var(--shadow-lift)]"
            style={{ background: "var(--gradient-clay)" }}
          />
        </div>
        <div className="md:col-span-3">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Behind the canvas
          </p>
          <h2 className="text-4xl md:text-5xl mb-6">
            I bring untold stories to life.
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Whether I'm blocking out a dynamic action sequence in a storyboard or doing
            the final lighting pass on a 3D render, my goal is always to serve the narrative.
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            With a strong foundation in traditional art — an MVA from Bangalore University
            and University Topper in my BVA — I bridge initial concepts and final production assets.
          </p>

          <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Software & tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-sm border border-border bg-background"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="py-24 border-t border-border">
      <div className="container-page">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl mb-14 max-w-3xl">
          A decade of translating ideas into sequences.
        </h2>
        <div className="space-y-10">
          {experience.map((e) => (
            <div
              key={e.role + e.company}
              className="grid md:grid-cols-4 gap-6 pb-10 border-b border-border last:border-0"
            >
              <div className="text-sm text-muted-foreground">{e.period}</div>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl">
                  {e.role} <span className="text-accent">· {e.company}</span>
                </h3>
                <p className="mt-3 text-muted-foreground max-w-2xl">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-border relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="container-page relative text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl mb-6">
          Let's craft your next <em className="italic text-accent">visual story</em>.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Available for storyboarding, concept art, and visual development opportunities.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:thapasya98@gmail.com"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-accent transition-colors"
          >
            thapasya98@gmail.com
          </a>
          <a
            href="tel:+919980859864"
            className="inline-flex items-center rounded-full border border-border bg-background px-8 py-4 font-medium hover:border-accent hover:text-accent transition-colors"
          >
            +91 99808 59864
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Thapasya Shivaprakash. All rights reserved.</p>
      </div>
    </footer>
  );
}
