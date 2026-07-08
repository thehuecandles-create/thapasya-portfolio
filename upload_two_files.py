import urllib.request
import urllib.parse
import os

SUPABASE_URL = "https://rwknlleecsparayybuek.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3a25sbGVlY3NwYXJheXlidWVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzQzMjg2NCwiZXhwIjoyMDk5MDA4ODY0fQ.W3HM4dzrhsrEVSVNiCplnfbStvWiB4yLdxnJzPifYfg"
BUCKET = "portfolio"
SRC_DIR = "/Users/thapasya.s/Desktop/Portfolio images/color correction"

files = ["COLOR-CORRECTION-a.jpg", "COLOR-CORRECTION-b.jpg"]

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
    except Exception as e:
        print(f"Failed to upload {filename}: {e}")
