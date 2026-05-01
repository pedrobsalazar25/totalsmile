#!/usr/bin/env python3
from PIL import Image
import os

# Paths
images_dir = "/workspace/smile-sanctuary/images"
logo_path = "/workspace/uploads/logo.png"
output_dir = "/workspace/smile-sanctuary/images_with_logo"
os.makedirs(output_dir, exist_ok=True)

# Load logo and make it semi-transparent for blending
logo = Image.open(logo_path).convert("RGBA")

# Resize logo to a reasonable wall sign size (120px wide, maintain aspect ratio)
logo_width = 120
logo_ratio = logo.width / logo.width
logo_height = int(logo_width * logo_ratio)
logo = logo.resize((logo_width, logo_height), Image.LANCZOS)

# Service images to process (the 7 without logo)
images_to_process = [
    "Dentures Service Image.webp",
    "Endodontic Procedures Service Image.webp",
    "Oral Surgery Service Image.webp",
    "Restorative Dentistry Service Image.webp",
    "Sedation Dentistry Service Image.webp",
    "Specialty Procedures Service Image.webp",
    "Wisdom Teeth Service Image.webp",
]

for img_name in images_to_process:
    img_path = os.path.join(images_dir, img_name)
    if not os.path.exists(img_path):
        print(f"Skipping {img_name} - not found")
        continue

    # Open service image
    img = Image.open(img_path).convert("RGBA")
    img_width, img_height = img.size

    # Position logo in bottom right with padding (like a wall plaque/sign)
    padding = 20
    x = img_width - logo.width - padding
    y = img_height - logo.height - padding

    # Create a transparent layer to composite onto
    # Make logo slightly visible as a subtle clinic sign
    logo_layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    logo_layer.paste(logo, (x, y), logo)

    # Composite logo onto the image
    result = Image.alpha_composite(img, logo_layer)
    result = result.convert("RGB")

    # Save
    output_name = img_name.replace(".webp", " with Logo.jpg")
    output_path = os.path.join(output_dir, output_name)
    result.save(output_path, "JPEG", quality=95)
    print(f"Processed: {img_name} -> {output_name}")

print("\nAll done! Check /workspace/smile-sanctuary/images_with_logo/")
