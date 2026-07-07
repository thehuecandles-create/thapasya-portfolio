import os
import sys
import json
import urllib.request
import urllib.parse
import mimetypes

SUPABASE_URL = "https://rwknlleecsparayybuek.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3a25sbGVlY3NwYXJheXlidWVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzQzMjg2NCwiZXhwIjoyMDk5MDA4ODY0fQ.W3HM4dzrhsrEVSVNiCplnfbStvWiB4yLdxnJzPifYfg"
BUCKET_NAME = "portfolio"
PORTFOLIO_DIR = os.path.expanduser("~/Desktop/PORTFOLIO IMAGES")

headers = {
    "Authorization": f"Bearer {SUPABASE_KEY}",
}

def create_bucket():
    url = f"{SUPABASE_URL}/storage/v1/bucket"
    req = urllib.request.Request(url, headers={
        **headers,
        "Content-Type": "application/json"
    }, data=json.dumps({"id": BUCKET_NAME, "name": BUCKET_NAME, "public": True}).encode('utf-8'))
    try:
        urllib.request.urlopen(req)
        print("Bucket created.")
    except urllib.error.HTTPError as e:
        pass

def upload_file(filepath):
    filename = os.path.basename(filepath)
    encoded_filename = urllib.parse.quote(filename)
    url = f"{SUPABASE_URL}/storage/v1/object/{BUCKET_NAME}/{encoded_filename}"
    
    mime_type, _ = mimetypes.guess_type(filepath)
    if not mime_type:
        mime_type = "application/octet-stream"
        
    with open(filepath, 'rb') as f:
        data = f.read()

    req = urllib.request.Request(url, headers={
        **headers,
        "Content-Type": mime_type
    }, data=data, method='POST')

    try:
        urllib.request.urlopen(req)
        print(f"Uploaded {filename}")
        return f"{SUPABASE_URL}/storage/v1/object/public/{BUCKET_NAME}/{encoded_filename}"
    except urllib.error.HTTPError as e:
        if e.code == 400 and 'Duplicate' in e.read().decode('utf-8'):
            print(f"Already exists {filename}")
            return f"{SUPABASE_URL}/storage/v1/object/public/{BUCKET_NAME}/{encoded_filename}"
        else:
            print(f"Failed to upload {filename}")
            return None

if __name__ == "__main__":
    create_bucket()
    
    files_to_upload = []
    for root, _, files in os.walk(PORTFOLIO_DIR):
        for f in files:
            ext = f.lower()
            if ext.endswith(".mp4") or ext.endswith(".jpg") or ext.endswith(".jpeg") or ext.endswith(".png"):
                files_to_upload.append(os.path.join(root, f))
                
    uploaded_urls = {}
    for f in files_to_upload:
        url = upload_file(f)
        if url:
            uploaded_urls[os.path.basename(f)] = url
            
    with open("src/data/media_links.json", "w") as f:
        json.dump(uploaded_urls, f, indent=2)
    print("Saved URLs to src/data/media_links.json")
