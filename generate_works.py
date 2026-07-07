import urllib.request
import urllib.parse
import json

SUPABASE_URL = "https://rwknlleecsparayybuek.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3a25sbGVlY3NwYXJheXlidWVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzQzMjg2NCwiZXhwIjoyMDk5MDA4ODY0fQ.W3HM4dzrhsrEVSVNiCplnfbStvWiB4yLdxnJzPifYfg"
BUCKET = "portfolio"

req = urllib.request.Request(
    f"{SUPABASE_URL}/storage/v1/object/list/{BUCKET}",
    data=json.dumps({"prefix": "", "limit": 100, "offset": 0}).encode("utf-8"),
    headers={
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }
)
resp = urllib.request.urlopen(req)
files = json.loads(resp.read().decode("utf-8"))

works = []
for f in files:
    name = f["name"]
    if name == ".emptyFolderPlaceholder":
        continue
    
    url = f"{SUPABASE_URL}/storage/v1/object/public/{BUCKET}/{urllib.parse.quote(name)}"
    
    works.append({
        "title": name.rsplit(".", 1)[0].replace("-", " ").replace("_", " ").title(),
        "tag": "Portfolio Artwork",
        "category": "Concept",
        "gradient": "var(--gradient-sage)",
        "image": url
    })

with open("generated_works.json", "w") as out:
    json.dump(works, out, indent=2)

print(f"Generated {len(works)} items.")
