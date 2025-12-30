import os
import re
import urllib.request
import urllib.parse
import ssl
import json
from urllib.parse import urlparse
from pathlib import Path

# Configuration
SOURCE_DIR = "."
DEST_DIR = "./web/public/images/rescued"
ASSET_MAP_FILE = "./web/asset_map.json"
ALLOWED_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.woff', '.woff2', '.ttf', '.otf', '.mp4', '.webm'}

# Regex to find Framer URLs
FRAMER_URL_PATTERN = r'https://framerusercontent\.com/[a-zA-Z0-9\._\-]+(?:/|[a-zA-Z0-9\._\-]+)*'

def find_html_files(directory):
    html_files = []
    for root, dirs, files in os.walk(directory):
        if "web" in dirs:
            dirs.remove("web") 
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

def extract_urls(files):
    urls = set()
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = re.findall(FRAMER_URL_PATTERN, content)
                for match in matches:
                    urls.add(match)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    return list(urls)

def download_assets(urls):
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)
    
    asset_map = {}
    
    ssl_context = ssl._create_unverified_context()

    print(f"Found {len(urls)} URLs. filtering and downloading...")
    
    for i, url in enumerate(urls):
        try:
            parsed = urlparse(url)
            ext = os.path.splitext(parsed.path)[1].lower()
            
            if ext not in ALLOWED_EXTENSIONS:
                continue

            filename = os.path.basename(parsed.path)
            if not filename or "." not in filename:
                filename = f"asset_{i}{ext}"
            
            local_path = os.path.join(DEST_DIR, filename)
            asset_map[url] = f"/images/rescued/{filename}"
            
            if os.path.exists(local_path):
                # print(f"Skipping {filename}")
                continue

            print(f"Downloading {filename}...")
            try:
                with urllib.request.urlopen(url, context=ssl_context, timeout=10) as response:
                    if response.status == 200:
                        with open(local_path, 'wb') as f:
                            f.write(response.read())
            except Exception as e:
                print(f"Failed to download {url}: {e}")
                
        except Exception as e:
            print(f"Error processing {url}: {e}")
            
    with open(ASSET_MAP_FILE, 'w') as f:
        json.dump(asset_map, f, indent=2)
    
    print("Asset rescue complete.")

def main():
    print("Scanning for HTML files...")
    files = find_html_files(SOURCE_DIR)
    print(f"Found {len(files)} HTML files.")
    
    print("Extracting URLs...")
    urls = extract_urls(files)
    
    download_assets(urls)

if __name__ == "__main__":
    main()
