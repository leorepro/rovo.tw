#!/bin/bash
# =============================================================================
# Script to download all images from https://rovo.titansoft.com.sg
# =============================================================================
# Usage:  bash download_images.sh
#
# This script:
#   1. Downloads the HTML of the Rovo landing page
#   2. Extracts all image URLs (img src, CSS url(), meta tags, etc.)
#   3. Scans linked CSS and JS files for additional image references
#   4. Downloads all found images to src/assets/
#
# Requirements: curl, sed, awk (all available on macOS by default)
# =============================================================================

set -euo pipefail

ASSETS_DIR="/Users/leochiang/Documents/Atlassian /rovo.tw/rovo.tw/src/assets"
BASE_URL="https://rovo.titansoft.com.sg"
TEMP_DIR="/tmp/rovo_download_$$"

# Create working directories
mkdir -p "$ASSETS_DIR"
mkdir -p "$TEMP_DIR"
echo "[INFO] Assets directory: $ASSETS_DIR"
echo "[INFO] Temp directory: $TEMP_DIR"

# Cleanup on exit
cleanup() {
    rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

# ---- Step 1: Download the main page HTML ----
echo ""
echo "=== Step 1: Downloading page HTML ==="
curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" "$BASE_URL" -o "$TEMP_DIR/page.html"
HTML_SIZE=$(wc -c < "$TEMP_DIR/page.html" | tr -d ' ')
echo "[OK] Downloaded HTML ($HTML_SIZE bytes)"

if [ "$HTML_SIZE" -lt 100 ]; then
    echo "[ERROR] HTML file is too small, something went wrong."
    echo "[ERROR] Try opening $BASE_URL in your browser to verify the site is up."
    exit 1
fi

# ---- Step 2: Extract image URLs ----
echo ""
echo "=== Step 2: Extracting image URLs ==="

# Use sed/awk to extract image URLs (macOS compatible, no GNU grep -P needed)

# Extract all src="..." and href="..." attribute values
sed -n 's/.*\(src\|href\|content\|data-src\|data-bg\|poster\)="\([^"]*\)".*/\2/p' "$TEMP_DIR/page.html" > "$TEMP_DIR/all_attrs.txt" 2>/dev/null || true
sed -n "s/.*\(src\|href\|content\|data-src\|data-bg\|poster\)='\([^']*\)'.*/\2/p" "$TEMP_DIR/page.html" >> "$TEMP_DIR/all_attrs.txt" 2>/dev/null || true

# Also extract url() references from inline styles
sed -n 's/.*url(\([^)]*\)).*/\1/p' "$TEMP_DIR/page.html" | tr -d "\"'" >> "$TEMP_DIR/all_attrs.txt" 2>/dev/null || true

# More thorough extraction: get ALL attribute values that look like image paths
# This catches cases where the simple sed above misses due to multiple attributes per line
awk -F'"' '{for(i=1;i<=NF;i++) if($i ~ /\.(png|jpg|jpeg|gif|svg|webp|ico|avif|bmp|tiff)/) print $i}' "$TEMP_DIR/page.html" >> "$TEMP_DIR/all_attrs.txt" 2>/dev/null || true
awk -F"'" '{for(i=1;i<=NF;i++) if($i ~ /\.(png|jpg|jpeg|gif|svg|webp|ico|avif|bmp|tiff)/) print $i}' "$TEMP_DIR/page.html" >> "$TEMP_DIR/all_attrs.txt" 2>/dev/null || true

# Also check for base64 image data (to report, not download)
BASE64_COUNT=$(grep -c 'data:image' "$TEMP_DIR/page.html" 2>/dev/null || echo "0")
if [ "$BASE64_COUNT" -gt 0 ]; then
    echo "[INFO] Found $BASE64_COUNT base64-encoded images (inline, not downloadable)"
fi

# Filter for image file extensions only
grep -iE '\.(png|jpg|jpeg|gif|svg|webp|ico|avif|bmp|tiff)' "$TEMP_DIR/all_attrs.txt" 2>/dev/null | \
    grep -v '^data:' | \
    grep -v '^$' | \
    sed 's/[?#].*//' | \
    sort -u > "$TEMP_DIR/image_urls_raw.txt" || true

echo "[INFO] Found $(wc -l < "$TEMP_DIR/image_urls_raw.txt" | tr -d ' ') image URLs from HTML"
cat "$TEMP_DIR/image_urls_raw.txt"

# ---- Step 3: Scan linked CSS files ----
echo ""
echo "=== Step 3: Scanning linked CSS files ==="

# Extract CSS file URLs
grep -oE 'href="[^"]*\.css[^"]*"' "$TEMP_DIR/page.html" 2>/dev/null | sed 's/href="//;s/"$//' > "$TEMP_DIR/css_urls.txt" || true

CSS_COUNT=$(wc -l < "$TEMP_DIR/css_urls.txt" | tr -d ' ')
echo "[INFO] Found $CSS_COUNT linked CSS files"

while IFS= read -r css_url; do
    [ -z "$css_url" ] && continue
    # Make absolute
    if [[ "$css_url" != http* ]]; then
        css_url="${BASE_URL}/${css_url#/}"
    fi
    echo "  Scanning: $css_url"
    curl -sL "$css_url" -o "$TEMP_DIR/css_temp.txt" 2>/dev/null || continue
    # Extract url() references from CSS
    sed -n 's/.*url(\([^)]*\)).*/\1/p' "$TEMP_DIR/css_temp.txt" 2>/dev/null | \
        tr -d "\"'" | \
        grep -iE '\.(png|jpg|jpeg|gif|svg|webp|ico|avif)' | \
        sed 's/[?#].*//' >> "$TEMP_DIR/image_urls_raw.txt" || true
done < "$TEMP_DIR/css_urls.txt"

# ---- Step 4: Scan linked JS files (for SPA image refs) ----
echo ""
echo "=== Step 4: Scanning linked JS files ==="

grep -oE 'src="[^"]*\.js[^"]*"' "$TEMP_DIR/page.html" 2>/dev/null | sed 's/src="//;s/"$//' > "$TEMP_DIR/js_urls.txt" || true

JS_COUNT=$(wc -l < "$TEMP_DIR/js_urls.txt" | tr -d ' ')
echo "[INFO] Found $JS_COUNT linked JS files"

while IFS= read -r js_url; do
    [ -z "$js_url" ] && continue
    if [[ "$js_url" != http* ]]; then
        js_url="${BASE_URL}/${js_url#/}"
    fi
    echo "  Scanning: $js_url"
    curl -sL "$js_url" -o "$TEMP_DIR/js_temp.txt" 2>/dev/null || continue
    # Extract quoted strings that look like image paths
    awk -F'"' '{for(i=1;i<=NF;i++) if($i ~ /\.(png|jpg|jpeg|gif|svg|webp|ico|avif)/) print $i}' "$TEMP_DIR/js_temp.txt" >> "$TEMP_DIR/image_urls_raw.txt" 2>/dev/null || true
    awk -F"'" '{for(i=1;i<=NF;i++) if($i ~ /\.(png|jpg|jpeg|gif|svg|webp|ico|avif)/) print $i}' "$TEMP_DIR/js_temp.txt" >> "$TEMP_DIR/image_urls_raw.txt" 2>/dev/null || true
done < "$TEMP_DIR/js_urls.txt"

# ---- Deduplicate all found URLs ----
sort -u "$TEMP_DIR/image_urls_raw.txt" > "$TEMP_DIR/image_urls_final.txt" 2>/dev/null || true
TOTAL_URLS=$(wc -l < "$TEMP_DIR/image_urls_final.txt" | tr -d ' ')

echo ""
echo "============================================="
echo "  Total unique image URLs found: $TOTAL_URLS"
echo "============================================="
cat "$TEMP_DIR/image_urls_final.txt"
echo ""

if [ "$TOTAL_URLS" -eq 0 ]; then
    echo "[WARNING] No image URLs found!"
    echo "[INFO] The website might be a SPA that loads images dynamically."
    echo "[INFO] Try these alternative approaches:"
    echo "  1. Open $BASE_URL in Chrome"
    echo "  2. Right-click -> Inspect -> Network tab -> filter by 'Img'"
    echo "  3. Reload the page and note all image URLs"
    echo "  4. Or use: chrome DevTools -> Sources -> find image files"
    echo ""
    echo "[INFO] You can also try using wget to mirror the site:"
    echo "  wget -r -l 1 -A 'png,jpg,jpeg,gif,svg,webp' -P '$ASSETS_DIR' '$BASE_URL'"
    exit 0
fi

# ---- Step 5: Download each image ----
echo "=== Step 5: Downloading images ==="
DOWNLOADED=0
FAILED=0
SKIPPED=0

while IFS= read -r img_url; do
    [ -z "$img_url" ] && continue

    # Make absolute URL if relative
    if [[ "$img_url" != http* ]]; then
        # Handle relative paths starting with / or ./
        img_url="${BASE_URL}/${img_url#./}"
        img_url="${img_url/\/\///}"  # fix double slashes
        # Ensure proper URL format
        img_url=$(echo "$img_url" | sed 's|//|/|g; s|:/|://|')
    fi

    # Get filename from URL
    filename=$(basename "$img_url" | sed 's/[?#].*//')

    # Skip if filename is empty or just an extension
    if [ -z "$filename" ] || [ "$filename" = "." ]; then
        echo "  [SKIP] Invalid filename from: $img_url"
        SKIPPED=$((SKIPPED + 1))
        continue
    fi

    # Handle duplicate filenames
    if [ -f "$ASSETS_DIR/$filename" ]; then
        counter=1
        base="${filename%.*}"
        ext="${filename##*.}"
        while [ -f "$ASSETS_DIR/${base}_${counter}.${ext}" ]; do
            counter=$((counter + 1))
        done
        filename="${base}_${counter}.${ext}"
    fi

    echo -n "  Downloading: $img_url -> $filename ... "
    if curl -sL -A "Mozilla/5.0" "$img_url" -o "$ASSETS_DIR/$filename" 2>/dev/null; then
        file_size=$(wc -c < "$ASSETS_DIR/$filename" | tr -d ' ')
        if [ "$file_size" -gt 100 ]; then
            echo "OK (${file_size} bytes)"
            DOWNLOADED=$((DOWNLOADED + 1))
        else
            echo "SKIPPED (${file_size} bytes - too small, likely error page)"
            rm -f "$ASSETS_DIR/$filename"
            SKIPPED=$((SKIPPED + 1))
        fi
    else
        echo "FAILED (curl error)"
        rm -f "$ASSETS_DIR/$filename"
        FAILED=$((FAILED + 1))
    fi
done < "$TEMP_DIR/image_urls_final.txt"

# ---- Summary ----
echo ""
echo "============================================="
echo "  Download Summary"
echo "============================================="
echo "  Downloaded: $DOWNLOADED"
echo "  Skipped:    $SKIPPED"
echo "  Failed:     $FAILED"
echo "  Location:   $ASSETS_DIR"
echo "============================================="
echo ""

if [ "$DOWNLOADED" -gt 0 ]; then
    echo "Downloaded files:"
    ls -lh "$ASSETS_DIR/" | grep -v '^total' | grep -v '^\.'
fi

echo ""
echo "[DONE] Script complete."
echo ""
echo "If some images are missing, try the wget mirror approach:"
echo "  wget -r -l 2 -A 'png,jpg,jpeg,gif,svg,webp,ico' -nd -P '$ASSETS_DIR' '$BASE_URL'"
