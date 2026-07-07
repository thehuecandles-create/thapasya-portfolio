import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

import { Category, categories, works } from "../lib/portfolio-data";

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
  const cats: Category[] = categories;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  // Reset gallery index when changing selected work
  useEffect(() => {
    setGalleryIndex(0);
  }, [selectedIndex]);

  // Handle keyboard navigation for the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filtered.length]);

  return (
    <section id="work" className="py-24 border-t border-border relative">
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
                onClick={() => { setFilter(c); setSelectedIndex(null); }}
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

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-5">
          {filtered.map((w, index) => (
            <button
              key={w.title}
              onClick={() => setSelectedIndex(index)}
              className={`group text-left relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all ${w.span ?? ""}`}
              style={{ background: "var(--gradient-sage)" }}
            >
              {w.url.endsWith(".mp4") || w.url.endsWith(".mov") ? (
                <video src={w.url} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <img src={w.url} alt={w.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full flex flex-col justify-end p-6 text-white pointer-events-none">
                <span className="text-xs uppercase tracking-[0.2em] opacity-80">{w.category}</span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight">
                  {w.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <button 
            onClick={() => setSelectedIndex(null)} 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all z-50"
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev! - 1 + filtered.length) % filtered.length); }} 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-3 transition-all z-50"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev! + 1) % filtered.length); }} 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-3 transition-all z-50"
          >
            <ChevronRight size={32} />
          </button>

          <div 
            className="bg-background rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 bg-black relative flex items-center justify-center min-h-[40vh] md:min-h-0 group/gallery">
              {(() => {
                const work = filtered[selectedIndex];
                const hasGallery = work.gallery && work.gallery.length > 0;
                const mediaUrl = hasGallery && galleryIndex > 0 ? work.gallery![galleryIndex - 1] : work.url;
                
                return (
                  <>
                    {mediaUrl.endsWith(".mp4") || mediaUrl.endsWith(".mov") ? (
                      <video src={mediaUrl} autoPlay controls playsInline className="max-w-full max-h-[50vh] md:max-h-[90vh] object-contain" />
                    ) : (
                      <img src={mediaUrl} alt={work.title} className="max-w-full max-h-[50vh] md:max-h-[90vh] object-contain" />
                    )}

                    {hasGallery && (
                      <>
                        {/* Gallery Inner Navigation */}
                        {galleryIndex > 0 && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev - 1); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/80 rounded-full p-2 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
                          >
                            <ChevronLeft size={24} />
                          </button>
                        )}
                        {galleryIndex < work.gallery!.length && (
                          <button 
                            onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev + 1); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/80 rounded-full p-2 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
                          >
                            <ChevronRight size={24} />
                          </button>
                        )}
                        
                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          <button 
                            onClick={() => setGalleryIndex(0)}
                            className={`w-2 h-2 rounded-full transition-colors ${galleryIndex === 0 ? "bg-white" : "bg-white/40"}`}
                          />
                          {work.gallery!.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setGalleryIndex(idx + 1)}
                              className={`w-2 h-2 rounded-full transition-colors ${galleryIndex === idx + 1 ? "bg-white" : "bg-white/40"}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
            </div>
            <div className="w-full md:w-[400px] p-8 md:p-10 flex flex-col overflow-y-auto bg-card border-l border-border">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                {filtered[selectedIndex].category}
              </span>
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-6">
                {filtered[selectedIndex].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {filtered[selectedIndex].description}
              </p>
              
              <div className="mt-auto pt-8">
                <button 
                  onClick={() => setSelectedIndex(null)}
                  className="w-full py-3 rounded-full border border-border hover:bg-muted transition-colors font-medium text-sm"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 border-t border-border bg-muted/40">
      <div className="container-page grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <img
            src="/profile.png"
            alt="Thapasya Profile"
            className="w-full aspect-[4/5] object-cover rounded-3xl border border-border shadow-[var(--shadow-lift)]"
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
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">ArtStation</a>
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
