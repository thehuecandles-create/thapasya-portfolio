import re

categories_map = {
    # 1 - ENVIRONMENT CONCEPT ART
    "10 Little Stars": "Environment Concept Art",
    "Bus No 10 1": "Environment Concept Art",
    "Door Concept Art": "Environment Concept Art",
    "Fruits Scene 1a": "Environment Concept Art",
    "Hicory Clock Scen 1 With Car": "Environment Concept Art",
    "Hicory Dicory Scene 2a": "Environment Concept Art",
    "I Know The Letter E Frame 2aa": "Environment Concept Art",
    "Kulfi Wala Scene 2": "Environment Concept Art",
    "Magical": "Environment Concept Art",
    "Magical 13": "Environment Concept Art",
    "Mera Desh": "Environment Concept Art",
    "Paper Boat Key Art 1a": "Environment Concept Art",

    # 2 - STORY BOOK DESIGNS
    "Story 1": "Story Book Designs",
    "Story 2": "Story Book Designs",
    "Artwork 7777": "Story Book Designs",
    "Artwork 7768": "Story Book Designs",
    "Artwork 7776": "Story Book Designs",

    # 3 - Story board
    "Artwork 7766": "Story Board",
    "Slide 01": "Story Board",
    "Slide 1": "Story Board",

    # 4 - 3d asset designs
    "Building Concept 1": "3D Asset Designs",
    "Building Concept 2": "3D Asset Designs",

    # 5 - STORYBOARD ANIMATICS
    "Storyboard (animatics)": "Storyboard Animatics",

    # 6 - COLOR CORRECTION
    "Color Correction 1": "Color Correction",
    "Color Correction": "Color Correction",

    # 7 - character designing
    "Character Concept Dog 1": "Character Designing",
    "Character Concept 1": "Character Designing",
    "Character Concept 1a": "Character Designing",
    "Character Concept 2a": "Character Designing",
    "Sketch 1": "Character Designing",
    "Rabbit Character (my Friendly Pets)": "Character Designing",

    # 8 - sketching
    "Shankarnag": "Sketching",
    "Ts Project 1 Vidhanasoudha": "Sketching",
    "Veena Store": "Sketching",
    "Grey Videographic Polaroid Creative Texture Background Motivational Quote Instagram Reel": "Sketching",

    # 9 - digital painting
    "Concept Art 2": "Digital Painting",
    "Creative Concept": "Digital Painting",

    # 10 - posters
    "Red And White Modern 3.3 Sale Instagram Post": "Posters",
    "Mega Sale Twitter Post Design Made With Postermywall": "Posters",
    "Orange Professional Course Instagram Post": "Posters",
    "Independence Day Poster 1": "Posters",
    "Independance Day 2025": "Posters",
    "Blue & Red Modern Creative Online Course Linkedin Video Ad": "Posters",
    "Blue & Red Modern Creative Online Course Linkedin Video Ad (1080 X 1350 Px)": "Posters",
    "Finance Company Webinar Linkedin Video Ad": "Posters",

    # 11 - frame by frame animation
    "Bloom Logo Intro Animation": "Frame By Frame Animation",
    "Raju Aur Uaske Papa Video": "Frame By Frame Animation",
}

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Update categories in works array
def replace_category(match):
    title = match.group(1)
    new_cat = categories_map.get(title, "Environment Concept Art")
    # match.group(2) is the rest of the line up to category: "OldCat"
    # We reconstruct the line
    return f'{{ title: "{title}"{match.group(2)}category: "{new_cat}"'

# Matches: { title: "Title", tag: "...", category: "Concept"
new_content = re.sub(r'\{\s*title:\s*"([^"]+)"(.*?)\bcategory:\s*"[^"]+"', replace_category, content, flags=re.DOTALL)

# Update Type
old_type = r'type Category = "All" \| "Environments" \| "Educational" \| "Concept";'
new_type = 'type Category = "All" | "Environment Concept Art" | "Story Book Designs" | "Story Board" | "3D Asset Designs" | "Storyboard Animatics" | "Color Correction" | "Character Designing" | "Sketching" | "Digital Painting" | "Posters" | "Frame By Frame Animation";'
new_content = re.sub(old_type, new_type, new_content)

# Update cats array in Works component
old_cats = r'const cats: Category\[\] = \["All", "Environments", "Educational", "Concept"\];'
new_cats = 'const cats: Category[] = ["All", "Environment Concept Art", "Story Book Designs", "Story Board", "3D Asset Designs", "Storyboard Animatics", "Color Correction", "Character Designing", "Sketching", "Digital Painting", "Posters", "Frame By Frame Animation"];'
new_content = re.sub(old_cats, new_cats, new_content)

# Update UI for filter buttons
old_ui = r'<div className="flex flex-wrap gap-2">'
new_ui = r'<div className="flex overflow-x-auto whitespace-nowrap gap-2 pb-4 scrollbar-hide">'
new_content = re.sub(old_ui, new_ui, new_content)

with open("src/routes/index.tsx", "w") as f:
    f.write(new_content)

print("index.tsx updated successfully!")
