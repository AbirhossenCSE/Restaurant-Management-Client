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
            image: "https://i.ibb.co.com/M9KX0Bx/kacci.jpg",
            title: "Kacchi Biryani",
            description: "A popular Bangladeshi biryani made with marinated mutton, rice, and saffron-infused spices.",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/tLSsLzG/shorshe-ilish.webp",
            title: "Shorshe Ilish",
            description: "A classic Bangladeshi dish of hilsa fish cooked in mustard seed paste and mustard oil.",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/swYC8Ys/Mishti-Doi.jpg",
            title: "Mishti Doi",
            description: "A traditional Bangladeshi dessert made with sweetened fermented yogurt.",
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