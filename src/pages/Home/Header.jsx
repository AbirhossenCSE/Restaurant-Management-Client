import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Header = () => {
    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co.com/28ShBXT/11.webp",
            title: "Cricket",
            description: "High-quality English willow cricket bat, perfect for professional and casual players.",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/RyPnRxq/22.jpg",
            title: "Football",
            description: "Premium FIFA-approved leather football, ideal for competitive matches.",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/nkf0HLx/33.jpg",
            title: "Badminton",
            description: "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        },
    ];

    return (
        <div>
            <header>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative h-[400px]">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                                    <h2 className="text-4xl font-bold">{slide.title}</h2>
                                    <p className="text-lg mt-4">{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </header>
        </div>
    );
};

export default Header;