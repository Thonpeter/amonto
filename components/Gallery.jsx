"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
    // Create an array of 17 images with captions.
    const images = Array.from({ length: 32 }, (_, i) => ({
        src: `/gallery/image (${i + 1}).jpg`,
        alt: `Gallery Image ${i + 1}`,
        caption: `Image ${i + 1}`,
    }));

    // Use state to keep track of the currently selected image for the modal.
    const [selectedImage, setSelectedImage] = useState < string | null > (null);

    return (
        <section id="gallery" className="min-h-screen py-16">
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
                {/* Header */}
                <header className="py-12 text-center">
                    <h1 className="text-5xl font-extrabold text-primary drop-shadow-md">
                        Gallery
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Explore our campus through these stunning images.
                    </p>
                </header>

                {/* Gallery Grid */}
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                                        {image.caption}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full px-4 py-2 animate-zoomIn">
                            <button
                                className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>
                            <div className="overflow-hidden rounded-xl shadow-2xl">
                                <Image
                                    src={selectedImage}
                                    alt="Expanded view"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
