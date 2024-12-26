import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
    { src: "https://i.ibb.co.com/7zX11rH/Shutki-Bhuna.jpg", alt: "Image 1" },
    { src: "https://i.ibb.co.com/tLSsLzG/shorshe-ilish.webp", alt: "Image 2" },
    { src: "https://i.ibb.co.com/ChDfqYV/Pithas-Rice-Cakes.webp", alt: "Image 3" },
    { src: "https://i.ibb.co.com/nw4Pc1x/Panta-Bhat.jpg", alt: "Image 4" },
    { src: "https://i.ibb.co.com/swYC8Ys/Mishti-Doi.jpg", alt: "Image 5" },
    { src: "https://i.ibb.co.com/Vqg2H7H/Dim-Bhuna.jpg", alt: "Image 6" },
    { src: "https://i.ibb.co.com/x10f7Mz/chingrir-malaikari.webp", alt: "Image 7" },
    { src: "https://i.ibb.co.com/PMPZWdr/baigan-bharta.webp", alt: "Image 8" },
    { src: "https://i.ibb.co.com/yQMdvG4/beef-tehari-bengali-style-258218695.webp", alt: "Image 9" },
    { src: "https://i.ibb.co.com/M9KX0Bx/kacci.jpg", alt: "Image 10" },
    
];

const GalleryPage = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <div className="min-h-screen">
            {/* Page Title */}
            <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('https://i.ibb.co.com/3FhDkqY/gal.jpg')" }}>
                <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                    Food Gallery
                </h1>
            </div>

            {/* Gallery Section */}
            <div className=" w-10/12 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="cursor-pointer">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full rounded shadow hover:scale-125 transition-transform duration-300"
                            onClick={() => handleImageClick(index)}
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.map((img) => ({ src: img.src }))}
                    index={currentIndex}
                />
            )}
        </div>
    );
};

export default GalleryPage;
