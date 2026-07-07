export type Category = 
  | "All"
  | "Asset designing"
  | "Social Ad Campaigns"
  | "sketches"
  | "Story book"
  | "story board"
  | "Story board animatics"
  | "ENVIRONMENT"
  | "FRAME ANIMATION"
  | "Rhyme book"
  | "character designs";

export const categories: Category[] = [
  "All",
  "Asset designing",
  "Social Ad Campaigns",
  "sketches",
  "Story book",
  "story board",
  "Story board animatics",
  "ENVIRONMENT",
  "FRAME ANIMATION",
  "Rhyme book",
  "character designs"
];

export type Work = {
  title: string;
  url: string;
  category: Category;
  span?: string;
  description: string;
  gallery?: string[];
};

export const works: Work[] = [
  // Asset designing
  {
    title: "19th Dec buildings 1",
    url: "/portfolio/Asset designing/19th Dec buildings 1.jpg",
    category: "Asset designing",
    span: "md:col-span-2 md:row-span-2",
    description: "Detailed architecture and structural design focused on structural storytelling. Part of a larger visual development project."
  },
  {
    title: "19th Dec buildings 2",
    url: "/portfolio/Asset designing/19th Dec buildings 2 - Copy.jpg",
    category: "Asset designing",
    span: "md:col-span-2 md:row-span-2",
    description: "Detailed architecture and structural design focused on structural storytelling. Part of a larger visual development project."
  },

  // Social Ad Campaigns
  {
    title: "InterviewIvy - Ace Your Interviews",
    url: "/portfolio/Social Ad Campaigns/InterviewIvy.png",
    category: "Social Ad Campaigns",
    span: "md:col-span-2 md:row-span-2",
    description: "A promotional social ad campaign for the InterviewIvy.com platform, highlighting AI-driven interview feedback and preparation.",
    gallery: [
      "/portfolio/Posters/Finance Company Webinar LinkedIn Video Ad (1).jpg",
      "/portfolio/Posters/Blue & Red Modern Creative Online Course LinkedIn Video Ad (1).jpg",
      "/portfolio/Posters/2.jpg",
      "/portfolio/Posters/Orange Professional Course Instagram Post.png"
    ]
  },
  {
    title: "Independence Day Poster",
    url: "/portfolio/Posters/independence day poster 1 copy.jpg",
    category: "Social Ad Campaigns",
    span: "md:col-span-2 md:row-span-2",
    description: "A vibrant celebratory poster created for a digital campaign, emphasizing layout and typography."
  },
  {
    title: "Mega Sale Twitter Post",
    url: "/portfolio/Posters/Mega Sale Twitter Post Design - Made with PosterMyWall (4).jpg",
    category: "Social Ad Campaigns",
    span: "md:col-span-1 md:row-span-1",
    description: "Social media advertisement focused on high conversion and visual impact."
  },
  {
    title: "Red and White Modern 3.3 Sale",
    url: "/portfolio/Posters/Red and White Modern 3.3 Sale Instagram Post.jpg",
    category: "Social Ad Campaigns",
    span: "md:col-span-1 md:row-span-1",
    description: "Engaging social media graphics for an e-commerce promotion."
  },

  // sketches
  {
    title: "Independence Day 2025",
    url: "/portfolio/sketches/INDEPENDANCE-DAY-2025.jpg",
    category: "sketches",
    span: "md:col-span-2 md:row-span-2",
    description: "Traditional sketch exploring compositional elements and shading techniques."
  },
  {
    title: "Project 1 Vidhanasoudha",
    url: "/portfolio/sketches/TS-PROJECT-1-VIDHANASOUDHA.jpg",
    category: "sketches",
    span: "md:col-span-2 md:row-span-2",
    description: "Detailed location study and architectural sketch."
  },
  {
    title: "Veena store",
    url: "/portfolio/sketches/Veena-store.jpg",
    category: "sketches",
    span: "md:col-span-1 md:row-span-1",
    description: "A quick study capturing the atmosphere of a local storefront."
  },
  {
    title: "Puneeth Rajkumar",
    url: "/portfolio/sketches/puneeth rajkumar.mp4",
    category: "sketches",
    span: "md:col-span-1 md:row-span-1",
    description: "A time-lapse or animated process of a portrait sketch."
  },
  {
    title: "Shankarnag Final",
    url: "/portfolio/sketches/SHANKARNAG FINAL.mov",
    category: "sketches",
    span: "md:col-span-1 md:row-span-1",
    description: "Final render of an intricate sketching and rendering process."
  },

  // Story book
  {
    title: "Story 1",
    url: "/portfolio/Story book/story-1.jpg",
    category: "Story book",
    span: "md:col-span-2 md:row-span-2",
    description: "An illustration created for a children's storybook, highlighting character interaction."
  },
  {
    title: "Story 2",
    url: "/portfolio/Story book/story-2.jpg",
    category: "Story book",
    span: "md:col-span-2 md:row-span-2",
    description: "A whimsical scene designed to capture the imagination of young readers."
  },

  // story board
  {
    title: "Slide 01",
    url: "/portfolio/story board/slide 01.jpg",
    category: "story board",
    span: "md:col-span-2 md:row-span-2",
    description: "Initial framing and pacing for an animated sequence."
  },
  {
    title: "Slide 1",
    url: "/portfolio/story board/slide 1.jpg",
    category: "story board",
    span: "md:col-span-2 md:row-span-2",
    description: "Keyframe storyboard detailing action and camera movement."
  },

  // Story board animatics
  {
    title: "Storyboard animatics",
    url: "/portfolio/Story board animatics/Storyboard (animatics) (1).mp4",
    category: "Story board animatics",
    span: "md:col-span-2 md:row-span-2",
    description: "A timed animatic providing a sense of pacing, dialogue, and camera movement before final production."
  },

  // ENVIRONMENT
  {
    title: "Mera Desh",
    url: "/portfolio/ENVIRONMENT/MERA-DESH.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-2 md:row-span-2",
    description: "A lush environment design focusing on scale and atmosphere."
  },
  {
    title: "Letter E Frame",
    url: "/portfolio/ENVIRONMENT/I KNOW THE LETTER E FRAME 2aa.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-2 md:row-span-2",
    description: "Educational environment design blending typography with scenery."
  },
  {
    title: "Bus No 10",
    url: "/portfolio/ENVIRONMENT/BUS-NO-10-1.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-1 md:row-span-1",
    description: "A narrative-driven backdrop for an everyday travel scene."
  },
  {
    title: "Magical Final",
    url: "/portfolio/ENVIRONMENT/magical  final.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-1 md:row-span-1",
    description: "A vibrant, magical setting with whimsical lighting and colors."
  },
  {
    title: "Hicory Dicory Scene 2a",
    url: "/portfolio/ENVIRONMENT/Hicory-dicory-scene-2a.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-1 md:row-span-1",
    description: "A scene from a nursery rhyme adaptation focusing on visual storytelling."
  },
  {
    title: "Door Concept Art",
    url: "/portfolio/ENVIRONMENT/Door Concept Art.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-1 md:row-span-1",
    description: "Prop and environment concept art emphasizing texture and mood."
  },
  {
    title: "Paper Boat Key Art",
    url: "/portfolio/ENVIRONMENT/paper-boat-key-art-1a-.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-1 md:row-span-1",
    description: "Key art defining the visual style and mood of a short narrative."
  },
  {
    title: "10 Little Stars",
    url: "/portfolio/ENVIRONMENT/10-little-stars.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-1 md:row-span-1",
    description: "Nighttime environment design filled with wonder and soft lighting."
  },
  {
    title: "Kulfi Wala Scene 2",
    url: "/portfolio/ENVIRONMENT/Kulfi-wala-scene-2.jpg",
    category: "ENVIRONMENT",
    span: "md:col-span-1 md:row-span-1",
    description: "A nostalgic and rich background capturing cultural essence."
  },

  // FRAME ANIMATION
  {
    title: "Bio Lab Final Render",
    url: "/portfolio/FRAME ANIMATION/BIO LAB FINAL RENDER.mp4",
    category: "FRAME ANIMATION",
    span: "md:col-span-2 md:row-span-2",
    description: "A polished 3D environment rendered with detailed textures and lighting."
  },
  {
    title: "IOI Computer Lab",
    url: "/portfolio/FRAME ANIMATION/IOI COMPUTER LAB ( FINAL OUTPUT ).mp4",
    category: "FRAME ANIMATION",
    span: "md:col-span-2 md:row-span-2",
    description: "A complex architectural fly-through animation."
  },
  {
    title: "Bloom Logo Intro",
    url: "/portfolio/FRAME ANIMATION/Bloom_logo_intro animation Final.mp4",
    category: "FRAME ANIMATION",
    span: "md:col-span-1 md:row-span-1",
    description: "A dynamic logo reveal animation using smooth motion graphics."
  },
  {
    title: "Raju Aur Uaske Papa Video",
    url: "/portfolio/FRAME ANIMATION/Raju aur uaske papa video.mp4",
    category: "FRAME ANIMATION",
    span: "md:col-span-1 md:row-span-1",
    description: "An animated narrative sequence."
  },
  {
    title: "Frame Animation Portfolio",
    url: "/portfolio/FRAME ANIMATION/FRAME ANIMATION PORTFOLIO.mp4",
    category: "FRAME ANIMATION",
    span: "md:col-span-1 md:row-span-1",
    description: "A showcase reel of various frame animation projects."
  },

  // Rhyme book
  {
    title: "Rhyme book Image 1",
    url: "/portfolio/Rhyme book/IMG_7768.JPG",
    category: "Rhyme book",
    span: "md:col-span-2 md:row-span-2",
    description: "Illustration crafted for a children's rhyme book, focusing on playful characters."
  },
  {
    title: "Rhyme book Image 2",
    url: "/portfolio/Rhyme book/IMG_7777.JPG",
    category: "Rhyme book",
    span: "md:col-span-2 md:row-span-2",
    description: "A colorful spread designed to engage young readers."
  },
  {
    title: "Rhyme book Image 3",
    url: "/portfolio/Rhyme book/IMG_7776.JPG",
    category: "Rhyme book",
    span: "md:col-span-1 md:row-span-1",
    description: "Character and environment details tailored for early education materials."
  },

  // character designs
  {
    title: "Character Dog 1",
    url: "/portfolio/character designs/Dec 7th characters dog 1.jpg",
    category: "character designs",
    span: "md:col-span-2 md:row-span-2",
    description: "A stylized character sheet exploring expression and form."
  },
  {
    title: "Character 1",
    url: "/portfolio/character designs/30th Nov Charecter 1.jpg",
    category: "character designs",
    span: "md:col-span-2 md:row-span-2",
    description: "A detailed character design pass including costume and personality cues."
  },
  {
    title: "Rabbit Character",
    url: "/portfolio/character designs/Rabbit Character (My Friendly Pets).jpg",
    category: "character designs",
    span: "md:col-span-1 md:row-span-1",
    description: "A cute and appealing animal character designed for an educational project."
  },
  {
    title: "Sketch 1",
    url: "/portfolio/character designs/sketch 1.jpg",
    category: "character designs",
    span: "md:col-span-1 md:row-span-1",
    description: "Early rough sketches capturing dynamic poses and silhouettes."
  }
];
