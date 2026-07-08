import urllib.request
import urllib.parse
import os
import re

SUPABASE_URL = "https://rwknlleecsparayybuek.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3a25sbGVlY3NwYXJheXlidWVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzQzMjg2NCwiZXhwIjoyMDk5MDA4ODY0fQ.W3HM4dzrhsrEVSVNiCplnfbStvWiB4yLdxnJzPifYfg"
BUCKET = "portfolio"
SRC_DIR = "/Users/thapasya.s/Desktop/PORTFOLIO IMAGES/Color correction"

files = [f for f in os.listdir(SRC_DIR) if f.lower().endswith(".jpg")]
uploaded_files = []

for filename in files:
    filepath = os.path.join(SRC_DIR, filename)
    with open(filepath, "rb") as f:
        data = f.read()
    
    url = f"{SUPABASE_URL}/storage/v1/object/{BUCKET}/{urllib.parse.quote(filename)}"
    req = urllib.request.Request(
        url,
        data=data,
        method="POST",
        headers={
            "Authorization": f"Bearer {SUPABASE_KEY}",
            "Content-Type": "image/jpeg"
        }
    )
    
    try:
        urllib.request.urlopen(req)
        print(f"Uploaded {filename}")
        uploaded_files.append(filename)
    except Exception as e:
        # If it already exists, just use it
        print(f"Failed to upload {filename} (might already exist): {e}")
        uploaded_files.append(filename)

# Now update index.tsx
with open("src/routes/index.tsx", "r") as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if 'category: "Color Correction"' in line:
        pass # remove existing
    else:
        new_lines.append(line)

# find where to insert (let's just append at the end of the works array before the ];
insert_idx = -1
for i, line in enumerate(new_lines):
    if "];" in line and insert_idx == -1:
        insert_idx = i

for filename in uploaded_files:
    title = filename.replace(".jpg", "").replace("-", " ").replace("_", " ").title()
    url = f"https://rwknlleecsparayybuek.supabase.co/storage/v1/object/public/portfolio/{urllib.parse.quote(filename)}"
    item = f'  {{ title: "{title}", tag: "Portfolio Artwork", category: "Color Correction", gradient: "var(--gradient-sage)", image: "{url}" }},\n'
    new_lines.insert(insert_idx, item)
    insert_idx += 1

with open("src/routes/index.tsx", "w") as f:
    f.writelines(new_lines)

print("Updated index.tsx")
