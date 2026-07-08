import re

with open("src/routes/index.tsx", "r") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if "Concept Art 2" in line and "Digital Painting" in line:
        # replace with the 3 new items
        new_lines.append('  { title: "DP", tag: "Portfolio Artwork", category: "Digital Painting", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/DP.jpg" },\n')
        new_lines.append('  { title: "DP BD", tag: "Portfolio Artwork", category: "Digital Painting", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/DP_BD.jpg" },\n')
        new_lines.append('  { title: "Melt Breakdown", tag: "Portfolio Artwork", category: "Digital Painting", gradient: "var(--gradient-sage)", image: "https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/Melt%20Breakdown.jpg" },\n')
    elif "Creative Concept" in line and "Digital Painting" in line:
        # skip this line to remove it
        pass
    else:
        new_lines.append(line)

with open("src/routes/index.tsx", "w") as f:
    f.writelines(new_lines)

print("Updated index.tsx")
