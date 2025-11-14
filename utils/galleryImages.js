// Utility for managing dynamic gallery images
// Gallery has images from image (1).jpg to image (33).jpg (some numbers may be missing)

export const GALLERY_IMAGES = Array.from({ length: 33 }, (_, i) => 
  `/gallery/image (${i + 1}).jpg`
);

/**
 * Get a random gallery image
 */
export function getRandomGalleryImage() {
  const randomIndex = Math.floor(Math.random() * GALLERY_IMAGES.length);
  return GALLERY_IMAGES[randomIndex];
}

/**
 * Get multiple random gallery images (unique)
 */
export function getRandomGalleryImages(count = 1) {
  const shuffled = [...GALLERY_IMAGES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, GALLERY_IMAGES.length));
}

/**
 * Get a specific gallery image by index (0-based)
 */
export function getGalleryImage(index) {
  return GALLERY_IMAGES[index % GALLERY_IMAGES.length];
}

/**
 * Get images for a rotating background (returns array of images)
 */
export function getRotatingBackgroundImages(count = 5) {
  return getRandomGalleryImages(count);
}

