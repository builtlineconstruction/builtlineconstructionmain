from bs4 import BeautifulSoup
import os

def generate_alt_text(src, page_name=""):
    src_lower = src.lower()
    page_lower = page_name.lower()

    # Logo
    if "logo" in src_lower:
        return "Builtline Construction Logo - Trusted Builders in Bangalore"

    # Hero/Banner
    if any(x in src_lower for x in ["hero", "banner", "main", "bg", "background"]):
        return "Best Construction Company in Bangalore - Builtline Construction"

    # About
    if "about" in src_lower:
        return "Builtline Construction Team - Experienced Builders in Bangalore"

    # Residential
    if "residential" in src_lower:
        return "Residential Building Construction in Bangalore - Builtline"

    # Commercial
    if "commercial" in src_lower:
        return "Commercial Building Construction in Bangalore - Builtline"

    # Renovation
    if "renovation" in src_lower:
        return "Home Renovation Services in Bangalore - Builtline Construction"

    # Structural
    if "structural" in src_lower:
        return "Structural Works and Construction in Bangalore - Builtline"

    # Planning
    if "planning" in src_lower or "plan" in src_lower:
        return "Construction Project Planning in Bangalore - Builtline"

    # Quality/Safety
    if "quality" in src_lower or "safety" in src_lower:
        return "Quality and Safety Standards in Construction - Builtline"

    # Sustainable
    if "sustainable" in src_lower or "eco" in src_lower:
        return "Sustainable Construction Solutions in Bangalore - Builtline"

    # G+2
    if any(x in src_lower for x in ["g2", "gplus2", "g-2", "g_2"]):
        return "G+2 House Construction in Bangalore - Builtline Construction"

    # G+1
    if any(x in src_lower for x in ["g1", "gplus1", "g-1", "g_1"]):
        return "G+1 House Construction in Bangalore - Builtline Construction"

    # 30x40
    if "30x40" in src_lower or "30-40" in src_lower:
        return "30x40 House Construction in Bangalore - Builtline Construction"

    # Checklist
    if "checklist" in src_lower:
        return "House Construction Checklist in Bangalore - Builtline"

    # Turnkey
    if "turnkey" in src_lower:
        return "Turnkey Construction Company in Bangalore - Builtline"

    # Project/Work
    if any(x in src_lower for x in ["project", "work", "site", "construction"]):
        return "Construction Project in Bangalore - Builtline Construction"

    # Team/Staff
    if any(x in src_lower for x in ["team", "staff", "worker", "engineer"]):
        return "Builtline Construction Team - Professional Builders Bangalore"

    # Area wise — check page name too
    area_map = {
        "malleshwaram": "Construction Company in Malleshwaram Bangalore",
        "whitefield": "Construction Company in Whitefield Bangalore",
        "indiranagar": "Construction Company in Indiranagar Bangalore",
        "jayanagar": "Construction Company in Jayanagar Bangalore",
        "hebbal": "Construction Company in Hebbal Bangalore",
        "yelahanka": "Construction Company in Yelahanka Bangalore",
        "yalahanka": "Construction Company in Yelahanka Bangalore",
        "rajajinagar": "Construction Company in Rajajinagar Bangalore",
        "basavanagudi": "Construction Company in Basavanagudi Bangalore",
        "electroniccity": "Construction Company in Electronic City Bangalore",
        "electronic": "Construction Company in Electronic City Bangalore",
        "banashankari": "Construction Company in Banashankari Bangalore",
        "koramangala": "Construction Company in Koramangala Bangalore",
        "bannerghatta": "Construction Company in Bannerghatta Bangalore",
        "banneragatta": "Construction Company in Bannerghatta Bangalore",
        "mahadevpura": "Construction Company in Mahadevpura Bangalore",
        "yeswanthpur": "Construction Company in Yeswanthpur Bangalore",
        "yashwanthpur": "Construction Company in Yeswanthpur Bangalore",
        "gangondanahalli": "Construction Company in Gangondanahalli Bangalore",
        "basaveshwar": "Construction Company in Basaveshwar Nagar Bangalore",
        "rrnagar": "Construction Company in RR Nagar Bangalore",
        "kengeri": "Construction Company in Kengeri Bangalore",
        "vidyapeeta": "Construction Company in Vidyapeeta Bangalore",
        "hemmigepura": "Construction Company in Hemmigepura Bangalore",
        "sahakaranagar": "Construction Company in Sahakara Nagar Bangalore",
    }

    for area, alt in area_map.items():
        if area in src_lower or area in page_lower:
            return alt + " - Builtline Construction"

    # Default fallback
    return "Construction Services in Bangalore - Builtline Construction"

def process_html_files():
    # Get current directory
    current_dir = os.getcwd()
    
    # Find all HTML files
    html_files = []
    for root, dirs, files in os.walk(current_dir):
        # Skip hidden folders
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for file in files:
            if file.endswith('.html') or file.endswith('.htm'):
                html_files.append(os.path.join(root, file))

    if not html_files:
        print("No HTML files found in current directory!")
        return

    print(f"Found {len(html_files)} HTML files")
    print("-" * 50)

    total_updated = 0
    total_images = 0

    for filepath in html_files:
        filename = os.path.basename(filepath)
        
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            soup = BeautifulSoup(content, 'html.parser')
            images = soup.find_all('img')
            
            updated_count = 0
            for img in images:
                # Only update empty or missing alt tags
                current_alt = img.get('alt', None)
                if current_alt is None or current_alt.strip() == '':
                    src = img.get('src', '')
                    alt_text = generate_alt_text(src, filename)
                    img['alt'] = alt_text
                    updated_count += 1
                    total_images += 1

            if updated_count > 0:
                # Save updated file
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                print(f"✅ {filename} — {updated_count} images updated")
                total_updated += 1
            else:
                print(f"⏭️  {filename} — No empty alt tags found")

        except Exception as e:
            print(f"❌ Error in {filename}: {e}")

    print("-" * 50)
    print(f"✅ DONE! Updated {total_images} images across {total_updated} files!")
    print()
    print("Next steps:")
    print("1. Upload all updated HTML files to your server")
    print("2. Run PageSpeed test again to see improvement")
    print("3. Check Accessibility score — should improve!")


if __name__ == "__main__":
    print("=" * 50)
    print("BUILTLINE CONSTRUCTION - AUTO ALT TEXT ADDER")
    print("=" * 50)
    print()
    process_html_files()