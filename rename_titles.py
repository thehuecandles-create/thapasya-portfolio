import re

def clean_title(title):
    # Remove extensions if any
    title = re.sub(r'\.(jpg|png|mp4|mov)$', '', title, flags=re.IGNORECASE)
    
    # Specific bad names
    if "Img " in title: return title.replace("Img ", "Artwork ")
    if "Sketch" in title.lower(): return "Concept Sketch"
    if "Slide" in title.lower(): return title.replace("Slide", "Presentation Slide").title()
    if title.strip() == "2": return "Concept Art 2"
    if "New Project" in title: return "Creative Concept"
    
    # Cleanup ugly suffixes/prefixes
    title = title.replace(" Copy", "")
    title = title.replace(" Final", "")
    title = title.replace("- Made With Postermywall", "")
    title = re.sub(r'\(\d+\)', '', title) # remove (1)
    title = title.replace("14Th Dec Characters", "Character Concept")
    title = title.replace("19Th Dec Buildings", "Building Concept")
    title = title.replace("30Th Nov Charecter", "Character Concept")
    title = title.replace("Dec 7Th Characters", "Character Concept")
    
    # Capitalize properly
    title = " ".join([word.capitalize() for word in title.split()])
    
    return title.strip()

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# We need to find the works array and replace the titles
def replacer(match):
    full_line = match.group(0)
    old_title = match.group(1)
    new_title = clean_title(old_title)
    return full_line.replace(f'title: "{old_title}"', f'title: "{new_title}"')

new_content = re.sub(r'\{ title: "([^"]+)",', replacer, content)

with open("src/routes/index.tsx", "w") as f:
    f.write(new_content)

print("Titles updated!")
