import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type Category = "All" | "Environment Concept Art" | "Story Book Designs" | "Story Board" | "3D Asset Designs" | "Storyboard Animatics" | "Color Correction" | "Character Designing" | "Sketching" | "Digital Painting" | "Posters" | "Frame By Frame Animation";

const works: {
  title: string;
  tag: string;
  category: Exclude<Category, "All">;
  gradient: string;
  span?: string;
  image?: string;
}[] = [
  { title: "10 Little Stars", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/10-little-stars.jpg" },
  { title: "Character Concept 1a", tag: "Portfolio Artwork", category: "Character Designing", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/14th%20Dec%20Characters%201a.jpg" },
  { title: "Building Concept 1", tag: "Portfolio Artwork", category: "3D Asset Designs", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/19th%20Dec%20buildings%201.jpg" },
  { title: "Building Concept 2", tag: "Portfolio Artwork", category: "3D Asset Designs", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/19th%20Dec%20buildings%202%20-%20Copy.jpg" },
  { title: "DP", tag: "Portfolio Artwork", category: "Digital Painting", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/DP.jpg" },
  { title: "DP BD", tag: "Portfolio Artwork", category: "Digital Painting", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/DP_BD.jpg" },
  { title: "Melt Breakdown", tag: "Portfolio Artwork", category: "Digital Painting", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Melt%20Breakdown.jpg" },
  { title: "Character Concept 1", tag: "Portfolio Artwork", category: "Character Designing", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/30th%20Nov%20Charecter%201.jpg" },
  { title: "Bloom Logo Intro Animation", tag: "Portfolio Artwork", category: "Frame By Frame Animation", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Bloom_logo_intro%20animation%20Final.mp4" },
  { title: "Blue & Red Modern Creative Online Course Linkedin Video Ad", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Blue%20%26%20Red%20Modern%20Creative%20Online%20Course%20LinkedIn%20Video%20Ad%20%281%29.jpg" },
  { title: "Blue & Red Modern Creative Online Course Linkedin Video Ad (1080 X 1350 Px)", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Blue%20%26%20Red%20Modern%20Creative%20Online%20Course%20LinkedIn%20Video%20Ad%20%281080%20x%201350%20px%29.jpg" },
  { title: "Bus No 10 1", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/BUS-NO-10-1.jpg" },
  { title: "Character Concept Dog 1", tag: "Portfolio Artwork", category: "Character Designing", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Dec%207th%20characters%20dog%201.jpg" },
  { title: "Door Concept Art", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Door%20Concept%20Art.jpg" },
  { title: "Finance Company Webinar Linkedin Video Ad", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Finance%20Company%20Webinar%20LinkedIn%20Video%20Ad%20%281%29.jpg" },
  { title: "Fruits Scene 1a", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/fruits-scene-1a.jpg" },
  { title: "Grey Videographic Polaroid Creative Texture Background Motivational Quote Instagram Reel", tag: "Portfolio Artwork", category: "Sketching", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Grey%20Videographic%20Polaroid%20Creative%20Texture%20Background%20Motivational%20Quote%20Instagram%20Reel.mp4" },
  { title: "Hicory Clock Scen 1 With Car", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Hicory-clock-scen-1-with-car.jpg" },
  { title: "Hicory Dicory Scene 2a", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Hicory-dicory-scene-2a.jpg" },
  { title: "I Know The Letter E Frame 2aa", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/I%20KNOW%20THE%20LETTER%20E%20FRAME%202aa.jpg" },
  { title: "Artwork 7766", tag: "Portfolio Artwork", category: "Story Board", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/IMG_7766.JPG" },
  { title: "Artwork 7768", tag: "Portfolio Artwork", category: "Story Book Designs", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/IMG_7768.JPG" },
  { title: "Artwork 7776", tag: "Portfolio Artwork", category: "Story Book Designs", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/IMG_7776.JPG" },
  { title: "Artwork 7777", tag: "Portfolio Artwork", category: "Story Book Designs", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/IMG_7777.JPG" },
  { title: "Independance Day 2025", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/INDEPENDANCE-DAY-2025.jpg" },
  { title: "Independence Day Poster 1", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/independence%20day%20poster%201%20copy.jpg" },
  { title: "Kulfi Wala Scene 2", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Kulfi-wala-scene-2.jpg" },
  { title: "Magical", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/magical%20%20final.jpg" },
  { title: "Magical 13", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Magical-13.jpg" },
  { title: "Mega Sale Twitter Post Design Made With Postermywall", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Mega%20Sale%20Twitter%20Post%20Design%20-%20Made%20with%20PosterMyWall%20%284%29.jpg" },
  { title: "Mera Desh", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/MERA-DESH.jpg" },
  { title: "Orange Professional Course Instagram Post", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Orange%20Professional%20Course%20Instagram%20Post.png" },
  { title: "Paper Boat Key Art 1a", tag: "Portfolio Artwork", category: "Environment Concept Art", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/paper-boat-key-art-1a-.jpg" },
  { title: "Rabbit Character (my Friendly Pets)", tag: "Portfolio Artwork", category: "Character Designing", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Rabbit%20Character%20%28My%20Friendly%20Pets%29.jpg" },
  { title: "Raju Aur Uaske Papa Video", tag: "Portfolio Artwork", category: "Frame By Frame Animation", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Raju%20aur%20uaske%20papa%20video.mp4" },
  { title: "Red And White Modern 3.3 Sale Instagram Post", tag: "Portfolio Artwork", category: "Posters", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Red%20and%20White%20Modern%203.3%20Sale%20Instagram%20Post.jpg" },
  { title: "Shankarnag", tag: "Portfolio Artwork", category: "Sketching", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/SHANKARNAG%20FINAL.mov" },
  { title: "Sketch 1", tag: "Portfolio Artwork", category: "Character Designing", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/sketch%201.jpg" },
  { title: "Slide 01", tag: "Portfolio Artwork", category: "Story Board", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/slide%2001.jpg" },
  { title: "Slide 1", tag: "Portfolio Artwork", category: "Story Board", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/slide%201.jpg" },
  { title: "Story 1", tag: "Portfolio Artwork", category: "Story Book Designs", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/story-1.jpg" },
  { title: "Story 2", tag: "Portfolio Artwork", category: "Story Book Designs", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/story-2.jpg" },
  { title: "Storyboard (animatics)", tag: "Portfolio Artwork", category: "Storyboard Animatics", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Storyboard%20%28animatics%29%20%281%29.mp4" },
  { title: "Ts Project 1 Vidhanasoudha", tag: "Portfolio Artwork", category: "Sketching", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/TS-PROJECT-1-VIDHANASOUDHA.jpg" },
  { title: "Veena Store", tag: "Portfolio Artwork", category: "Sketching", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Veena-store.jpg" },
  { title: "Color Correction", tag: "Portfolio Artwork", category: "Color Correction", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/COLOR-CORRECTION.jpg" },
  { title: "Color Correction 6", tag: "Portfolio Artwork", category: "Color Correction", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/COLOR-CORRECTION-6.jpg" },
  { title: "Color Correction 4", tag: "Portfolio Artwork", category: "Color Correction", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/COLOR-CORRECTION-4.jpg" },
  { title: "Color Correction 5", tag: "Portfolio Artwork", category: "Color Correction", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/COLOR-CORRECTION-5.jpg" },
  { title: "Color Correction 1", tag: "Portfolio Artwork", category: "Color Correction", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/color-correction-1.jpg" },
];

const tools = [
  {
    category: "2D & Graphic Design",
    items: ["Adobe Photoshop (Primary)", "Adobe Illustrator (Primary)", "CorelDRAW (Primary)"],
  },
  {
    category: "Video Editing & Motion Graphics",
    items: ["Adobe Premiere Pro (Primary)", "Adobe After Effects (Primary) with complete knowledge with expertise"],
  },
  {
    category: "3D Production & Compositing",
    items: ["Autodesk Maya", "Cinema 4D", "3ds Max", "The Foundry Nuke (For advanced node-based compositing)"],
  },
  {
    category: "AI-Assisted Ideation & Generation",
    items: ["Midjourney", "Leonardo.AI", "Adobe Firefly", "Runway", "Gemini", "ChatGPT", "Copilot", "Canva"],
  },
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

const education = [
  {
    degree: "Master of Visual Arts (MVA)",
    school: "Bangalore University",
    detail: "Refined my advanced aesthetic sensibilities and elevated my approach to visual storytelling and conceptual design.",
  },
  {
    degree: "Bachelor of Visual Arts (BVA)",
    school: "Hampi University",
    detail: "Mastered the foundational pillars of traditional art, graduating with the highest distinction as University Topper.",
  },
  {
    degree: "International Program in Visual Arts and Design (IPVAD)",
    school: "MAAC",
    detail: "Bridged my classical art background with cutting-edge industry standards, mastering digital pipelines and cinematic techniques.",
  },
  {
    degree: "Pre-University Course (PUC - PCMB)",
    school: "MES Kishore Kendra",
    detail: "Cultivated a strong analytical foundation in Physics, Chemistry, Mathematics, and Biology.",
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
  const [selected, setSelected] = useState<typeof works[0] | null>(null);
  const cats: Category[] = ["All", "Environment Concept Art", "Story Book Designs", "Story Board", "3D Asset Designs", "Storyboard Animatics", "Color Correction", "Character Designing", "Sketching", "Digital Painting", "Posters", "Frame By Frame Animation"];
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
          <div className="flex overflow-x-auto whitespace-nowrap gap-2 pb-4 scrollbar-hide">
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

        {filter === "All" ? (
          <div className="flex flex-col gap-16">
            {cats.filter(c => c !== "All").map(cat => {
              const catWorks = works.filter(w => w.category === cat);
              if (catWorks.length === 0) return null;
              return (
                <div key={cat} className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-display">{cat}</h3>
                  <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide snap-x">
                    {catWorks.map(w => (
                      <article
                        key={w.title}
                        onClick={() => setSelected(w)}
                        className="group relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all cursor-pointer shrink-0 w-[85vw] md:w-[400px] h-[280px] snap-center"
                        style={{ background: w.gradient }}
                      >
                        {w.image && (w.image.toLowerCase().endsWith(".mp4") || w.image.toLowerCase().endsWith(".mov")) ? (
                          <video src={w.image} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : w.image ? (
                          <img src={w.image} alt={w.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-5">
            {filtered.map((w) => (
              <article
                key={w.title}
                onClick={() => setSelected(w)}
                className={`group relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all cursor-pointer ${w.span ?? ""}`}
                style={{ background: w.gradient }}
              >
                {w.image && (w.image.toLowerCase().endsWith(".mp4") || w.image.toLowerCase().endsWith(".mov")) ? (
                  <video src={w.image} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : w.image ? (
                  <img src={w.image} alt={w.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : null}
              </article>
            ))}
          </div>
        )}

        {selected && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <div 
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center cursor-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors text-xl"
              >
                ✕
              </button>
              {selected.image && (selected.image.toLowerCase().endsWith(".mp4") || selected.image.toLowerCase().endsWith(".mov")) ? (
                <video src={selected.image} autoPlay loop controls className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
              ) : selected.image ? (
                <img src={selected.image} alt={selected.title} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 border-t border-border bg-muted/40">
      <div className="container-page grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-3xl border border-border shadow-[var(--shadow-lift)] overflow-hidden relative bg-muted/40">
            <img 
              src="https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/profile.jpg" 
              alt="Thapasya Shivaprakash" 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient if image is not yet added
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.style.background = 'var(--gradient-clay)';
              }}
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Behind the canvas
          </p>
          <h2 className="text-4xl md:text-5xl mb-6">
            I bring untold stories to life.
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            A limitless creative driven by a passion for visual storytelling, I specialize in crafting breathtaking concept art, immersive environments, and cinematic storyboards. I thrive on tackling complex creative challenges, seamlessly blending my foundational 2D artistry—including high-impact poster design—with a complete mastery of the 3D production workflow.
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            To bring these narratives fully to life, I deliver striking visuals across all mediums by integrating professional video editing and motion graphics.
          </p>

          <h3 className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Software & tools
          </h3>
          <div className="flex flex-col gap-6 pb-4">
            {tools.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-semibold mb-3 text-foreground">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-sm border border-border bg-background"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
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

        <div className="mt-20">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl mb-14 max-w-3xl">
            Foundations in art and design.
          </h2>
          <div className="space-y-10">
            {education.map((e) => (
              <div
                key={e.degree + e.school}
                className="grid md:grid-cols-4 gap-6 pb-10 border-b border-border last:border-0"
              >
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl">
                    {e.degree} <span className="text-accent">· {e.school}</span>
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-2xl">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
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
